import Card from "../UI/Card";

function store({ products }) {
    console.log(products)
    return (
        <main id="store">
            <h2>Products</h2>
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

export default store