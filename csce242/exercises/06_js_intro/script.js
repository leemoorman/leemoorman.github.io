/*const doStuff = () =>{
    alert("Hello World");
}*/

const myButton = document.getElementById("btn-click");
//myButton.onclick = doStuff;
myButton.oneclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
};

document.getElementById("btn-goodbye").onclick = () =>{
    document.getElementById("stuff").classList.remove("one");
    document.getElementById("stuff").classList.add("hide");
};

ocument.getElementById("btn-animate").onclick = () =>{
    document.getElementById("stuff").classList.add("animate");
    document.getElementById("message").innerHTML = "Animated";
};


//Add a second button called say goodbye
//when clicked change the text to goodbye everyone and remove the special style