let bars = document.querySelector(".bars");
let scrollToggle = document.querySelector(".navbar .header .nav ul");
bars.addEventListener("click",()=>{
    scrollToggle.classList.toggle("active")
})
console.log(bars)
console.log(scrollToggle)