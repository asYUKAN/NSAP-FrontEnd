import React, { useState } from 'react';
import Axios from 'axios';
function ApplicantForm()
{

     
       const url="http://127.0.0.1:8000/api/apply/";
       const [data,setData]=useState({
            Name:"",
            FName:"",
            Gender:"",
            DOB:"",
            Age:"",
            Category:"",
            Ward:"",
            SubDistrict:"",
            District:"",
            State:"",
            
            Pincode:"", 
            
            Mobile:"",
            AadharNo:"",
            Disablity:"",
            DisabilityType:"",
            BPL_Family_ID:"",
            BankDetails:"",
            IGNOAPS:"",
            IGNWPS:"",
            IGNDPS:"",
            NFBS:""
                });

    
    
    

    
   const handleSubmit=(e)=>
    {
        e.preventDefault();
        
        console.log(data);
        Axios.post(url,data).then(res=>{
            console.log(res.data);
        });
    }
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    
    
        return(
        <div>
          <form onSubmit={handleSubmit}>
                <input  onChange={handleChange} name="Name" value={data.Name} placeholder='Name' type="text"></input>
                <input onChange={handleChange} name="FName" value={data.FName} placeholder='Fname' type='text'></input>
                <input onChange={handleChange} name="Gender" value={data.Gender} placeholder='Gender' type='text'></input>
                <input onChange={handleChange} name="DOB" value={data.DOB} placeholder='DOB' type='text'></input>
                <input onChange={handleChange} name="Age" value={data.Age} placeholder='Age' type='number'></input>
                <input onChange={handleChange} name="Category" value={data.Category} placeholder='Category' type='text'></input>
                <input onChange={handleChange} name="Ward" value={data.Ward} placeholder='Ward' type='text'></input>
                <input onChange={handleChange} name="SubDistrict" value={data.SubDistrict} placeholder='SubDistrict' type='text'></input>
                <input onChange={handleChange} name="District" value={data.District} placeholder='District' type='text'></input>
                <input onChange={handleChange} name="State" value={data.State} placeholder='State' type='text'></input>
                <input onChange={handleChange} name="Pincode" value={data.Pincode} placeholder='Pincode' type='number'></input>
                <input onChange={handleChange} name="Mobile" value={data.Mobile} placeholder='Mobile' type='number'></input>
                <input onChange={handleChange} name="AadharNo" value={data.AadharNo} placeholder='AadharNo' type='number'></input>
                <input onChange={handleChange} name="Disability" value={data.Disablity} placeholder='Disability' type='text'></input>
                <input onChange={handleChange} name="DisabilityType" value={data.DisabilityType} placeholder='DisabilityType' type='text'></input>
                <input onChange={handleChange} name="BPL_Family_ID" value={data.BPL_Family_ID} placeholder='BPL_Family_ID' type='text'></input>
                <input onChange={handleChange} name="BankDetails" value={data.BankDetails} placeholder='BankDetails' type='text'></input>
                <input onChange={handleChange} name="IGNOAPS" value={data.IGNOAPS} placeholder='IGNOAPS' type='text'></input>
                <input onChange={handleChange} name="IGNWPS" value={data.IGNWPS} placeholder='IGNWPS' type='text'></input>
                <input onChange={handleChange} name="IGNDPS" value={data.IGNDPS} placeholder='IGNDPS' type='text'></input>
                <input onChange={handleChange} name="NFBS" value={data.NFBS} placeholder='NFBS' type='text'></input>
                <input type="submit" value="Submit" />
                
          </form>
                
                
            
       

    </div>);
    
   
}
export default ApplicantForm;
