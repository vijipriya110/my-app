import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from "react-bootstrap";

 
function App() {
  const data = [
    {
      productImage:
        "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg",
      productName: "Iphone 14promax",
      price: 100000,
      rating: 91,
    },
    {
      productImage:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m146bzsgins/gallery/in-galaxy-m14-5g-4gb-ram-sm-m146bzsgins-536288677?$1300_1038_PNG$",
      productName: "Samsung Galaxy",
      price: 95000,
      rating: 90,
    },
    {
      productImage:
        "https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/GPX7PR128H_A_google_pixel_7_pro_5g_unlocked_smartphone_128gb_hazel.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
      productName: "Google Pixel 7pro",
      price: 70000,
      rating: 80,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/617MPEZB5mL._SL1500_.jpg",
      productName: "Oneplus 11",
      price: 64000,
      rating: 50,
    },
  ]
   const [count, setCount]=useState(0)
   return (
    
    <div className="App">
      <div className="head-App">
        <h1><b>Best Brand Mobiles</b></h1>
        </div> 
      <div className="cart-value">
        <Badge bg="success">
          cart {count}
        </Badge>
      </div>

      <div className="card-container">
      {data.map((product,idx)=>(
        <Product
        key={idx}
        prod={product}
        count={count}
        setCount={setCount}
        />
      ))}
    </div>
    
    </div>
  );
}
export default App; 


function Product({prod, count, setCount}){
  const [show,setShow]=useState(true)

   function addtocart(){
    setCount(count+1)
    setShow(!show)
   }

   function removecart(){
    setCount(count-1)
    setShow(!show)
   }


    return(
      <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.productImage} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title> 
        <Card.Text>${prod.price}</Card.Text>
        <Card.Text>Rating:{prod.rating}</Card.Text>
        {/* conditional rendrering */}

        {show ?
        <Button variant="primary"
        onClick={addtocart}
        >Add to cart </Button>

        :
        <Button variant="danger"
        onClick={removecart}
        >Remove cart </Button> }
      </Card.Body>
    </Card>

      </div>
    )
   }

   // // STATE
// can change contiusely,
// how to define(2 types(value,set-fun)),
// how to work backend

// function useState(data){
  // let value=data
  // function setfun(newdata){
    //  value=newdata
  // }
// return [value,setfun]
// }

// const [value,setfun]=useState("viji")
// console.log(value)
// setfun("priya")
// console.log(value=new data)

  // const[show,setShow]=useState("viji")//hooks
  // const getDetails=()=>
  // console.log(show)
  // setShow("priya")
  // console.log(show)

// Working with array lists
// Usage of keys(keys used to initimate the which one dom use)
// Conditional rendering(true or false)
// Handling Events(onclick())
// Props vs state
// two different data use different places(props)(2 components)
// manipulate function data inside the function mean use state