import Button from '../Elements/Button/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faPen, faCartPlus, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'
import style from './style.module.css';
import { useEffect, useState } from 'react';


// METTRE LE CART dans REDUX !

function Card(props) {

    const uuidLS = localStorage.getItem("uuid");
    const [cart, setCart] = useState({uuid: uuidLS, productID: props.productID, qty: 0});

    // voir si utilisable avec useState pour afficher le contenu du LS si existe
    let quantity = [];
    function number() {
        for(let i=0; i<25;i++) {
            quantity.push(i);
        }
    }
    number();

    // a faire link avec le compte plus tard
    const userInfos = {role_id: 3}
    
    // a faire link avec le compte plus tard
    const del = () => {
        console.log("suppr");
    }
    
    // a faire link avec le compte plus tard
    const edit = () => {
        console.log("edit");
    }

    const onClickAdd = () => {
        if (!uuidLS) {
            // affichage a mettre dans le dom => brancher a l'identification
            return console.log("please, Could you sign in/up before buy !")
        } else {
            if (cart.qty === 0) {
                return console.log("Please, Could add some product inside your cart.")
            } else {
                let productInCart = JSON.parse(localStorage.getItem('cart'));
                if (!productInCart) {
                    localStorage.setItem('cart', JSON.stringify([cart]));
                }
                else {
                    // recherche l'index dans le LS si il existe (a refacto avec findIndex)
                    let index = null;
                    for(let i=0 ; i < productInCart.length ; i++) {
                        if (productInCart[i].productID === cart.productID) {
                            index = i;
                        }
                    }
                    if (index === null) {
                        productInCart.push(cart);
                        localStorage.setItem('cart', JSON.stringify(productInCart));
                    } else {
                        productInCart.splice(index, 1);
                        productInCart.push(cart);
                        localStorage.removeItem('cart');
                        localStorage.setItem('cart', JSON.stringify(productInCart));
                    }
                }
            }
        }
    }
    
    return (
        <article className={`${style.Card}`}>
            <img src={`/products/${props.image_name}`} alt={props.title} />
            <h3>{props.product_name}</h3>
            <p>{props.price}</p>


            <select id="qty" 
                onChange={
                    (e) => {
                        setCart({...cart, qty: e.target.value});
                    }
                }
                value={cart.qty} 
            >
                { 
                    quantity.map((value) => {
                        return(
                            <option key={value} value={value}>{value}</option>);
                    })

                }

            </select>

            <Button loadStyle={'btn-add'} onClickHandler={onClickAdd}>
                <FontAwesomeIcon icon={faCartPlus} />
            </Button>

            {/* affiche la barre si e role user est admin */}
        {(userInfos?.role_id === 3) &&
            (<div>
                <Button loadStyle={'btn-del'} onClickHandler={del}><FontAwesomeIcon icon={faCircleXmark} /></Button>
                <Button loadStyle={'btn-edit'} onClickHandler={edit}><FontAwesomeIcon icon={faPen} /></Button>
            </div>)
        }
        </article>
    )
}

export default Card;


