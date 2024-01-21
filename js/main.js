async function getProducts(){
    const response = await fetch("https://dummyjson.com/products");
    const data =await response.json();
    const products = data.products;
    const result = products.map(function(ele){
        return `
        <div class="product">
        <h2>${ele.title}</h2>
        <div class="info">
        <h3>category: ${ele.category}</h3>
        <p>brand: ${ele.brand}</p>
        <p>price: ${ele.price}$</p>
        <span>Discount: ${ele.discountPercentage}%</span>
        </div>
        <img src=${ele.thumbnail} />
        </div>
        `;
    }).join('');
    document.querySelector(".products").innerHTML=result;
}

getProducts();