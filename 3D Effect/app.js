const container = document.querySelector(".container");
const card = document.querySelector(".card");

const image = document.querySelector(".image img");
const name = document.querySelector(".name");
const purchase = document.querySelector(".purchase");
const buttons = document.querySelector(".buttons");
const details = document.querySelector(".detail");

//moving animation
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//ANIMATION ON ENTER
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  name.style.transform = "translateZ(80px)";
  image.style.transform = "translateZ(80px) translateX(20px)";
  purchase.style.transform = "translateZ(80px)";
  buttons.style.transform = "translateZ(80px) translateY(-15px)";
  details.style.transform = "translateZ(80px) translateX(-20px)";
});

//ANIMATION ON LEAVE
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  image.style.transform = "translateZ(0px) rotateZ(0deg)";
  name.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
  buttons.style.transform = "translateZ(0px) translateY(0px)";
  details.style.transform = "translateZ(0px)  translateX(0px)";
});
