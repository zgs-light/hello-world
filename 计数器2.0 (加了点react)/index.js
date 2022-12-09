import React from 'react';
import  ReactDOM  from 'react-dom';

const App =() =>{
    //React.useState()函数返回一个值和一个函数,分别用两个量接收
   const [count,setcount] = React.useState(0)
   //+1操作  
   const add=()=>{
        
        setcount(count+1)
     }
     //-1操作
     const subtract=()=>{
        //如果count的值已经为0,不再执行-1操作
         if(count>0)
         {
             setcount(count-1)
         }else{
             setcount(count-count)
         }
     }
     //置0操作
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