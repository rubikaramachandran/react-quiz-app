
import { useContext } from "react";
import "./Login.css";
import { MyContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login=()=>{
    let allValues = useContext(MyContext);
    let user = allValues[4];
    let setUser = allValues[5];
    let navigate = useNavigate();

    let [loginState, setLoginState] = useState({
        email:"",
        password:""
    })

    async function handleSubmit(eve){
        eve.preventDefault();
        let res = await fetch(`https://690ecf33bd0fefc30a0577a5.mockapi.io/api/users?email=${loginState.email}&password=${loginState.password}`)
        let data = await res.json();

        if(typeof data == "object"){
            setUser(data[0]);
            navigate("/");
        }
    }

    function handleInput(eve){
        setLoginState({...loginState, [eve.target.name]:eve.target.value});
    }
    return(
        <div className="login">
            <form action="" onSubmit={handleSubmit}>
                   
                   <input type="email" placeholder="Enter your mail id" value={loginState.email} onInput={handleInput} name="email"/>
                   <input type="password" placeholder="Enter 12 digit password" value={loginState.password} onInput={handleInput} name="password" />
                   <input type="submit" disabled={loginState.email && loginState.password ? false : true} />

            </form>

        </div>
    )
}

export default Login