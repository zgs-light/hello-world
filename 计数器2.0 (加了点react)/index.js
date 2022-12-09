import React from 'react';
import  ReactDOM  from 'react-dom';

const App =() =>{
   const [count,setcount] = React.useState(0)
     const add=()=>{
        setcount(count+1)
     }
     const subtract=()=>{
         if(count>0)
         {
             setcount(count-1)
         }else{
             setcount(count-count)
         }
     }
     const toZero=()=>{
         setcount(count-count)
     }

    return(
        
        <div>
            
            <button onClick={subtract}>-</button>
            <input type="text" id="ipt" value={count}/>
            <button onClick={add}>+</button>
            <br />

            <button onClick={toZero}>置0</button>

        </div>

    )
}
//ReactDOM.render(组件名称,要注入的元素)
ReactDOM.render(
    <App />,
    document.getElementById('root')
)