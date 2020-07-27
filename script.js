window.load = slide(1);

var bgNumber = 1;

function slide(n) {
    var img = document.getElementById("imageBg");
    img.style.backgroundImage = "url('images/" + n + ".jpg')";
}

function anterior() {
    if (bgNumber > 1) {
        bgNumber--;
        slide(bgNumber);
    } else if (bgNumber = 1) {
        bgNumber = 3;
        slide(bgNumber);
    }
}

function proximo() {
    if (bgNumber < 3) {
        bgNumber++;
        slide(bgNumber);
    } else if (bgNumber = 3) {
        bgNumber = 1;
        slide(bgNumber);
    }
}

/*---Expand Cards*/
var getBox = document.getElementsByClassName("box");
var elementDiv = document.getElementsByClassName("myImage");
var elementTxt = document.getElementsByClassName("aparecer");

for (let i = 0; i < getBox.length; i++) {

    getBox[i].addEventListener("mouseover", function() {
        elementDiv[i].style.height = '200px';
        elementTxt[i].style.display = 'block';
    });

    getBox[i].addEventListener("mouseout", function() {
        elementDiv[i].style.height = '250px';
        elementTxt[i].style.display = 'none';
    });
}