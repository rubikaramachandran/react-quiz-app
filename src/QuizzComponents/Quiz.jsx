import "./Quiz.css"
import { MyContext } from "../Context"
import { useContext } from "react";

import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Quiz = () => {
    //myquizz

    let navigate=useNavigate();

    let [timer,setTimer]=useState(50);


    useEffect(
        ()=>{
            if(timer===0){
                 navigate("/result");
                return;
            }

            let interval=setInterval( ()=>{
                setTimer(timer-1);

            },1000);
            
              return () => {
      clearInterval(interval);
    };

      
        }, [timer] );

   let [data, setData, index, setIndex] = useContext(MyContext);
   let oneQuest=data[index];
   console.log(oneQuest);
   console.log(index);
   


   function handleInput(eve){
    oneQuest.yourAnswer=eve.target.value;

    setData([...data])

   }



   

    //   console.log(data,index);
    return (
        <div className="quiz">
            <header>
                <div>
                    <h3>username</h3>
                   
                </div>
                <div>
                     <h3>{timer}</h3>
                </div>



            </header>


            <main>
 
                <div>{oneQuest.question}</div>
                <div>{oneQuest.options.map((e,i)=>{
                    return(
                        <div key={i}>

                            <input type="radio" 
                            value={e}
                             name="opt"
                             onChange={handleInput} 
                            checked={oneQuest.yourAnswer ==e?true:false }
                            
                             />
                            <label htmlFor="">{e}</label>
 


                        </div>
                    )
                })
                    
                    
                    
                    } </div>
                <div>
                    {data.map((e,i) => {
                        return(
                            <button key={e.id}
                            onClick={
                                ()=>{
                                    setIndex(i);
                                }
                            }>
                                {e.id}
                            </button>
                        )
                    

                    

                        

                        

                    })}



                </div>

            </main>


            <footer>
                <div>
                    <button onClick={()=>{
                        if(index>0){
                        setIndex(index-1)
                    }
                    }}>Previous</button>
                    <button  onClick={()=>{
                        if(index<data.length-1){
                        setIndex(index+1)
                        }
                    }}>Next</button>

                </div>

                <div>
                    
                    <button
                          
                 onClick={() => {
              let confirmation = confirm("are really want to sumbit");
              console.log(confirmation);

              if (confirmation) {
                navigate("/result");
              }
            }}
                          
                          
                          >submit</button>
                  
                    
                </div>


            </footer>



        </div>
    )
}

export default Quiz




