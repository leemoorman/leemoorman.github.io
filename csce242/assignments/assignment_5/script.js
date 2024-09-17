function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

let index = 0;
const countOnClick = document.getElementById("count");
countOnClick.onclick = () =>{
    index += 1;
    document.getElementById("number").innerHTML = index;
}

const randomImg = document.getElementById("rdm-image");
randomImg.onclick = () =>{
    location.reload();
}

let position = document.getElementById("myRange").value;
const slider = document.getElementById("myRange");
/*slider.oninput = () =>{
    document.getElementById("slider-image").style.left = 
}*/
