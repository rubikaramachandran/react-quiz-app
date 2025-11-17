import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./MainComponents/Home"

import Welcome from "./MainComponents/Welcome"

import Signup from "./MainComponents/Signup"
import Login from "./MainComponents/Login"
import Quiz from "./QuizzComponents/quiz"
import Result from "./QuizzComponents/Result"

let router=createBrowserRouter([    
    {
        path:"/",
        element:<Home></Home>,
        children:
        [

            {
                index:true,
                element:<Welcome></Welcome>
            },
            
            {
                path:"signup",
                element:<Signup></Signup>
            },
              {
                path:"login",
                element:<Login></Login>
            } 
        ]
    },
    {
        path:"/quiz",
        element:<Quiz></Quiz>
    },
     {
        path:"/result",
        element:<Result></Result>
    }
])

const Router=()=>{
    return(
        <div>
         <RouterProvider router={router}></RouterProvider>
        </div>
    )
}



export default Router