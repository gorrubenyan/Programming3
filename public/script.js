
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

var exanak = prompt("Nermuceq exanaky(Amar, Dzmer)")
function setup() {
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#A8EBF7');

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

            if (matrix[y][x] == 1 && exanak=="Amar") {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1 && exanak=="Dzmer") {
                fill("#98CAD3");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
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
            else{fill("#A8EBF7")}
        }
    }
if(exanak=="Amar"){
    for (var i in grassArr) {
        grassArr[i].bazmanal();
       //  grassArr[i].sharjvel();
    }
}
else if(exanak=="Dzmer"){
    for (var i in grassArr) {
       //  grassArr[i].sharjvel();
     
    }
}

     for (var i in xotakerner) {
        xotakerner[i].utel();    
     }

     for(var i in Gishatich){
       Gishatich[i].utel();
       
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
