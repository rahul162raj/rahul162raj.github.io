const cardItems = [
  {
    id: 1,
    img: "./Assets/images/angular-have.png",
    imgAlt: "angular-have",
    demoUrl: "https://angular-notepad-classic.web.app/sign-in",
    sourceUrl: "https://github.com/rahul162raj/angular-notepad-classic",
    status:"PUBLIC",
  },
  {
    id: 2,
    img: "./Assets/images/react-shop.png",
    imgAlt: "react-shop",
    demoUrl: "https://rahul162raj.github.io/react-shopping-app/",
    sourceUrl: "https://github.com/rahul162raj/react-shopping-app-starter-kit",
    status:"PUBLIC",
  },
  {
    id: 3,
    img: "./Assets/images/css-pongal.png",
    imgAlt: "css-pongal",
    demoUrl: "https://rahul162raj.github.io/pongal/",
    sourceUrl:
      "https://github.com/rahul162raj/rahul162raj.github.io/tree/master/pongal",
    status:"WIP",
  },
  {
    id: 4,
    img: "./Assets/images/css-challenge.png",
    imgAlt: "css-challenge",
    demoUrl: "https://rahul162raj.github.io/css-challenge/#/day-1",
    sourceUrl: "https://github.com/rahul162raj/100-days-css-challenge",
    status:"PUBLIC",
  },
  {
    id: 5,
    img: "./Assets/images/web-swevens.png",
    imgAlt: "web-swevens",
    demoUrl: "https://www.swevens.co/index.html",
    sourceUrl: "https://github.com/rahul162raj/100-days-css-challenge",
    status:"PRIVATE",
  },
];

function checkStatus(item){
  if(item.status === "WIP"){
    return `<span class="font-mr">&#9940;</span><span class="footer-text">WIP</span>`
  } else if(item.status === "PRIVATE"){
    return `<span class="font-mr">&#128274;</span><span class="footer-text">Private</span>`
  } else{
    return `<a href=${item.sourceUrl}  class="footer-text">View Source</a>`
  }
}

let cardElements = `${cardItems
  .map(
    (item) => `
    <div class="card">
        <img src=${item.img} alt="${item.imgAlt}" class="card-img">
        <div class="card-footer">
            ${checkStatus(item)}
        </div>
    </div>
    `
  )
  .join("")} `;

window.onload = () => {
  let cardContainer = document.getElementById("cardContent");
  cardContainer.innerHTML = cardElements;
};

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.pageYOffset > 20) {
    nav.classList.add("navbar-border");
  } else {
    nav.classList.remove("navbar-border");
  }
});
