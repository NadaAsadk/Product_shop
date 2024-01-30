const product = document.querySelector('.detailedproduct');
const productd = document.querySelector('.details');
async function detailedData(){
    const URL = new URLSearchParams(window.location.search);
    const id = URL.get('product_id');
    console.log(id);
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = response.data;

    document.querySelector("h2").textContent=data.title;
    document.querySelector("img").src=data.thumbnail;

    let brand = document.createElement('p');
    brand.textContent = `${data.brand}`;

    let category = document.createElement('p');
    category.textContent =`category: ${data.category}`;

    let description = document.createElement('p');
    description.textContent = `description: ${data.description}`;

    let price = document.createElement('p');
    price.textContent = `price: ${data.price} $`;

    let discountPercentage = document.createElement('p');
    discountPercentage.textContent = `discountPercentage: ${data.discountPercentage}`;

    let rating = document.createElement('p');
    rating.textContent = `rating: ${data.rating}`;

    let stock = document.createElement('p');
    stock.textContent = `stock: ${data.stock}`;
    
   
    productd.appendChild(brand);
    productd.appendChild(category);
    
    productd.appendChild(description);
    
    productd.appendChild(price);
    productd.appendChild(discountPercentage);
    productd.appendChild(rating);
    productd.appendChild(stock);
    

}
detailedData();