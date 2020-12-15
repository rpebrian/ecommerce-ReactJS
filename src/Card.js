import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

const Cards = ({name, harga, id, gambar, deskripsi}) => {
	
   return (
			   <Card style={{width: "300px", margin: "10px"}}>
			       	<CardImage style={{margin: "auto", width: "400px"}} className="img-fluid" src={gambar} waves />
			        <CardBody>
			           <div style={{textAlign: "center"}}> <CardTitle>{name}</CardTitle> </div>
			            <CardText>{deskripsi}</CardText>
			            <CardText>{harga}</CardText>
			            <Button style={{width: "250px"}}  href="#">Beli</Button>
			        </CardBody>
    			</Card>
    );
  }

export default Cards;
