
let count=0;

document.getElementById("increaseButton").onclick= function() {
    count+=1;
    document.getElementById("Lable").innerHTML = count;
}
document.getElementById("decreaseButton").onclick= function() {
    count-=1;
    document.getElementById("Lable").innerHTML = count;
}
