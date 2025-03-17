import React from "react";
import Card from './Card'; 


function App() {

  const products = [
    {
      id: 1,
      title: "Зимние ботинки",
      description: "Теплые и удобные ботинки",
      price: 99,
      imgLink: "https://example.com/winter-boots.jpg",
    },
    {
      id: 2,
      title: "Пляжные тапки",
      description: "Легкие тапочки для лета",
      price: 25,
      imgLink: "https://example.com/beach-slippers.jpg",
    }
  ];


  return (
    <>
<div className="app">
      <h1>Магазин товаров</h1>
      <div className="card-list">
        {products.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            imgLink={item.imgLink}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
