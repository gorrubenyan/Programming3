
// class Grass {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//         this.multiply = 0;
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     yntrelVandak(ch) {
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == ch) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }

//         return found;
//     }

//     bazmanal() {
//         this.multiply++;
//         var norVandak = random(this.yntrelVandak(0));
//         if (this.multiply >= 3 && norVandak) {
//             var norXot = new Grass(norVandak[0], norVandak[1]);
//             grassArr.push(norXot);
//             matrix[norVandak[1]][norVandak[0]] = 1;
//             this.multiply = 0;
//         }
//     }




// }


// class Xotaker {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.energy = 5;
//         this.directions = [];
//         this.index = 2;
//     }
//     bazmanal() {
//         if (this.energy == 10) {
//             var norXotaker = new Xotaker(this.x, this.y);
//             xotakerner.push(norXotaker);
//             this.energy = 5;
//         }
//     }
//     mahanal() {
//         if (this.energy == 0) {
//             for (var i in xotakerner) {
//                 if (this.x == xotakerner[i].x && this.y == xotakerner[i].y) {
//                     xotakerner.splice(i, 1);
//                     matrix[this.y][this.x] = 0;

//                 }

//             }
//         }
//     }
//     sharjvel() {
//         this.stanalNorKordinatner();
//         var datark = this.yntrelVandak(0);
//         var norVandak = random(datark);
//         if (norVandak) {
//             matrix[this.y][this.x] = 0;
//             this.x = norVandak[0];
//             this.y = norVandak[1];
//             matrix[this.y][this.x] = 2;
//             this.energy--;
//             this.mahanal();
//         }

//     }

//     yntrelVandak(ch) {
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == ch) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }

//         return found;
//     }


//     stanalNorKordinatner() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }


//     utel() {
//         this.stanalNorKordinatner();
//         var norVandak = random(this.yntrelVandak(1));
//         if (norVandak) {
//             matrix[this.y][this.x] = 0;
//             this.x = norVandak[0];
//             this.y = norVandak[1];
//             matrix[this.y][this.x] = 2;
//             this.energy++;
//             this.bazmanal();
//             for (var i in grassArr) {
//                 if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                 }

//             }

//         }
//         else {
//             this.sharjvel();
//         }


//     }


// // }




class Xotaker extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }


    bazmanal() {
        if (this.energy == 10) {
            var norXotaker = new Xotaker(this.x, this.y);
            xotakerner.push(norXotaker);
            this.energy = 5;
        }
    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in xotakerner) {
                if (this.x == xotakerner[i].x && this.y == xotakerner[i].y) {
                    xotakerner.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahanal();
        }

    }



    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.energy++;
            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }

            }

        }
        else {
            this.sharjvel();
        }


    }

}














//---------------------============++++++++++++========----------------------//




class gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 3;
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }


    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();
        }

    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy++;
            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }

            }
            for (var i in xotakerner) {
                if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                    xotakerner.splice(i, 1);
                    break;
                }

            }

        }
        else {
            this.sharjvel();
        }

    }
    bazmanal() {
        if (this.energy == 10) {
            var norGi = new gishatich(this.x, this.y);
            Gishatich.push(norGi);
            this.energy = 5;
        }
    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in Gishatich) {
                if (this.x == Gishatich[i].x && this.y == Gishatich[i].y) {
                    Gishatich.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }

}













class wifi {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 4;
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }


    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.energy--;

        }

    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.energy++;

            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }

            }
            for (var i in gishatich) {
                if (gishatich[i].x == this.x && gishatich[i].y == this.y) {
                    gishatich.splice(i, 1);
                    break;
                }

            }

        }
        else {
            this.sharjvel();
        }

    }

    mahanal() {
        if (this.energy == 0) {
            for (var i in wifi) {
                if (this.x == wifi[i].x && this.y == wifi[i].y) {
                    wifi.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }

}














class youtube {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 4;
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }


    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
            this.energy--;

        }

    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
            this.energy++;

            for (var i in xotakerner) {
                if (this.x == xotakerner[i].x && this.y == xotakerner[i].y) {
                    xotakerner.splice(i, 1);
                }

            }
            for (var i in wifi) {
                if (wifi[i].x == this.x && wifi[i].y == this.y) {
                    wifi.splice(i, 1);
                    break;
                }

            }
            for (var i in gishatich) {
                if (gishatich[i].x == this.x && gishatich[i].y == this.y) {
                    gishatich.splice(i, 1);
                    break;
                }

            }

        }
        else {
            this.sharjvel();
        }

    }

    mahanal() {
        if (this.energy == 0) {
            for (var i in youtube) {
                if (this.x == youtube[i].x && this.y == youtube[i].y) {
                    youtube.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }

}



class Grass extends KendaniEak {

    bazmanal() {
        this.multiply++;
        this.direction = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
        }
    }
}


