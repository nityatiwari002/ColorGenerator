function func(){
    document.getElementById("bg").style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("color").innerHTML = "#" + Math.floor(Math.random()*16777215).toString(16);
    return;
}

document.getElementById("main-but").addEventListener("click", func);
