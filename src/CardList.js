import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	const cardComponent = robots.map((barang, i ) => {
		return <Card 
		key={i} 
		id={barang.id} 
		name={barang.name} 
		harga={barang.harga}
		gambar={barang.gambar}
		deskripsi={barang.deskripsi}
		/>
	})
	return(
	<div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
		{cardComponent}
	</div>
	);
}

export default CardList;