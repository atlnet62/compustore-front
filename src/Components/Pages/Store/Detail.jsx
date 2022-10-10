import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Button from './../../UI/Elements/Button/Index';
import { addCart, calculateTotalAmount } from "../../../helpers/cart";
import { useDispatch } from "react-redux";
import { modifyCart } from "../../../store/slices/cart.slice"


function Detail({ products, cart }) {

    const { productID } = useParams();
    const dispatch = useDispatch();

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);

    let arrayNumber = [0, 1, 2, 3, 4, 5];


    const clickHandler = (e) => {
        e.preventDefault();
        const newCart = addCart(cart, product, quantity);
        dispatch(modifyCart({cart:newCart, totalPrice: calculateTotalAmount(newCart)}));
    }

    useEffect(() => {
        const productDisplay = () => {
            for(const p of products) {
                if (p.productID === parseInt(productID)) {
                    setProduct({
                        productID: p.productID,
                        name: p.product_name,
                        category: p.category_name,
                        content: p.content,
                        image_name: p.image_name,
                        price: p.price,
                    })
                }
            }
        }
        productDisplay();
    }, [])

    return (
        <main id="product-detail">
            <h2>Detail</h2>
            <section>
                <h3>{product.name}</h3>
                <img src={`/products/${product.image_name}`} alt={product.image_name} />
                <p>{product.category}</p>
                <p>{product.content}</p>
                <p className="price">{product.price} €</p>
                <div className="clear"></div>
                <div className="menu">
                    <select 
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        >
                        {
                            arrayNumber.map((num) => {
                                return (<option key={num} value={num}>{num}</option>);
                            })
                        }
                    </select>
                    <Button loadStyle={'btn-add'} onClickHandler={clickHandler}>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </Button>
                </div>
            </section>
                <div className="pagination">
                    <Button>
                        <Link to={"/store"}>prev page</Link>
                    </Button>
                </div>
        </main>
    );
}

export default Detail;
