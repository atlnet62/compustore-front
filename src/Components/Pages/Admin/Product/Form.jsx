import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    addImage,
    addProducts,
    getProducts,
} from "../../../../services/API/products";
import { loadProducts } from "../../../../store/slices/product.slice";
import FormData from "form-data";

function Form({ formType, categories }) {
    const TOKEN = localStorage.getItem("uat");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        title: "",
        content: "",
        image_name: "",
        qtyInStock: "",
        price: "",
        category_id: "",
    });

    const img_file = useRef();
    const [msg, setMsg] = useState(null);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (formType === "add") {
            addHandler();
        }

        // a implementer en form edit pour editer un produit
        // if(formType === "edit"){
        //     // handleEdit();
        // }

        setInputs({
            title: "",
            content: "",
            image_name: "",
            qtyInStock: "",
            price: "",
            category_id: "",
        });
    };

    const addHandler = async () => {
        let image = new FormData();

        if (inputs.image_name !== "") {
            console.log(image);
            image.append(
                "image_name",
                img_file.current.files[0],
                img_file.current.files[0].name
            );
            // apend('nom du champ', 'file', 'nom file')
            const responseImg = await addImage(image, TOKEN);

            if (responseImg !== 200) {
                setMsg(responseImg.data.msg);
            }
        } else {
            inputs.image_name = "nopicture.png";
        }

        const response = await addProducts(inputs, TOKEN);
        if (response.status !== 200) {
            setMsg(response.data.msg);
            return;
        } else {
            const response = await getProducts();
            dispatch(loadProducts(response.data.products));
            navigate("/admin");
        }
    };

    useEffect(() => {
        img_file.current.focus();
    }, []);

    return (
        <main id="product">
            <h2>
                {formType === "add" ? "add product form" : "edit product form"}
            </h2>
            <section id="add-product">
                <form onSubmit={onSubmitHandler}>
                    <fieldset>
                        <legend>{formType === "add" ? "add" : "edit"}</legend>

                        <input
                            type="text"
                            placeholder="Title ?"
                            value={inputs.title}
                            onChange={(e) =>
                                setInputs({ ...inputs, title: e.target.value })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Description ?"
                            value={inputs.content}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    content: e.target.value,
                                })
                            }
                        />

                        {/* on ajouter le nom dans la bdd sans transfert d'image pour le moment, a traiter avec form-data*/}
                        <input
                            ref={img_file}
                            type="file"
                            name="image_name"
                            accept="image/*"
                            id="image_name"
                            onChange={() => {
                                setInputs({
                                    ...inputs,
                                    image_name: img_file.current?.files[0].name,
                                });
                            }}
                        />

                        <input
                            type="text"
                            placeholder="Quantity ?"
                            value={inputs.qtyInStock}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    qtyInStock: e.target.value,
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Price ?"
                            value={inputs.price}
                            onChange={(e) =>
                                setInputs({ ...inputs, price: e.target.value })
                            }
                        />

                        <select
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    category_id: e.target.value,
                                })
                            }
                            value={inputs.category_id}
                        >
                            <option value="0">Choose a category</option>
                            {categories.map((category) => {
                                return (
                                    <option
                                        key={category.categoryID}
                                        value={category.categoryID}
                                    >
                                        {category.title}
                                    </option>
                                );
                            })}
                        </select>

                        {msg && <p>{msg}</p>}

                        <input type="submit" value="Send" />
                    </fieldset>
                </form>
            </section>
        </main>
    );
}

export default Form;
