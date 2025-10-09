const getConsoles = async() =>{
    const url = "https://leemoorman.github.io/csce242/fall_25/projects/part6/json/consoles.json";
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
        p.innerHTML = `<strong>${console.name}</strong><br><strong>Price: </strong> ${console.price}<br><strong>In Stock:</strong> ${console.stock}<br><strong>Review Score:</strong> ${console.rating}<br>${console.description}`;

        card.append(consoleImg);
        card.append(description);
        description.append(p);
        document.getElementById("product-section").append(card);
    });
};

showConsole();