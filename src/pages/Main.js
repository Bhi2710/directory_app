import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const getData = () =>{
  const items = localStorage.getItem('data')
  if(items){
    return JSON.parse(items);
  }else{
    return [];
  }
}

const Main = () =>{

  const [val, setVal] = useState([1]);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [adhar, setAdhar] = useState("");
  const [mob, setMob] = useState("");
  const [age, setAge] = useState("");
  const [arr, setArr] = useState(getData);
  const [isclick, setIsClick] = useState([]);
  

  const handleChange = (onChangeValue,i) =>{
    let inputdata = [...val] 
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata)
  }

  const handleDelete = (i) =>{
    const deleteVal = [...val]
    deleteVal.splice(i,1)
    setVal(deleteVal);
  }


  const handle=(idx)=>{
    if(name === "" || dob === "" || adhar === "" || mob === ""){
      alert("Fill the required detail");
    }else if(adhar.length !== 12){
      alert("Aadhar No. must be 12 digits");
    }else if(mob.length !== 10){
      alert(" No. must be 12 digits");
    }
    if(!isclick[idx]){
      setArr([...arr,{
        Name: `${name}`,
        DOB: `${dob}`,
        Aadhar: `${adhar}`,
        Mobile: `${mob}`,
        Age: `${age}`,
      }])
      setIsClick(()=>[...isclick, true])
    } 
  }
  console.log(arr, "%%")
  
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);


  return(
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
            <button>Add New Person</button>
          </div>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Date of birth</td>
                <td>Aadhar Number</td>
                <td>Mobile Number</td>
                <td>Age</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
            {val.map((data,i)=>{
                return(
                  <tr>
                    <td>
                      <input onChange={e=>{
                        handleChange(e,i)
                        setName(e.target.value)
                      }} type="name" required />
                    </td>
                    <td>
                      <input onChange={e=>{
                        handleChange(e,i)
                        setDob(e.target.value)
                      }} type="dob" required />
                    </td>
                    <td>
                      <input onChange={e=>{
                        handleChange(e,i)
                        setAdhar(e.target.value)
                      }} type="adhar" maxLength="12" required />
                    </td>
                    <td>
                      <input onChange={e=>{
                        handleChange(e,i)
                        setMob(e.target.value)
                      }} type="tel" pattern='[789][0-9]{9}' maxLength={"10"} required />
                      </td>
                    <td>
                      <input onChange={e=>{
                        handleChange(e,i)
                        setAge(e.target.value)
                      }} type="age" id="age" required />
                    </td>
                    <td>
                      <span onClick={()=>handle(i)}>{isclick[i] ? "Saved" : "Save"}</span>
                      <span onClick={()=>handleDelete(i)}>Delete</span>
                    </td>
                  </tr>
                )
            })}
            </tbody>
          </table>
          <div className='Main_button'>
            <button onClick={(()=>setVal ([...val, val.pop()+1]))}>Add</button>
          </div>         
        </div>
      </div>
    </div>
  );
}

export default Main;