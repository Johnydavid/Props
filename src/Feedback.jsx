import React, {useState, useEffect} from "react";
import './Feedback.css';
import axios from 'axios'


const Feedback = () => {
    const [input, setInput] = useState({
        name : "",
        empid: "",
        teamname:""
    });

    const [error, setError] = useState("");

    const handleChange= ({target}) =>{
        setInput({...input, [target.name]: target.value});
        // console.log(target.value)


    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setInput(
            {  name : "",
                empid: "",
                teamname:""
           });
     
           
        try{                
        const url = "https://63d20cd64abff88834033efe.mockapi.io/users"
        const {input: res} = await axios.post(url, input)
        console.log(res.message);    
        getUsers();
     
        
    }
    catch(error){
        if(error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500){
            setError(error.response.data.message)
        }
    }

    }

const clear = ()=>{
    setInput(
        {  name : "",
            empid: "",
            teamname:""
       });
    
}

const[data, setData] = useState([]);
const[counter, setCounter] = useState(0);


const handleLike = ()=>{
    setCounter(counter+1);
}


const getUsers = async () =>{
    const url = "https://63d20cd64abff88834033efe.mockapi.io/users"
    const response = await axios.get(url)
    setData(response.data)
    console.log(response.data)

}

useEffect(()=>{
    getUsers();
    
   
}, [])


  return <div>
    <div className="container">

  
    <form  onSubmit={handleSubmit}  className = {"formClass"}>
        <label  > Name </label>
        <input type = "text" name="name" onChange={handleChange} value={input.name} placeholder="Name"
        required></input>
            <label> Employee ID </label>
        <input type = "text" name="empid" onChange={handleChange} value={input.empid} placeholder="Employee ID"
        required></input>
          <label> Team Name </label>
        <input type = "text" name="teamname" onChange={handleChange} value={input.teamname} placeholder="Team Name"
        required></input>
        <div> {error}</div>

        <button  className="fieldClass"  type="submit">Submit</button>
        <button onClick={handleLike}>Like</button>


        
     
    </form>

<badge>Likes:  {counter}</badge>



    </div>
    <div>
    
        {data.map((data)=>{
                const{name, empid, teamname} = data
                localStorage.setItem("firstName", name);
                localStorage.setItem("Empid", empid);
                localStorage.setItem("Teamname", teamname);

            return(
                <>
                <h1>{name}</h1>
                <div>{teamname}</div>
                <div>{empid}</div>

                </>

            )
     })}
    </div>

  </div>;
};

export default Feedback;
