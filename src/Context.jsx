import React,{createContext,useState} from "react"
import questions from "./questions.json"
import Router from "./Router";

export let MyContext=createContext();

const Context=()=>{
    //mmycontext

    let[data,setData]=useState(questions);

    let[index,setIndex]=useState(0);

     let [user, setUser] = useState(null);


return(

    <div>
     <MyContext.Provider value={[data,setData,index,setIndex,user ,setUser]}>

            <Router></Router>
        
        </MyContext.Provider>  

    </div>
)

}

export default Context





