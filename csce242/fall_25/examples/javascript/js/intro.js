/* function sayHello(){
    console.log("hello world");
}

const btnClickMe = document.getElementById("btn-click-me");
btnClickMe.onlclick = sayHello; */

document.getElementById("btn-click-me").onclick = () => {
    console.log("Hello World");
};