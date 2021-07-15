import React,{useState} from 'react'
import "./style.css"
const App = ()=>{
    let [score, setScore] = useState(0)
    
    return(
        <div>
             <h1> Hi, this is my Counter Application </h1>
             <h2>The value of score is <div class="score">{score}</div> </h2>
             <button onClick={()=>(score<25)?setScore(score+1): ""}> Increment </button>
             <button onClick={()=>(score>0)? setScore(score-1) : "" }> Decrement </button>
             <button onClick={()=>{setScore(0)}}> Reset </button>
             <h3>Note: The value of score should not increase more than 25.</h3>
        </div>
     
    )
}
export default App






