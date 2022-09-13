import style from './style.module.css';

const URL = "http://localhost:9000/products/";

function Card(props) {
    return (
        <article className={`${style.Card}`}>
            <img src={`${URL}${props.image_name}`} alt={props.title} />
            <h3>{props.product_name}</h3>
            <p>{props.price}</p>
        </article>
    )
}

export default Card;


