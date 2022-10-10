export const calculateTotalAmount = (cart) => {
    let totalPrice = 0;
    cart.forEach((product) => {
        let total = parseFloat(product.price) * parseInt(product.quantity);
        totalPrice += total;
    });
    return totalPrice;
};

export const addCart = (cart, productToAdd, quantity) => {
    let index = cart.findIndex((c) => c.productID === productToAdd.productID);
    let cartCopy = JSON.parse(JSON.stringify(cart));

    
    if (index === -1) {
        cartCopy = [...cartCopy, { ...productToAdd, quantity }];
    } else {
        cartCopy[index].quantity += parseInt(quantity);
    }

    localStorage.setItem("cart", JSON.stringify(cartCopy));

    return cartCopy;
};