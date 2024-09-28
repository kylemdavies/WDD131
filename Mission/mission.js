document.querySelector("select").addEventListener("change", changeTheme);
var body = document.querySelector("body");
var darkimg = "byui-logo_white.png";
var lightimg = "byui-logo_blue.webp";

function changeTheme() {
if (this.value == "dark"){
    body.classList.add("dark");
    var image = document.getElementById("byui-logo");
    image.src = darkimg;
}
else {
    body.classList.remove("dark");
    var image = document.getElementById("byui-logo");
    image.src = lightimg;
}
}