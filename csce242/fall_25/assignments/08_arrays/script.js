const before = [
    {
        name: "Scarlett",
        image: "images/scarlett_before.png"
    },
    {
        name: "Peggy",
        image: "images/peggy_before.png"
    },
    {
        name: "Phoebe",
        image: "images/phoebe_before.png"
    },
    {
        name: "Penelope",
        image: "images/penelope_before.png"
    }
];

const after = [
    {
        name: "Scarlett",
        image: "images/scarlett_after.png"
    },
    {
        name: "Peggy",
        image: "images/peggy_after.png"
    },
    {
        name: "Phoebe",
        image: "images/phoebe_after.png"
    },
    {
        name: "Penelope",
        image: "images/penelope_after.png"
    }
];

window.onload = () =>{
    for(let i = 0; i < 4; i++){
        const img = document.createElement("img");
        let imageName = "";
        if(i == 0){
            imageName = before[i].image;
            img.src = imageName;
            document.getElementById("scarlett").append(img);
        } else if(i == 1){
            imageName = before[i].image;
            img.src = imageName;
            document.getElementById("peggy").append(img);
        } else if(i == 2){
            imageName = before[i].image;
            img.src = imageName;
            document.getElementById("phoebe").append(img);
        } else if(i == 3){
            imageName = before[i].image;
            img.src = imageName;
            document.getElementById("penelope").append(img);
        }
    }
}

document.getElementById("scarlett").onclick = () =>{
    const popupContent = document.createElement("div");
    let scarlettImg = document.createElement("img");
    let desc = document.createElement("p");
    const close = document.createElement("p");
    close.innerHTML = `<span id="close">&#10006;</span>`;
    for(let i = 0; i < after.length; i++){
        if(after[i].name == "Scarlett"){
            scarlettImg.src = after[i].image;
            desc = `Thanks for calling ${after[i].name} a good dog!`;
        }
    }

    popupContent.classList.add("popup");
    document.getElementById("main-content").append(popupContent);
    popupContent.append(close);
    popupContent.append(desc);
    popupContent.append(scarlettImg);

    close.onclick = () =>{
        popupContent.remove();
    }
}

document.getElementById("peggy").onclick = () =>{
    const popupContent = document.createElement("div");
    let scarlettImg = document.createElement("img");
    let desc = document.createElement("p");
    const close = document.createElement("p");
    close.innerHTML = `<span id="close">&#10006;</span>`;
    for(let i = 0; i < after.length; i++){
        if(after[i].name == "Peggy"){
            scarlettImg.src = after[i].image;
            desc = `Thanks for calling ${after[i].name} a good dog!`;
        }
    }

    popupContent.classList.add("popup");
    document.getElementById("main-content").append(popupContent);
    popupContent.append(close);
    popupContent.append(desc);
    popupContent.append(scarlettImg);

    close.onclick = () =>{
        popupContent.remove();
    }
}

document.getElementById("phoebe").onclick = () =>{
    const popupContent = document.createElement("div");
    let scarlettImg = document.createElement("img");
    let desc = document.createElement("p");
    const close = document.createElement("p");
    close.innerHTML = `<span id="close">&#10006;</span>`;
    for(let i = 0; i < after.length; i++){
        if(after[i].name == "Phoebe"){
            scarlettImg.src = after[i].image;
            desc = `Thanks for calling ${after[i].name} a good dog!`;
        }
    }

    popupContent.classList.add("popup");
    document.getElementById("main-content").append(popupContent);
    popupContent.append(close);
    popupContent.append(desc);
    popupContent.append(scarlettImg);

    close.onclick = () =>{
        popupContent.remove();
    }
}
document.getElementById("penelope").onclick = () =>{
    const popupContent = document.createElement("div");
    let scarlettImg = document.createElement("img");
    let desc = document.createElement("p");
    const close = document.createElement("p");
    close.innerHTML = `<span id="close">&#10006;</span>`;
    for(let i = 0; i < after.length; i++){
        if(after[i].name == "Penelope"){
            scarlettImg.src = after[i].image;
            desc = `Thanks for calling ${after[i].name} a good dog!`;
        }
    }

    popupContent.classList.add("popup");
    document.getElementById("main-content").append(popupContent);
    popupContent.append(close);
    popupContent.append(desc);
    popupContent.append(scarlettImg);

    close.onclick = () =>{
        popupContent.remove();
    }
}