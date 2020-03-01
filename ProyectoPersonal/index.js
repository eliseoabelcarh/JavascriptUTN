

var plate1img = "images/plate1.png"
var plate2img = "images/plate2.png"
var plate3img = "images/plate1.png"
var plate4img = "images/plate2.png"
var plate5img = "images/plate1.png"
var plate6img = "images/plate2.png"
var plate7img = "images/plate1.png"
var plate8img = "images/plate2.png"


var plate1 = new Plate("plato1","desc11111",plate1img,6.5)
var plate2 = new Plate("plato2","desc2222",plate2img,6.5)
var plate3 = new Plate("plato3","desc333",plate3img,6.5)
var plate4 = new Plate("plato4","desc444",plate4img,6.5)
var plate5 = new Plate("plato5","desc5",plate5img,6.5)
var plate6 = new Plate("plato6","desc6",plate6img,6.5)
var plate7 = new Plate("plato7","desc7",plate7img,6.5)
var plate8 = new Plate("plato8","desc8",plate8img,6.5)



//add plates in column 1
var scrollCont1 = document.getElementById("scrollCont1");

var listContPlates1 = new ListContPlates(scrollCont1);
var listColum1 = []
listColum1.push(plate1, plate2, plate3, plate4)
listContPlates1.addListPlates(listColum1)


//add plates in column 2
var scrollCont2 = document.getElementById("scrollCont2");
var listContPlates2 = new ListContPlates(scrollCont2);
var listColum2 = []
listColum2.push( plate5, plate6, plate7, plate8)
listContPlates2.addListPlates(listColum2)

