
import React from 'react';

import './Product.css';
import { BsCartDash } from 'react-icons/bs';
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {
    // console.log(props.product);
    const { name, img, price } = props.product;
    return (
        <div className='col-12 products ' >

<Card className='border-0'>
  <Card.Img className='img-fluid mx-auto d-block' style={{width:'250px', height:'250px'}} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name.slice(0, 30)}</Card.Title>
    <Card.Text>
    Price:  $ {price}
    </Card.Text>
    <Button className='w-100 rounded' onClick={() => props.handdleAddRoCart(props.product)} variant="primary">Add To Cart <BsCartDash className='ms-2 '></BsCartDash> </Button>
  </Card.Body>
  
</Card>

           

        </div>
    );
};

export default Product;