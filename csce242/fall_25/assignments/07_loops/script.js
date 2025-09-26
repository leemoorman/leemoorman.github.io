const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

document.getElementById("scene").onclick = () =>{
    const time = new Date();
    let hours = time.getHours();

    //sets background based on time
    if(hours >= 18 || hours <= 6){
        document.body.style.backgroundColor = "black";
        sun.classList.add("hide");
        moon.classList.remove("hide");
    } else {
        document.body.style.backgroundColor = "lightblue";
        moon.classList.add("hide");
        sun.classList.remove("hide");
    }
}