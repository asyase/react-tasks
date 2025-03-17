import styles from "./listItem.module.css"
import "./content.css"

function ListItem(props){

    let userLoggedIn= true;
    let textColor;

    if (userLoggedIn){
        textColor="pink";
    } else{
        textColor="black";
    }
    return(

        <div className="list-item">
            <input type="checkbox" className="checkbox"></input>
            <label style={{ color: textColor }}>{props.name}</label> 
            <button className={styles.button}>Удалить</button>
        </div>
    )
}

export default ListItem;