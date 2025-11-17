
import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";


const Signup=()=>{
    //mysignup


    let navigate=useNavigate();


    let[signup,setSignup]=useState(
        {
            name:"",
            email:"",
            password:"",
            quiz:null,
        }

        
    )


    function handleInput(eve){
                       setSignup({...signup,[eve.target.name]: eve.target.value})
         
  

    }

    async function handleSubmit(eve){
        eve.preventDefault();
    



       let res= await fetch( "https://690ecf33bd0fefc30a0577a5.mockapi.io/api/users",
    {
      method:"POST",
      headers:{
        "content-type":"application/json",

      },

      body:JSON.stringify(signup),
    }
)

    let userResult = await res.json();

    setSignup({
      name: "",
      email: "",
      password: "",
      quiz: null,
    });
    if (typeof userResult == "object") {
      navigate("/login");
    }


    }
    
    return(
        <div className="signup">
            <form action="" onSubmit={handleSubmit}>
              <h1>SignUp</h1>
                   <input type="text"  placeholder="Enter the username" name="name" onInput={handleInput} value={signup.name}/>
                   <input type="email" placeholder="Enter your mail id" name="email" onInput={handleInput} value={signup.email}/>
                   <input type="password" placeholder="Enter 12 digit password" name="password"onInput={handleInput} value={signup.password} />
                   <input type="submit"  disabled={signup.email&& signup.name && signup.password ? false : true}/>

            </form>

        </div>
    )
}

export default Signup