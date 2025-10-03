class Paintings{
    constructor(name, artist, image, framed){
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.framed = framed;
    }

    get section(){
        const section = document.createElement("section");
        const p = document.createElement("p");
        const img = document.createElement("img");

        section.classList.add("painting");
        p.innerHTML = this.name;
        img.src = `images/${this.image}`;

        section.append(p);
        section.append(img);

        img.onclick = () =>{
            clearDiv();
            const div = document.getElementById("id01");
            const h3 = document.getElementById("modal-title");
            const p = document.getElementById("modal-artist");
            const mImg = document.getElementById("modal-image");

            h3.innerHTML = this.name;
            p.innerHTML = `by ${this.artist}`;
            mImg.src = `images/${this.image}`;

            if(this.framed){
                mImg.style.border = "10px solid black";
            }

            div.style.display = "block";
        };

        return section;
    }
}

const clearDiv = () =>{
    document.getElementById("modal-title").innerHTML = "";
    document.getElementById("modal-artist").innerHTML = "";
    document.getElementById("modal-image").src = "";
    document.getElementById("modal-image").style.border = "";
}

document.getElementById("xbutton").onclick = () =>{
    document.getElementById("id01").style.display = "none";
}

const paintingList = [];
paintingList.push(new Paintings("La Ville Entiere", "Ernst", "la-ville-entiere.png", true));
paintingList.push(new Paintings("The Virgin", "Gustav Klimt", "the-virgin.png", false));
paintingList.push(new Paintings("The Adoration of the Magi", "Rubens", "the-adoration-of-the-magi.jpg", true));
paintingList.push(new Paintings("The Son of Man", "Rene Magritte", "the-son-of-man.jpg", false));
paintingList.push(new Paintings("Three Musicians", "Pablo Picasso", "three-musicians.jpg", true));

const paintingsDiv = document.getElementById("main-content");

paintingList.forEach(painting => {
    paintingsDiv.append(painting.section);
});


