function loadData() {
  // fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => {
      displayData(data.categories);
    });
}

function displayData(categorie) {
  console.log(categorie);

  const catagoryContainer = document.getElementById("catagoryContainer");
  for (const cat of categorie) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
      <button class="btn btn-sm font hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;
    catagoryContainer.append(newDiv);
  }
}
loadData();
