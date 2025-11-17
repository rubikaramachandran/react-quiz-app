
import { MyContext } from "../Context";
import { useContext } from "react";

import { Outlet,Link } from "react-router-dom";
import "./Home.css";
const Home=()=>{
    


    let allValues=useContext(MyContext);
    let user=allValues[4];

    console.log(allValues);
    
     
    
    return(
        <div className="home">

            <nav className="navi">
                <div className="title">
                    <Link to="/">

                    
                    <h1>Quiz</h1>


                   </Link> 
                    </div>

                    {user ? 
                        <h1>{user.name}</h1>
                    :(
                
                
                    
                <div className="box">
                    <Link to="login">
                    <button>Login</button>

                    </Link>
                    <Link to="signup">
                    <button>Sign-up</button>
                    </Link>
                </div>

            )}
            </nav>

          <Outlet></Outlet>

          
        </div>
    )
}


export default Home