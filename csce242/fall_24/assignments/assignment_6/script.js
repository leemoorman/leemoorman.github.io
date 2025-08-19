const exerciseOne = document.getElementById("ex-one");
exerciseOne.onclick = () =>{
    document.getElementById("clr-slider").classList.remove("hide");
    document.getElementById("pic-chooser").classList.add("hide");
}

const exerciseTwo = document.getElementById("ex-two");
exerciseTwo.onclick = () =>{
    document.getElementById("clr-slider").classList.add("hide");
    document.getElementById("pic-chooser").classList.remove("hide");
}

const rgbSlider = document.getElementById("slider");
const section = document.getElementById("clr-slider");
function updateColor(){
    let red = rgbSlider.value;
    section.style.backgroundColor = rgb(red, 0, 0);
}
rgbSlider.addEventListener("input", updateColor);
updateColor();

function updatePicture(event){
    const buttonId = event.target.id
    if(buttonId === "small-image"){
        document.getElementById("sml-pic").classList.remove("hide")
        document.getElementById("med-pic").classList.add("hide")
        document.getElementById("lrg-pic").classList.add("hide")
    } else if(buttonId === "medium-image"){
        document.getElementById("sml-pic").classList.add("hide")
        document.getElementById("med-pic").classList.remove("hide")
        document.getElementById("lrg-pic").classList.add("hide")
    } else {
        document.getElementById("sml-pic").classList.add("hide")
        document.getElementById("med-pic").classList.add("hide")
        document.getElementById("lrg-pic").classList.remove("hide")
    }
}

document.getElementById("small-image").addEventListener("click", updatePicture);
document.getElementById("medium-image").addEventListener("click", updatePicture);
document.getElementById("large-image").addEventListener("click", updatePicture);


