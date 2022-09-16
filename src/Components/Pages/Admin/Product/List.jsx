import { Link } from "react-router-dom";
import Card from "../../../UI/Card";
import Button from "../../../UI/Elements/Button/Index";

//recup de la list des products dans le store redux et l'envoie dans un composant Card (affichage sous forme de card)
function List({ products }) {
    return (
        <main id="store">
            <h2>Admin : Products</h2>

            <section id="btn-admin">
                <Button formType={'add'}>
                    <Link to={"/admin/product/add"} >Add product</Link>
                </Button>
            </section>
            
            <section>
                {products.map((product) => {
                    return (
                        <Card key={product.productID} {...product} />
                    );
                })}
            </section>
        </main>
    )
}

export default List