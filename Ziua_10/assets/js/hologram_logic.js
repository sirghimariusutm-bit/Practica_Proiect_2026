// Specular Tracking Logic
const neuralGlass = document.querySelector('.neural-glass');
document.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  neuralGlass.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});