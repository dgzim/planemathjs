const first = document.getElementById("btnZero");
const plane = document.getElementById('plane');
let firstx = first.getBoundingClientRect().x
let planeone = plane.getBoundingClientRect().x
console.log(firstx);

first.addEventListener('click', () => {
    planeone.style.right = `${firstx}px`;
    alert("clicou");
})