document.getElementById("scene").onclick = () =>{
    //declaring variables
    const time = new Date();
    let hours = time.getHours();
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    let x_cloud = 370;
    let x_tree = 415;

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

    //loop that creates trees and clouds
    for(let i = 0; i < 6; i++){
        let container = document.getElementById("main-content");
        let contentDiv = document.createElement("div");
        let cloudDiv = document.createElement("div");
        let foliageDiv = document.createElement("div");
        let trunkDiv = document.createElement("div");

        cloudDiv.classList.add("cloud");
        foliageDiv.classList.add("foliage");
        trunkDiv.classList.add("trunk");

        cloudDiv.style.top = "70px";
        foliageDiv.style.top = "70px";
        trunkDiv.style.top = "140px";

        cloudDiv.style.left = `${x_cloud + (i * 25)}px`;
        foliageDiv.style.left = `${x_tree + (i * 25)}px`;
        trunkDiv.style.left = `${x_tree + (i * 25)}px`;

        container.append(contentDiv);
        contentDiv.append(cloudDiv);
        contentDiv.append(trunkDiv);
        contentDiv.append(foliageDiv);
    }
}