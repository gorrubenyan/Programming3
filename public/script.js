
var side = 20;
var matrix = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
[1, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 1, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0],
[0, 1, 1, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0, 0],
[1, 1, 0, 1, 0, 0, 4, 1, 5, 0, 0, 2, 0, 0, 4, 0, 0, 1, 0, 0],
[1, 0, 0, 1, 1, 0, 0, 1, 5, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0],
[1, 1, 1, 0, 1, 0, 0, 1, 2, 0, 0, 2, 5, 0, 0, 0, 0, 1, 0, 0],
[1, 0, 1, 1, 1, 0, 0, 1, 5, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[1, 0, 1, 0, 0, 0, 3, 1, 5, 0, 0, 0, 5, 0, 4, 0, 0, 1, 0, 0],
[1, 0, 1, 1, 0, 0, 3, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 0, 0],
[1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
[1, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 1, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0],
[0, 1, 1, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0, 0],
[1, 1, 0, 1, 0, 0, 4, 1, 5, 0, 0, 2, 0, 0, 4, 0, 0, 1, 0, 0],
[1, 0, 0, 1, 1, 0, 0, 1, 5, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0],
[1, 1, 1, 0, 1, 0, 0, 1, 2, 0, 0, 2, 5, 0, 0, 0, 0, 1, 0, 0],
[1, 0, 1, 1, 1, 0, 0, 1, 5, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[1, 0, 1, 0, 0, 0, 3, 1, 5, 0, 0, 0, 5, 0, 4, 0, 0, 1, 0, 0],
[1, 0, 1, 1, 0, 0, 3, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 0, 0],
[1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
[1, 1, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],

];
var grassArr = [];
var xotakerner = [];
var Gishatich = [];
var wifii = [];
var youtude = [];
var exanak = "garun"
// var exanak = prompt("Nermuceq exanaky(amar, dzmer, ashun; garun;)")

myVar = setInterval(function () {
    if (exanak == "garun") {
        exanak = "amar"
    }
    else if (exanak == "amar") {
        exanak = "ashun"
    }
    else if (exanak == "ashun") {
        exanak = "dzmer"
    }
    else if (exanak == "dzmer") {
        exanak = "garun"
    }

}, 2000);






function setup() {
   myVar = setInterval(function () {
    if (exanak == "garun") {
       frameRate(22)
    }
    else if (exanak == "amar") {
       frameRate(12)
    }
    else if (exanak == "ashun") {
       frameRate(8)
    }
    else if (exanak == "dzmer") {
     frameRate(5)
    }

}, 2000);

   
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#A8EBF7');
    var myVar;







    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var xotaker = (new Xotaker(x, y))
                xotakerner.push(xotaker)
            }
            else if (matrix[y][x] == 3) {
                var gishaticnher = (new gishatich(x, y))
                Gishatich.push(gishaticnher)
            }
            else if (matrix[y][x] == 4) {
                wifii.push(new wifi(x, y));
            }
            else if (matrix[y][x] == 5) {
                youtude.push(new youtube(x, y));
            }
            else if (matrix[y][x] == 8) {

            }
        }
    }


}


function draw() {
    noStroke();
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1 && exanak == "amar") {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1 && exanak == "garun") {
                fill("#05F8AB");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 1 && exanak == "ashun") {
                fill("#FCF3CF");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 1 && exanak == "dzmer") {
                fill("#73C6B6  ");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2 && exanak == "amar") {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }

             else if (matrix[y][x] == 2 && exanak == "garun") {
                fill("#F9E79F");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 2 && exanak == "ashun") {
                fill("#F4D03F");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 2 && exanak == "dzmer") {
                fill("#B7950B");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }

        }
    }
   if (exanak == "amar" || exanak == "ashun" || exanak == "garun" ) {
    for (var i in grassArr) {
        grassArr[i].bazmanal();

        }
    }
    else if ( exanak == "dzmer") {
        for (var i in grassArr) {
            //  grassArr[i].sharjvel();

        }
    }

    for (var i in xotakerner) {
        xotakerner[i].utel();
         xotakerner[i].bazmanal();
          xotakerner[i].mahanal();
    }

    for (var i in Gishatich) {
        Gishatich[i].utel();
          Gishatich[i].bazmanal();
            Gishatich[i].mahanal();
    }

    for (var i in wifii) {

        wifii[i].sharjvel()
        wifii[i].utel()
        wifii[i].mahanal()

    }
    for (var i in youtude) {

        youtude[i].sharjvel()
        youtude[i].utel()
        youtude[i].mahanal()

    }
}
