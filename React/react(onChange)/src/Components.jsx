import { useState } from "react";

export default function Component(){
    const[name , setName] = useState("Guest");
    const[quantity , setQuantity] = useState(0);
    const[comment, setComment] = useState();
    const [payment, setpayment] = useState();


    function handleName(event){
        setName(event.target.value);
    }

    function handleQuantity(event){
        setQuantity(event.target.value);
    }

    function handleComment(event){
        setComment(event.target.value);
    }

    function handlePayment(event){
        setpayment(event.target.value);
    }

    return (
        <>
            <input value={name} onChange={handleName}></input>
            <p>Name: {name} </p>

            <input value={quantity} type="number" onChange={handleQuantity}></input>
            <p>Quantity: {quantity} </p>

            <textarea value={comment} onChange={handleComment} placeholder="Enter the comments" />
            <p>Comments: {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">select an option</option>
                <option value="COD">COD</option>
                <option value="credit card">Credit Card</option>
                <option value="Net banking">Net banking</option>
                <option value="Gift Card">Gift Card</option>

            </select>
            <p>Payment: {payment}</p>
        </>
    )
}