const elements = document.querySelectorAll(".set-bg");
console.log(elements);

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  const src = element.dataset.setbg;
  element.style.backgroundImage = `url(${src})`;
}
