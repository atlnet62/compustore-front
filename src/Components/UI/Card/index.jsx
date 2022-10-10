import style from "./style.module.css";
import Button from './../Elements/Button/Index';
import { Link } from "react-router-dom";

// METTRE LE CART dans REDUX !

function Card(props) {
    return (
        <article className={`${style.Card}`}>
            <img src={`/products/${props.image_name}`} alt={props.title} />
            <h3>{props.product_name}</h3>
            <p>{props.price}</p>
            <Button>
                <Link to={`/store/detail/${props.productID}`}>Read More</Link>
            </Button>
        </article>
    );
}

export default Card;
