const button = document.getElementById("exploreBtn");

button.addEventListener("click", () => {

  document.querySelector("#education").scrollIntoView({
    behavior: "smooth"
  });

});


const cards = document.querySelectorAll(
  ".about-card, .education-card, .scheme-card"
);

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const x = e.offsetX;
    const y = e.offsetY;

    card.style.background =
      `radial-gradient(circle at ${x}px ${y}px, #222, #000)`;

    card.style.color = "white";

  });

  card.addEventListener("mouseleave", () => {

    card.style.background = "white";
    card.style.color = "black";

  });

});
