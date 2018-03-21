
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


function setup() {
    frameRate(4);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

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

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
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
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
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
