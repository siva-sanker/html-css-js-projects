var circle=document.getElementById("circle");
var upbtn=document.getElementById("up");
var downbtn=document.getElementById("down");
var rotate=circle.style.transform;
var rotatesum;
upbtn.onclick= function()
{
    rotatesum=rotate+ "rotate(-90deg)";
    circle.style.transform=rotatesum;
    rotate=rotatesum;
}
downbtn.onclick= function()
{
    rotatesum=rotate+ "rotate(90deg)";
    circle.style.transform=rotatesum;
    rotate=rotatesum;
}