
async function getProducts(){
    const response = await axios.get('https://dummyjson.com/products');
      const data = response.data.products;
      const result = data.map(function(ele){
        return `
        <div class="product">
        <h2>${ele.title}</h2>
        <div class="info">
        <p>category: ${ele.category}</p>
        <p>brand: ${ele.brand}</p>
        <p>price: ${ele.price}$</p>
        </div>
        <img src=${ele.thumbnail} />
        <a href="details.html?product_id=${ele.id}">For More Details</a>
        </div>
        `;
    }).join('');
    document.querySelector(".products").innerHTML=result;
}

getProducts();

