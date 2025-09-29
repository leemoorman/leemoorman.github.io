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
        name: "Pheobe",
        image: "images/phoebe_before.png"
    },
    {
        name: "Mace",
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
        name: "Pheobe",
        image: "images/phoebe_after.png"
    },
    {
        name: "Mace",
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
    const popup = document.createElement("div");
    const popupContent = document.createElement("div");
    const scarlett = document.createElement("img");
}
