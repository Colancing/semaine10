/**
 * Created by Emmanuelle on 06/01/2016.
 */
var schaun = document.getElementById('schaun');
var title = document.querySelector('#display>h1');
var multiplier = document.getElementById('multiplier');
var text_multiplier = document.getElementById('text_multiplier');
var autoclick = document.getElementById('autoclick');
var text_autoclick = document.getElementById('text_autoclick');

var price = 50;
var score = 0;
var counter = 1;

function addPoint() {
    score = score + counter;
    title.innerHTML = "Vous avez " + score + " point(s).";
}
schaun.addEventListener("click", addPoint, false);
multiplier.addEventListener("click", function () {
        if (score >= price) {
            counter = counter + 1;
            score = score - 50;
            price = price*2;
            title.innerHTML = "Vous avez  " + score + " point(s).";
            text_multiplier.innerHTML = " <h2>Multiplicateur X " +counter+ ".</h2><p> Prochain multiplicateur pour" +price+" points. </p>"
        }
        else {
            alert("Il vous faut " +price+ "points !");
        }
    },
    false);
autoclick.addEventListener("click", function () {
        if (score >= 10) {
            score = score - 10;
            text_autoclick.innerHTML = " <h2>Autoclick : </h2> <p> Autoclick est activé :-) </p>";
            setInterval(addPoint, 1000);
        }
        else {
            alert("Il vous faut 200 points !");
        }
    },
    false);
