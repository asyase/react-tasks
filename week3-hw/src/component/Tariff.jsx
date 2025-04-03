import React from "react";
import styles from "./tariff.module.css"; 

function Tariff({ title, price, speed, isSelected, onSelect }) {
    const tariffClass = [
        styles.tariff,
        price === 550 ? styles["tariff-550"] : "",
        isSelected ? styles.selected : ""
    ].join(" ");
    
    return (
        <div className={tariffClass} onClick={onSelect}>
            <div className={`${styles["tariff-header"]} ${styles[`tariff-${price}`]}`}>
                {title}
            </div>
            <div className={styles["tariff-price"]}>
                <span>eur</span> <br />
                {price} <span>/month</span>
            </div>
            <p className={styles["tariff-description"]}>up to {speed} Mbps</p>
            <p className={styles["tariff-description"]}>Unlimited traffic</p>
        </div>
    );
}

export default Tariff;
