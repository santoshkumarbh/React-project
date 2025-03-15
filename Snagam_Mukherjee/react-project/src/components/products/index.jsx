import ProductItem from "./components/product-items"
import "../products/style.css";
import { useEffect, useState } from "react";

// const flag=true;

// function renderTextBlock(getFlag){
//     return getFlag ? <h2>when condition true</h2> : <h2>when condition false</h2>
// }



function ProductList({listOfProducts}){
    const [flag,setFlag]=useState(false);
    const [count,setCount]=useState(0);
    const [changeStyle,setChangeStyle]=useState(false);
   const handleButton=()=>{
        setFlag(!flag);
        
    }

    function handleIncrease(){
        setCount(count+1);
    }

    function handleDecrement(){
        setCount(count-1);
    }


    useEffect(()=>{
            setFlag(!flag);
            return ()=>{
                console.log("component unmounted");
                
            }
            
    },[])//this will only run on page load once


    useEffect(()=>{
        
        if(count==10){
            setChangeStyle(true);
        }
        else{
            setChangeStyle(false);
        }
    },[count])

    return(
        <>
        <h1>Ecommerce project</h1>

       { flag ? <h2>True block</h2>:<h2>False block</h2>}


        <button onClick={handleButton}>Click</button>
        
        <div>
            <p>Count is {count}</p>
            <button style={{backgroundColor:changeStyle?"black":"blue",color:changeStyle?"white":"black"}} onClick={handleIncrease}>Increment</button>
            <button onClick={handleDecrement}>decrement</button>
        </div>
        
        <ul>
            {listOfProducts.map((item,index)=>(
                <ProductItem singleProduct={item} key={index}/>
            ))}
        </ul>
        
        </>
    )
}
export default ProductList;