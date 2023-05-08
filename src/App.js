import { createElement } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 
function App() {
  const data = [
    {
      productImage:
        "https://www.apple.com/in/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png",
      productName: "Iphone 14promax",
      price: 100000,
      rating: 91,
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAmZcKm3NQoK8tlikVJsPAfm3cAhr_IKelWibDsJj3vgZ5BCZuvssOPGjIbljbkWR68&usqp=CAU",
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

   return (
    <div className="App">
      <div className="card-Container">
      {data.map((product,idx)=>(
        <Product/>
      ))}
    </div>
    </div>
  );
}
export default App;


   function Product(){
    return(
      <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="Product image  " />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>Price</Card.Text>
        <Card.Text>Rating</Card.Text>
        <Button variant="primary">Add to cart </Button>
      </Card.Body>
    </Card>

      </div>
    )
   }