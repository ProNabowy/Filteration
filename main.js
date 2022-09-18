// Selector all elemnts

const container = document.querySelector(".container");

const title = document.querySelectorAll(".titles div");

const webItem = document.querySelectorAll(".web-item");

const markting = document.querySelectorAll(".markting-item");

const graphic = document.querySelectorAll(".graphic-item");

// Create Function To Covarte Active Class For Titels 

function convarteClass() {

    container.addEventListener("click" , e => {

        if(e.target.classList.contains("title")) {

            // Remove Active class From All Elements

            title.forEach(div => div.classList.remove("active"));

            // add active Class For Current element

            e.target.classList.add("active");

            if(e.target.classList.contains("all")) document.querySelectorAll(".items div").forEach(div => div.style.display = "flex");

            if(e.target.classList.contains("web")) hideElement(markting , graphic , webItem);
            
            if(e.target.classList.contains("grap")) hideElement(markting , webItem , graphic);
            
            if(e.target.classList.contains("mark")) hideElement(graphic , webItem , markting);

        }

    });

}
convarteClass();

// Create Function To Hide and Show Elements

function hideElement(one , two , three) {

    one.forEach(div => div.style.display = "none");
                
    two.forEach(div => div.style.display = "none");

    three.forEach(div => div.style.display = "flex");

}