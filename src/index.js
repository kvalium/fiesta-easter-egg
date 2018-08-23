const button = document.querySelector("button");
button.addEventListener("click", () => window.setInterval(fiestaaaa, 100));

const fiestaaaa = () => {
  const getRandomInt = (max = 100) =>
    Math.floor(Math.random() * Math.floor(100));

  document.querySelectorAll("body *").forEach(element => {
    element.style.position = "absolute";
    element.style.fontFamily = "Comic Sans MS";
    element.style.transform = `
      rotate(${getRandomInt(60)}deg) 
      scale(${getRandomInt(10) / 50})`;

    element.style.backgroundColor = `hsl(${getRandomInt(360)}, 100%, 50%)`;
    element.style.top = `${getRandomInt(100)}vh`;
    element.style.left = `${getRandomInt(100)}vw`;
  });
};
