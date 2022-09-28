import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


function cim(e){
    document.getElementById('kep').src = e.currentTarget.value;
}

function szel(e){
    document.getElementById('kep').width = e.currentTarget.value;
}

function vast(e){
    document.getElementById('kep').style.border = e.currentTarget.value +"px solid"+ document.getElementById('szin').value
}

function szin(e){
    document.getElementById('kep').style.borderColor = e.currentTarget.value;
}




function sotet(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function init(){
    document.getElementById('darkmode').addEventListener('click', sotet);
    document.getElementById('url').addEventListener('change',cim);
    document.getElementById('szelesseg').addEventListener('input',szel);
    document.getElementById('vastagsag').addEventListener('input',vast);
    document.getElementById('szin').addEventListener('input',szin);
}

document.addEventListener('DOMContentLoaded', init);

