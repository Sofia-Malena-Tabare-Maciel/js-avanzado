const cuadrados = document.querySelectorAll('.cuadrado');

function cambiarColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

cuadrados.forEach((cuadrado) => {
  cuadrado.addEventListener('click', cambiarColor);
});