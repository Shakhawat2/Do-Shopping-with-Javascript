const cartArray = [];
function display(cartProduct) {
    const tbody = document.getElementById("products-cart");
    tbody.innerText = '';
    let total = 0;
    for (let i = 0; i < cartProduct.length; i++) {
        const product = cartProduct[i];
        const name = product.productName;
        const price = product.productPrice;
        total += price;
        console.log(name, price);
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `;
        tbody.appendChild(tr);

    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>#</th>
    <td>Total Price</td>
    <td>${total}</td>
    `
    tbody.appendChild(tr);
}
function addtoCart(element) {
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    cartArray.push(productObj)
    document.getElementById('total-products').innerText = cartArray.length;
    display(cartArray);
}