const getConsoles = async() =>{
    const url = "https://leemoorman.github.io/blob/main/csce242/fall_25/projects/part6/json/consoles.json";
    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log("error");
    }
};

const showConsole = async() =>{
    const consoles = await getConsoles();
    
    consoles.forEach((console) =>{
        const card = document.createElement("div");
        const consoleImg = document.createElement("img");
        const description = document.createElement("div");
        const p = document.createElement("p");

        card.classList.add("product-card");
        description.classList.add("product-info");

        consoleImg.src = `${console.img}`;
        p.innerHTML = `<strong>${console.name}</strong><br>${console.price}<br>In Stock: ${console.stock}<br>${console.description}<br>${console.rating}`;

        card.append(consoleImg);
        card.append(description);
        description.append(p);
        document.getElementById("product-section").append(card);
    });
};

showConsole();