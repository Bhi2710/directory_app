import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const View = () => {
  
  const [value, setValue] = useState();
  const [find, setFind] = useState("");

  let localdata = localStorage.getItem("data");
  let get = JSON.parse(localdata);

  const finds = () => {
    get.forEach((e) => {
      if (e.Aadhar === value) {
        setFind(e);
      }else if(e.Aadhar === ""){
        <h1>No Data</h1>
      }
    });
  };

  return (
    <div className='Main'>
      <div className='Main_container_button'>
        <Link to= "/" style={{ backgroundColor: "#4D72BE", border:"none", color:"white", padding: "8px 10px", fontWeight:"600", cursor:"pointer", marginRight:"1.5rem", textDecoration:"none"}}>
          Add Information
        </Link>
        <Link to= "/view" style={{ backgroundColor: "#4D72BE", border:"none", color:"white", padding: "8px 10px", fontWeight:"600", cursor:"pointer", marginRight:"1.5rem", textDecoration:"none"}}>
          Retrieve Information
        </Link>
        <div className='Main_table_container'>
          <div className='Main_table_container_button'>
            <button>Retrieve Information</button>
          </div>
          <div className='View_input'>
            <input type="text" onChange={(e)=> setValue(e.target.value)}
            />
            <button onClick={() => finds()}>
              Find
            </button>
          </div>
          <div className='Main_button_view_result'>
            <h5><span>Name:&emsp;</span> <span>{find.Name}</span></h5>
            <h5><span>DOB:&emsp;</span> <span>{find.DOB}</span></h5>
            <h5><span>Aadhar:&emsp;</span> <span>{find.Aadhar}</span></h5>
            <h5><span>Mobile No:&emsp;</span> <span>{find.Mobile}</span></h5>
            <h5><span>Age: &emsp;</span> <span>{find.Age}</span></h5>
          </div>         
        </div>
      </div>
    </div>
  );
}

export default View;