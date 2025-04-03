import React, { useState } from "react";
import Tariff from "./component/Tariff";
import "./App.css";

function App() {
    const [selectedPrice, setSelectedPrice] = useState(null);

    const tariffs = [
        { title: "Unlimited 300", price: 300, speed: 10 },
        { title: "Unlimited 450", price: 450, speed: 50 },
        { title: "Unlimited 550", price: 550, speed: 100 }, // highlighted plan
        { title: "Unlimited 1000", price: 1000, speed: 200 }
    ];

    return (
        <div className="App">
            <h1>Plans</h1>
            <div className="tariff-container">
                {tariffs.map((tariff, index) => (
                    <Tariff 
                        key={index} 
                        title={tariff.title} 
                        price={tariff.price} 
                        speed={tariff.speed}
                        isSelected={selectedPrice === tariff.price}
                        onSelect={() => setSelectedPrice(tariff.price)}
                    />
                ))}
            </div>
            {selectedPrice && (
                <div className="selected-info">
                    You selected: <strong>{selectedPrice} €/month</strong>
                </div>
            )}
        </div>
    );
}

export default App;
