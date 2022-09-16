import { useEffect, useState } from "react";

function Cart( {products} ) {

    const cart = JSON.parse(localStorage.getItem('cart'));
    const [product, setProduct] = useState([]);

    useEffect(() => {
        // charge le cart si existe et recupere les donné du store redux pour compléter les infos du LS (car le LS on a que ID et la qty, et le UUID du user)
        const loadCart = () => {
            if (cart) {
                cart.map((productCart) => {
                    for(let productHOC of products) {
                        if (productCart.productID === productHOC.productID) {
                            const article = {
                                id: productHOC.productID,
                                name: productHOC.product_name,
                                category_name: productHOC.category_name,
                                price: productHOC.price,
                                qty: productCart.qty
                            }
                            setProduct(product => [...product, article]);
                        }
                        
                    }
                })
            }
        }

        loadCart()
    }, []);

    return (
        <main id="cart">
            <section>
                <table>
                    <thead>
                        <tr colSpan="5"><td>ORDER DETAIL</td></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>NAME</td>
                            <td>CATEGORY</td>
                            <td>PRICE</td>
                            <td>QUANTITY</td>
                            <td>TOTAL PRICE</td>
                        </tr>
                        {
                            //Short circuit
                            (product) 
                            &&
                            product.map((value) => {
                                return(
                                    <tr key={value.id}>
                                        <td>{value.name}</td>
                                        <td>{value.category_name}</td>
                                        <td>{value.price} €</td>
                                        <td>{value.qty}</td>
                                        <td>{(value.qty * value.price).toLocaleString()} €</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                    </section>
                    <section>
                <table>
                        <thead>
                            <tr>
                                <td>TOTAL</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>TOTAL PRICE ORDER</td>
                                <td>FAIRE SOMME ICI €</td>
                            </tr>
                        </tbody>
                </table>
            </section>
        </main>
    )
}

export default Cart