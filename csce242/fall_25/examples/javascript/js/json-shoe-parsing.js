const getShoes = async() =>{
    const url = "https://portiaportia.github.io/json/shoes.json";

    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log("error");
    }
};

const showShoes = async() =>{
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    shoes.forEach((shoe) =>{
        const shoeSection = document.createElement("section");
        const reviewsUl = document.createElement("ul");

        //brand
        const shoeDescription = document.createElement("p");
        shoeDescription.innerHTML = `Brand: ${shoe.brand}`;
        shoeSection.append(shoeDescription);

        //reviews
        shoeSection.append(reviewsUl);
        shoe.reviews.forEach((review) =>{
            const li = document.createElement("li");
            li.innerHTML = `${review}`;
            reviewsUl.append(li);
        });

        //image
        const img = document.createElement("img");
        shoeSection.append(img);

        shoeListDiv.append(shoeSection);
    });
};

showShoes();