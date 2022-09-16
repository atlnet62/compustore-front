import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addImage, addProducts } from '../../../../services/API/products.js';

function Form({formType, categories}) {

    console.log(formType);

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ title: "", content: "", image_name: "", qtyInStock: "", price: "", category_id: "" });
    const [ifiles, setIfiles] = useState({ image_name: "" });
    const title = useRef();

    const [msg, setMsg] = useState(null);

    const onSubmitHandler = (e) => {

        e.preventDefault();

        if(formType === "add"){
            handleAdd();
        }

        // a implementer en form edit pour editer un produit
        // if(formType === "edit"){
        //     // handleEdit();
        // }

        setInputs({ title: "", content: "", image_name: "", qtyInStock: "", price: "", category_id: "" });
        setIfiles({ image_name: "" });
    };

    const handleAdd = async () => {
        const response = await addProducts(inputs)
        const response_img = await addImage(ifiles)
        if (response.status === 409) {
            setMsg(response.data.msg);
            setMsg(response_img.data.msg);
            return;
        } else {
            console.log(response.status)
            console.log(response_img.status)
            navigate("/product");
        }
    }

    useEffect(() => {

        title.current.focus();

    }, [])

    return (
        <main id="product">
        <h2>{(formType === 'add') ? 'add product form' : 'edit product form'}</h2>
        <section id="add-product">
            <form onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>{formType === "add" ? "add" : "edit" }</legend>
                    
                    <input
                        ref={title}
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
                            setInputs({ ...inputs, content: e.target.value })
                        }
                    />

                    {/* on ajouter le nom dans la bdd sans transfert d'image pour le moment, a traiter avec form-data*/}
                    <input
                        type="file"
                        name="image_name"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={
                            (e) => {
                                setIfiles({ ...ifiles, image_name: e.target.value }); 
                                setInputs({ ...inputs, image_name: (!e.target.files[0].name) ? 'nopicture.jpg' : e.target.files[0].name });
                                }
                        }
                    />

                    <input
                        type="text"
                        placeholder="Quantity ?"
                        value={inputs.qtyInStock}
                        onChange={(e) =>
                            setInputs({ ...inputs, qtyInStock: e.target.value })
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
                        onChange={
                            (e) => setInputs({ ...inputs, category_id: e.target.value })
                        }
                        value={inputs.category_id}
                    >
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

                        {
                            console.log(ifiles)
                        }

                    <input type="submit" value="Send"/>
                </fieldset>
            </form>
        </section>
        </main>

    )
}

export default Form;