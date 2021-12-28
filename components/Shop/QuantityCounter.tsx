import React, { FunctionComponent } from 'react'; // importing FunctionComponent

interface IQuantityCounter{
    quantity:number,
    setQuantity:Function,
}

    const  QuantityCounter:FunctionComponent<IQuantityCounter>=({quantity,setQuantity}) =>{





  
    const increment = () => {
        try {
            setQuantity( quantity + 1)
        }
        catch (err:any) {
            console.log(err.message)
        }
    }
    const decrement = () => {
        try {
            if (quantity !== 0) {
            setQuantity( quantity - 1)
            }
        }
        catch (err:any) {
            console.log(err.message)
        }
    }



    return (
        <div className=" h-100 w-100 d-flex flex-row justify-content-center align-items-center ">
            <button onClick={decrement} className="btn   bg-warning m-0 p-0 " type="button" style={{ width: "40px", height: "40px" , color:"black",fontSize:25,fontWeight:900}}>-</button>
            <input min={0} type="number" id={"counterInput"} className="form-control" value={quantity} onChange={(e)=>console.log(e.target.value)} style={{ width: "60px", height: "40px",margin:"5px" }} />
            <button className="btn  m-0 p-0  bg-success" type="button" onClick={increment} style={{ width: "40px", height: "40px" , color:"white",fontSize:25,fontWeight:900}}>+</button>

        </div>
    )
}


export default QuantityCounter