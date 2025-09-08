
const categoriesDiv = document.getElementById("categories");
const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const totalDiv = document.getElementById("total");

let cart = [];
let total = 0;

//  Load Categories
const loadCategories = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/categories");
  const data = await res.json();
  console.log(data); // 
  
  displayCategories(data.categories);
};

const displayCategories = (categories) => {
  categoriesDiv.innerHTML = "";
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline hover:bg-green-400 w-full";
    btn.innerText = cat.category_name;
    btn.onclick = () => loadCategoryPlants(cat.id);
    categoriesDiv.appendChild(btn);
  });
};

//  Load All Plants
const loadAllPlants = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/plants");
  const data = await res.json();
  displayPlants(data.plants || data.data);
};

//  Load by Category
const loadCategoryPlants = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`);
  const data = await res.json();
  displayPlants(data.data || data.plants);
};

//  Display Plants
const displayPlants = (plants) => {
  productsDiv.innerHTML = "";
  plants.forEach((plant) => {
  const card = document.createElement("div");
  card.className = "card bg-base-100 shadow-md flex flex-col";

  card.innerHTML = `
    <figure>
      <img src="${plant.image}" alt="${plant.name}" class="h-40 w-full object-cover"/>
    </figure>

    <div class="card-body flex flex-col">
      <h2 class="card-title cursor-pointer text-black" onclick="showDetails(${plant.id})">
        ${plant.name}
      </h2>
      <p>${plant.description.slice(0, 60)}...</p>

      <div class="flex justify-between items-center mt-2">
        <button class="btn bg-[#dcfce7] p-1 font-semibold text-[#15803D] rounded-lg">${plant.category}</button>
        <span class="font-bold">৳${plant.price}</span>
      </div>

      
      <div class="mt-auto">
        <button class="btn bg-[#15803d] rounded-2xl w-full" onclick="addToCart('${plant.name}', ${plant.price})">
          <span class="text-white">Add to Cart</span>
        </button>
      </div>
    </div>
  `;
  productsDiv.appendChild(card);
});

   
};

// Add to Cart
const addToCart = (name, price) => {
  cart.push({ name, price });
  total += price;
  renderCart();
};

// Render Cart
const renderCart = () => {
  cartDiv.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center border p-2 rounded";
    li.innerHTML = `
      ${item.name} - ৳${item.price}
      <button onclick="removeFromCart(${index})" class="text-red-500">✖</button>
    `;
    cartDiv.appendChild(li);
  });
  totalDiv.innerText = `৳${total}`;
};

//  Remove from Cart
const removeFromCart = (index) => {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
};

// Modal Details
const showDetails = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`);
  const data = await res.json();
  const plant = data.plant || data.data;
  document.getElementById("modalTitle").innerText = plant.name;
  document.getElementById("modalBody").innerText = plant.description;
  document.getElementById("detailModal").showModal();
};

//  Initial Load
loadCategories();
loadAllPlants();

