let title = document.getElementById("c_title");
let img = document.getElementsByClassName("p_img");
function Switch(car){
    for(var i=0;i<img.length;i++){
        img[i].style.display="none";
    }
    document.getElementById(car).style.display="block";
}
function showandhide(){
    let box = document.getElementsByClassName("box");
    
}