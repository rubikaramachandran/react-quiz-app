
import "./Welcome.css"
import { Link } from "react-router-dom";
import { MyContext } from "../Context";
import { useContext } from "react";

const Welcome=()=>{

      let allValues = useContext(MyContext);
      let user = allValues[4];
    return(
        <div className="welcome">
            <section className="con"> 
                <h1> {user && user.name} Welcome to the Quizz</h1>
                {user && (
                <Link to="/quiz"> 
                 <button>Start Quizz</button>
                
                </Link>
                 )}
               
            </section>

        </div>
    )
}





export default Welcome;



