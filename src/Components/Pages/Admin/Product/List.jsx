import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faPen,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../UI/Elements/Button/Index";

//recup de la list des products dans le store redux et l'envoie dans un composant Card (affichage sous forme de card)
function List({ products, categories }) {
    return (
        <main id="product">

            <h2>Product list</h2>
            {/* <section>
                <select
                    value=""
                    id="filerStore"
                    name="filterStore"
                >
                    <option value="0">Choose a category</option>
                    {categories.map((category) => {
                    return <option key={category.categoryID} value={category.categoryID}>{category.title}</option>;
                })}
                </select>
            </section> */}


            <section>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Picture</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>Qty Stock</td>
                            <td colSpan="2">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <React.Fragment key={product.productID}>
                                    <tr>
                                        <td>{product.productID}</td>
                                        {/* CSS inline volontaire pour pas oublier que ca existe :D*/}
                                        <td><img width="50rem" src={`/products/${product.image_name}`} alt='product.product_name' /></td>
                                        <td>{product.product_name}</td>
                                        <td>{product.category_name}</td>
                                        <td>{product.price} €</td>
                                        <td>{product.qtyInStock}</td>
                                        <td>
                                            <Button loadStyle={"btn-edit"}>
                                                <FontAwesomeIcon icon={faPen} />
                                            </Button>
                                        </td>
                                        <td>
                                            <Button loadStyle={"btn-del"}>
                                                <FontAwesomeIcon icon={faCircleXmark} />
                                            </Button>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </section>

        </main>
    );
}

export default List;
