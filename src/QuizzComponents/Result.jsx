import { useContext } from "react"
import { MyContext } from "../Context"
import "./Result.css"




const Result=()=>{
  //myresult

let [data]=useContext(MyContext);


return(
    <div className="result-page">
          {
            data.map((ele,i)=>{

                return(
                <div key={i} className={ele.answer===ele.yourAnswer ? "correct" : "wrong"}>
                    <p>{ele.question}</p>
                      

                        <div>
              {ele.options.map((e) => {
                return (
                  <div>
                    <input
                      type="radio"
                      value={e}
                      checked={ele.yourAnswer == e ? true : false}
                      disabled
                    />
                    <label htmlFor="">{e}</label>
                  </div>
                );
              })}
            </div> 


                    <h3>Correct Answer: {ele.answer}</h3>

                    <h4>Your Answer: {ele.yourAnswer}</h4>

                   

                    </div>
                )
            }
        )
          }
    </div>
)
}


export default Result