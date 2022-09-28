import './style.css';


function cim(e){
    document.getElementById('kep').src = e.currentTarget.value;;
}

function szel(e){
    document.getElementById('kep').width = e.currentTarget.value;
}

function vast(e){
    document.getElementById('kep').style.borderImageWidth = e.currentTarget.value;
}

function szin(e){
    document.getElementById('kep').style.borderImageColor = e.currentTarget.value;
}




function sotet(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function init(){
    document.getElementById('darkmode').addEventListener('click', sotet);
    document.getElementById('url').addEventListener('change',cim);
    document.getElementById('szelesseg').addEventListener('change',szel);
    document.getElementById('vastagsag').addEventListener('change',vast);
    document.getElementById('szin').addEventListener('change',szin);
}

document.addEventListener('DOMContentLoaded', init);

