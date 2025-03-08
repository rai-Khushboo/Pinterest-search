var arr = [
    { name: "Petals of roses", image: "https://images.unsplash.com/photo-1503652601-557d07733ddc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvc2VzfGVufDB8fDB8fHww" }, 
    { name: "Animals of the town", image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D" }, 
    { name: "The crowd of the city", image: "https://images.unsplash.com/photo-1500956505867-124082952502?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNpdHklMjBjcm93ZHxlbnwwfHwwfHx8MA%3D%3D" }, 
    { name: "Fresh fruits", image: "https://plus.unsplash.com/premium_photo-1676064229122-a5d5fb0c11ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlc2glMjBmcnVpdHN8ZW58MHx8MHx8fDA%3D" }, 
    { name: "Peeled oranges", image: "https://media.istockphoto.com/id/487962263/photo/tangerine-with-the-taken-off-peel.jpg?s=1024x1024&w=is&k=20&c=3EXytYMe6GCEOpmElXjeEiKLBotEOYXAWfBP-JsKeLY=" }, 
    { name: "Web design", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" }, 
    { name: "Mountain landscape", image: "https://images.unsplash.com/photo-1613075019881-f475574c236a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1vdW50YWluJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww" }, 
    { name: "Cherry blossoms", image: "https://images.unsplash.com/photo-1538943186303-104afadcbb16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlcnJ5JTIwYmxvc3NvbXxlbnwwfHwwfHx8MA%3D%3D" }, 
    { name: "Luxury yachts", image: "https://images.unsplash.com/photo-1584772126711-017fae29eadd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEx1eHVyeSUyMHlhdGNofGVufDB8fDB8fHww" }, 
    { name: "Birds in flight", image: "https://images.unsplash.com/photo-1505862063223-5c8d38bbad87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcmRzJTIwaW4lMjBmbGlnaHRzfGVufDB8fDB8fHww" }, 
    { name: "Snowy mountains", image: "https://images.unsplash.com/photo-1551524431-cb613a235076?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3d5JTIwbW91bnRhaW5zfGVufDB8fDB8fHww" }, 
    { name: "Vibrant sunset", image: "https://images.unsplash.com/photo-1720210613361-0869c8b17bbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlicmFudCUyMHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D" }, 
    { name: "Cosmic space", image: "https://images.unsplash.com/photo-1472552944129-b035e9ea3744?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvc21pYyUyMHNwYWNlfGVufDB8fDB8fHww" }, 
    { name: "Underwater coral reef", image: "https://images.unsplash.com/photo-1682687980115-a37b56ea7271?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3YXRlciUyMGNvcmFsJTIwcmVlZnxlbnwwfHwwfHx8MA%3D%3D" } ,
    {name: "Pizza", image: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D"},
    {name: "Books", image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"},
];


function showTheCards() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box" onclick="openModal('${obj.image}')">
        <img src="${obj.image}" alt="image">
        <div class="caption">${obj.name}</div>
        </div>`;
    });
    document.querySelector(".container").innerHTML = clutter;
}

function openModal(image) {
    document.querySelector("#modal-image").src = image;
    document.querySelector(".post-modal").style.display = "flex";
}

function closeModal() {
    document.querySelector(".post-modal").style.display = "none";
}

document.querySelector(".post-modal").addEventListener("click", closeModal);

function handleSearchFunctionality() {
    var input = document.querySelector("#searchinput");
    var searchData = document.querySelector(".searchdata");
    
    // Show the search data when the input is clicked
    input.addEventListener("focus", function () {
        searchData.style.display = "block";
    });

    // Hide the search data when the input loses focus or clicking outside
    document.addEventListener("click", function (event) {
        if (!input.contains(event.target) && !searchData.contains(event.target)) {
            searchData.style.display = "none";
        }
    });

    // Searching using the input
    input.addEventListener("input", function () {
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function (obj) {
            clutter += `
            <div class="res flex px-8 my-3">
                <i class='ri-search-line font-semibold mr-5'></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`;
        });
        searchData.innerHTML = clutter;
    });
}

handleSearchFunctionality();
showTheCards();
