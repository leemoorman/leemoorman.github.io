const up = document.getElementById("up");
const down = document.getElementById("down");
const one = document.getElementById("ex-one");
const two = document.getElementById("ex-two");

down.onclick = () =>{
    down.classList.add("hide");
    up.classList.remove("hide");
    one.classList.remove("small-hide");
    two.classList.remove("small-hide");
}

up.onclick = () =>{
    up.classList.add("hide");
    down.classList.remove("hide");
    one.classList.add("small-hide");
    two.classList.add("small-hide");
}

one.onclick = () =>{
    document.getElementById("planting").classList.remove("hide");
    document.getElementById("clock").classList.add("hide");
}

two.onclick = () =>{
    document.getElementById("planting").classList.add("hide");
    document.getElementById("clock").classList.remove("hide");
}

function getTime(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let amPm = "am";

    if(hours >= 12){
        amPm = "pm";
        if(hours > 12){
            hours -= 12;
        }
    }
    if(hours == 0){
        hours = 12;
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("ampm").innerHTML = amPm;
}

document.getElementById("plant").addEventListener("input",(event) => {
    const days = event.target.value;
    const heal = document.getElementById("healthy");
    const water = document.getElementById("watering");
    const wilt = document.getElementById("wilting");
    const die = document.getElementById("dead");
    const mOne = document.getElementById("m-one");
    const mTwo = document.getElementById("m-two");

    if(days < 3){
        heal.classList.remove("hide");
        water.classList.add("hide");
        wilt.classList.add("hide");
        die.classList.add("hide");
        mOne.innerHTML = `It's been ${days} since watering your plant`;
        mTwo.innerHTML = `Your plant is happy and healthy`;
    } else if(days >= 3 && days <= 5){
        heal.classList.add("hide");
        water.classList.remove("hide");
        wilt.classList.add("hide");
        die.classList.add("hide");
        mOne.innerHTML = `It's been ${days} since watering your plant`;
        mTwo.innerHTML = `Your plant needs watering`;
    } else if(days >= 6 && days <= 9){
        heal.classList.add("hide");
        water.classList.add("hide");
        wilt.classList.remove("hide");
        die.classList.add("hide");
        mOne.innerHTML = `It's been ${days} since watering your plant`;
        mTwo.innerHTML = `Leaves are dropping the color is changing, water soon`;
    } else if(days > 9){
        heal.classList.add("hide");
        water.classList.add("hide");
        wilt.classList.add("hide");
        die.classList.remove("hide");
        mOne.innerHTML = `It's been ${days} since watering your plant`;
        mTwo.innerHTML = `Sorry, your plant is no longer with us`;
    }
})

setInterval(getTime, 1000);
getTime();
