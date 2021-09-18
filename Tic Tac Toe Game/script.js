//selecting all required elments
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelectorAll(".players");



window.onload = ()=>{ //once window loaded
    for(let i=0;i<allBox.length;i++){// add onclick attribute in all available sections spans
        allBox[i].setAttribute("onclick","clickedBox(this)");
    }
    selectXBtn.onclick = ()=>{
        selectBox.classList.add("hide"); //hide the select box on playerX btn clicked
        playBoard.classList.add("show");// show the playboard section on playerX btn clicked
        players.setAttribute("class","players active");

    }
    selectOBtn.onclick = ()=>{
        selectBox.classList.add("hide"); //hide the select box on playerO btn clicked
        playBoard.classList.add("show");// show the playboard section on playerO btn clicked
        players.setAttribute("class","players active");
    }
}

let playXIcon = "fas fa-times";
let playOIcon = "far fa-circle";

function clickedBox(element){



}