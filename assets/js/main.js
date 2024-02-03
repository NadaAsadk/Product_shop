const sideBarButton = document.querySelector(".sideBar");
const closeButton = document.querySelector(".close");
const navBar = document.querySelector(".nav");
const productss = document.querySelector(".products"); 
const SideBar = document.querySelector(".sideBarRight"); 
const overall = document.querySelector(".container"); 



window.onscroll = function(){
  if(window.scrollY >= productss.offsetTop)
  navBar.classList.add("scroll");
else
  navBar.classList.remove("scroll");
}

async function getProducts(){
    const response = await axios.get('https://dummyjson.com/products');
      const data = response.data.products;
      const result = data.map(function(ele){
        return `
        <div class="product">
        <h3>${ele.title}</h3>
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
    document.querySelector(".products").innerHTML = result;
    document.querySelector(".overlay").classList.add('dnone');
}

getProducts();

sideBarButton.onclick = function(){
  SideBar.classList.add('showside');
  document.querySelector(".over").classList.add('overlaySide');

}

closeButton.onclick = function(){
  SideBar.classList.remove('showside');
  document.querySelector(".over").classList.remove('overlaySide');

}