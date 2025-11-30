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

// Load vidios-----

function loadVidios() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => {
      displayVidios(data.videos);
    });
}
// -- Display vidios
const displayVidios = (allvidios) => {
  const videoContainer = document.getElementById("videoContainer");
  // -- for each loop -
  allvidios.forEach((videos) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
<div class="card bg-base-100 rounded-xl overflow-hidden w-full 
     transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer card bg-base-100  ">

  <!-- Thumbnail -->

  <figure class="w-full h-48 relative">
    <img
      src="${videos?.thumbnail}"
      alt="thumbnail"
      class="w-full h-45 rounded-md object-cover"
    />

    <div class="absolute bottom-2 right-2">
  <p class="bg-black-200 text-white p-1 rounded-sm">
        3hrs 56 min ago
  </p>
</div>
  </figure>

  <!-- Video Info -->
  <div class="p-4">
    <div class="flex gap-3">
      <!-- Channel Image -->
      <img
        // src="${videos?.authors[0].profile_picture}"
        alt="channel"
        class="w-10 h-10 rounded-full object-cover"
      />

      <div>
        <!-- Title -->
        <h2 class="font-semibold text-lg leading-tight">
          Python Full Course for free
        </h2>

        <!-- Channel Name -->
        <p class="text-sm text-gray-600 flex items-center gap-1">
          Awlad Hossain 
          <img src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/06/Illustration-of-Badge-check-icon-on-transparent-background-PNG.png" class="w-4 h-4" />
        </p>

        <!-- Views -->
        <p class="text-sm text-gray-500">${videos?.others.views}</p>
      </div>
    </div>
  </div>
</div>

    `;
    videoContainer.append(newDiv);
  });
};

// --------

loadData();

