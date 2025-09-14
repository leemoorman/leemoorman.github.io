//document.getElementById("sunny").onclick = () =>{
    //document.getElementById("p-sunny").innerHTML = 
//}

const colorPicker = document.getElementById("color-picker");
const pColor = document.getElementById("p-color");

document.getElementById("sunny").onclick = () =>{
    document.getElementById("p-one").classList.remove("hide");
    document.getElementById("p-two").classList.remove("hide");
    document.getElementById("p-three").classList.remove("hide");
    document.getElementById("p-four").classList.remove("hide");
    document.getElementById("p-five").classList.remove("hide");
}

colorPicker.addEventListener("input", (event) => {
    const selectedColor = event.target.value;
    pColor.innerHTML = event.target.value;
    pColor.style.color = selectedColor;
})

document.getElementById("pic-cloudy").onclick = () =>{
    document.getElementById("pic-cloudy").classList.add("hide");
    document.getElementById("pic-sun").classList.remove("hide");
}