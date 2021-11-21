/* Hier werden die Container initialisiert, die die Graphen, die Textfelder, die Slider, die Buttons und Checkboxen beinhalten. 
    -> In dem ersten Container werden die Lösungskurven des Anfangswertproblems gezeichnet. 

    ->Der zweite Container enthält die Slider und die Textfelder, mit denen die Parameter eingestellt werden können.

    ->Der dritte Container enthält die Textfelder zur Initialisierung der Anfangswerte des Anfangswertproblems. Darüber hinaus befinden sich dort 
    die Textfelder, die dazu dienen die maximale Zeit und den maximalen Wert der Y-Achse einzustellen. 

    ->Der letzte Container enthält Checkboxen, mit deren Hilfe man auswählen kann, welche der Funktionen gezeichnet werden soll. 
    Darüber hinaus befindet sich dort auch die Checkbox, die dazu dient den Log-Plot auszuwählen. Weiterhin befindet sich hier das
    Textfeld, mit dem man die zugrundeliegende Funktion für das Modell auswählen kann. 
*/
board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-10, 1.2, 200, -0.1], axis: true, grid: false, showCopyright: false, showScreenshot: true, showFullscreen: true});
board2 = JXG.JSXGraph.initBoard('jxgbox2', {boundingbox: [-3, 15, 12, -3], axis: false, grid: false, showCopyright: false, showNavigation: false});
board3 = JXG.JSXGraph.initBoard('jxgbox3', {boundingbox: [-3, 10, 12, -3], axis: false, grid: false, showCopyright: false, showNavigation: false}); 
board4 = JXG.JSXGraph.initBoard('jxgbox4', {boundingbox: [-3, 10, 12, -3], axis: false, grid: false, showCopyright: false, showNavigation: false}); 
board2.addChild(board);
board3.addChild(board); 
board4.addChild(board); 

 
function draw_slider(){

    /* Falls die Variable 'sliders_' den Wert 'true' hat, wird diese Funktion ausgeführt. Diese Funktion zeichnet die Slider, 
    mit denen man die Parameter der Differentialgleichung dynamisch einstellen kann. */
    par1 = board2.create('slider', [[-1,12],[7,12],[0,1,1]],{name:'beta',strokeColor:'black',fillColor:'black', precision: 1});
    par2 = board2.create('slider', [[-1,11],[7,11],[0,0.5,1]],{name:'lambda',strokeColor:'black',fillColor:'black', precision: 1});
    par3 = board2.create('slider', [[-1,10],[7,10],[0,0,1]],{name:'mu',strokeColor:'black',fillColor:'black', precision: 1});
    par4 = board2.create('slider', [[-1,9],[7,9],[0,0,1]],{name:'kappa1',strokeColor:'black',fillColor:'black', precision: 1});
    par5 = board2.create('slider', [[-1,8],[7,8],[0,0,1]],{name:'delta1',strokeColor:'black',fillColor:'black', precision: 1}); 
    par6 = board2.create('slider', [[-1,7],[7,7],[0,0.4,1]],{name:'K1',strokeColor:'black',fillColor:'black', precision: 1});
    par7 = board2.create('slider', [[-1,6],[7,6],[0,1,1]],{name:'epsilon',strokeColor:'black',fillColor:'black', precision: 1});
    par8 = board2.create('slider', [[-1,5],[7,5],[0,0,1]],{name:'kappa2',strokeColor:'black',fillColor:'black', precision: 1});
    par9 = board2.create('slider', [[-1,4],[7,4],[0,1,1]],{name:'p',strokeColor:'black',fillColor:'black', precision: 1});
    par11 = board2.create('slider', [[-1,3],[7,3],[0,0.2,1]],{name:'K2',strokeColor:'black',fillColor:'black', precision: 1});
    par12 = board2.create('slider', [[-1,2],[7,2],[0,0,1]],{name:'delta2',strokeColor:'black',fillColor:'black', precision: 1});
    par13 = board2.create('slider', [[-1,1],[7,1],[0,0,1]],{name:'nu',strokeColor:'black',fillColor:'black', precision: 1});
    
}

function draw_textfield(){

    /* Falls die Variable 'sliders_' den Wert 'false' hat, wird diese Funktion ausgeführt. Diese Funktion zeichnet die Textfelder, 
    mit denen man die Parameter der Differentialgleichung dynamisch einstellen kann. */
    par1 = board2.create('input', [-1, 12, '1', 'beta='],{cssStyle: 'width: 100px', fixed: true});
    par2 = board2.create('input', [-1, 11, '0.2', 'lambda='],{cssStyle: 'width: 100px', fixed: true});
    par3 = board2.create('input', [-1, 10, '0', 'mu='],{cssStyle: 'width: 100px', fixed: true});
    par4 = board2.create('input', [-1, 9, '0', 'kappa1='],{cssStyle: 'width: 100px', fixed: true});
    par5 = board2.create('input', [-1, 8, '0', 'delta1='],{cssStyle: 'width: 100px', fixed: true});
    par6 = board2.create('input', [-1, 7, '0.004', 'K1='],{cssStyle: 'width: 100px', fixed: true});                
    par7 = board2.create('input', [-1, 6, '1', 'epsilon='],{cssStyle: 'width: 100px', fixed: true});
    par8 = board2.create('input', [-1, 5, '0', 'kappa2='],{cssStyle: 'width: 100px', fixed: true});
    par9 = board2.create('input', [-1, 4, '1', 'p='],{cssStyle: 'width: 100px', fixed: true});
    par11 = board2.create('input', [-1, 3, '0.2', 'K2='],{cssStyle: 'width: 100px', fixed: true});
    par12 = board2.create('input', [-1, 2, '0', 'delta2='],{cssStyle: 'width: 100px', fixed: true});
    par13 = board2.create('input', [-1, 1, '0', 'nu='],{cssStyle: 'width: 100px', fixed: true});
    
    
}

/*Hier werden zwei Buttons gezeichnet, mit denen man zwischen Slidern und Textfeldern wechseln kann.*/
var sliders_ = true; 
var button_slider = board2.create('button', [-1, 14, 'Slider', function() {
    if(sliders_==false){
        board2.removeObject([par1, par2, par3, par4, par5, par6, par7, par8, par9, par11, par12, par13]);
        draw_slider(); 
        sliders_=true; 
    }
}], {});
var button_textfield = board2.create('button', [1, 14, 'Input', function() {
    if(sliders_==true){
        board2.removeObject([par1, par2, par3, par4, par5, par6, par7, par8, par9, par11, par12, par13]);
        draw_textfield(); 
        sliders_=false; 
    }
}], {}); 

if(sliders_==true){
    draw_slider();
}else{
    draw_textfield(); 
} 


/* Hier werden die Anfangswerte der Differentialgleichung in sieben Variablen gespeichert. Zu Beginn werden alle Werte mit '0' initialisiert. 
Mit Hilfe der Textfelder können diese Werte geändert werden.*/
var startwerte = []; 
startsus = board.create('glider', [0, 0, board.defaultAxes.y], {name:'S',strokeColor:'red',fillColor:'red', fixed: true, visible: false});
startinf = board.create('glider', [0, 0, board.defaultAxes.y], {name:'I',strokeColor:'blue',fillColor:'blue', fixed: true, visible: false});
startrec = board.create('glider', [0, 0, board.defaultAxes.y], {name:'R',strokeColor:'green',fillColor:'green', fixed: true, visible: false});
starthos = board.create('glider', [0, 0, board.defaultAxes.y], {name:'H',strokeColor:'brown',fillColor:'brown', fixed: true, visible: false});
startdead = board.create('glider',[0, 0, board.defaultAxes.y], {name:'D',strokeColor:'yellow',fillColor:'yellow', fixed: true, visible: false});
startexp = board.create('glider', [0, 0, board.defaultAxes.y], {name:'E',strokeColor:'orange',fillColor:'orange', fixed: true, visible: false});
starticu = board.create('glider', [0, 0, board.defaultAxes.y], {name:'C',strokeColor:'black',fillColor:'black', fixed: true, visible: false});
startwerte.push(startsus); 
startwerte.push(startinf); 
startwerte.push(starthos);
startwerte.push(startrec); 
startwerte.push(startdead); 
startwerte.push(startexp); 
startwerte.push(starticu);



// Hier werden die Textfelder Initialisiert, mit denen die Anfangswerte der Differentialgleichung geändert werden können. 
var input_list = [];
var list_name = [['S(0)=', 'I(0)  =', 'H(0)=', 'R(0)='], ['D(0)=', 'E(0)=', 'C(0)=']]; 
board3.create('text', [-1.5, 5, '<button onclick="updateGraph()">Update graph</button>'], {fixed: true});
for(var i=0; i<list_name.length; i++){
    for(var j=0; j<list_name[i].length; j++){
        var input = board3.create('input', [-2+2.5*j, 8-1.5*i, '0', list_name[i][j]], {cssStyle: 'width: 100px', fixed: true}); 
        input_list.push(input);
    }
}
/* Diese Funktion ändert lediglich die Anfangswerte der Differentialgleichung. Es wird abgefragt, 
ob die eingegebenen Werte Zahlen zwischen Null und Eins liegen, und ob die Werte für 'starthos' und 'starticu' nicht größer als 'par6' und 'par11' sind.
Letztere Abfrage ist notwendig, da 'par6' und 'par11' die maximale Kapazität der Normalstation bzw. der Intensivstation speichern, die nicht
durch die Anzahl der Hospitalisierten ('starthos' + 'starticu') überschritten werden darf.*/
var updateGraph = function() {

    for(var i=0; i<input_list.length; i++){
        var y = parseFloat(input_list[i].Value());
        if(!isNaN(y) && !(y>1 ||y<0) && i!=2 && i!=6){
            startwerte[i].Y = board.jc.snippet(input_list[i].Value(), true, 'x', false); 
            startwerte[i].updateGlider();
            startwerte[i].moveTo([0, y]);
        }else if(!isNaN(y) && !(y>1 ||y<0) && (i==2 || i==6)){
            if(i==2 && y<par6.Value()){
                startwerte[i].Y = board.jc.snippet(input_list[i].Value(), true, 'x', false); 
                startwerte[i].updateGlider();
                startwerte[i].moveTo([0, y]);
                console.log(y);
            }else if(i==6 && y<par11.Value()){
                startwerte[i].Y = board.jc.snippet(input_list[i].Value(), true, 'x', false); 
                startwerte[i].updateGlider();
                startwerte[i].moveTo([0, y]);
                console.log(y);
            }
        }
    } 

    board.update();
    
}
/*Der folgende Code dient dazu ein Textfeld zu erzeugen, mit dem man die dem Modell zu Grunde liegende Funktion auswählen kann.*/
var verwendete_funktion = 1;
var inputfunc = board4.create('input', [0, 4, '', ''], {cssStyle: 'width: 100px', fixed: true});
board4.create('text', [0, 2.5, '<button onclick="changefunc()">Change function</button>'], {fixed: true});
var changefunc = function(){
    for(var i=1; i<5; i++){
        if(inputfunc.Value()==i){
            verwendete_funktion = i; 
            board.update(); 
        }
    }
}

function g(x){
    if(verwendete_funktion == 1){
        return Math.exp(-1*x*x); 
    }else if(verwendete_funktion == 2){
        return 1/(1+Math.pow(x,2)); 
    }else if(verwendete_funktion == 3){
        return 1/(1+Math.atan(x)*Math.atan(x)); 
    }else if(verwendete_funktion == 4){
        return 1/(Math.sqrt(1+x*x)); 
    }
}

board4.create('text', [0, 1, "1 = Exponentiell"], {fixed:true});
board4.create('text', [0, 0.25, "2 = Quadratisch"], {fixed:true});
board4.create('text', [0, -0.5, "3 = Arkustangens"], {fixed:true});
board4.create('text', [0, -1.25, "4 = Wurzelfunktion"], {fixed:true});


// In diesen Variablen werden später die Kurven gespeichert
var g3 = null;
var g4 = null;
var g5 = null; 
var g6 = null; 
var g7 = null; 
var g8 = null; 
var g9 = null;  





// Diese Funktion stellt die zu lösende Differentialgleichung dar.
var f = function(t, x) {
    var beta = par1.Value();
    var lambda = par2.Value();
    var mu = par3.Value(); 
    var kappa1 = par4.Value();
    var delta1 = par5.Value(); 
    var kapazität = par6.Value(); 
    var epsilon = par7.Value(); 
    var norm_normal_stat = 10; 
    var norm_intensiv_stat = 10; 
    // Wenn die Werte für 'kapazität' sehr klein werden muss dieser Term an das Argument von g multipliziert um das Ergebniss nicht zu verfälschen. 
    if(sliders_ == false){
        norm_normal_stat = Math.pow(10,par6.Value().toString().length-2);
        norm_intensiv_stat = Math.pow(10,par11.Value().toString().length-2);
    }
    var kappa2 = par8.Value(); 
    var p = par9.Value(); 
    var kapazität_int = par11.Value();
    var delta2 = par12.Value();   
    var nu = par13.Value(); 
    

    
    var zulauf_norm_stat = (p*lambda*x[1]);
    var zulauf_int_stat = ((1-p)*lambda*x[1])+nu*x[2]; 
    var y = [];

    y[0] = (-beta*x[0]*x[1]); // Susceptible x[0]  
    y[1] = epsilon*x[5]-lambda*x[1]-mu*x[1]; // Infectious x[1]
    
    y[2] = zulauf_norm_stat*(1-g(norm_normal_stat*(kapazität-x[2]))) -kappa1*x[2] -delta1*x[2] -nu*x[2]; // Hospitalized x[2]
   
    y[4] = delta1*x[2] +delta2*x[6] +zulauf_int_stat*(g(norm_intensiv_stat*(kapazität_int-x[6])))
            +zulauf_norm_stat*(g(norm_normal_stat*(kapazität-x[2]))); // Dead x[4]
    
            
    y[6] = zulauf_int_stat*(1-g(norm_intensiv_stat*(kapazität_int-x[6]))) -kappa2*x[6]-delta2*x[6];  // ICU x[6]

    y[3] = kappa1*x[2]+mu*x[1]+kappa2*x[6]; // Recovered x[3]
    y[5] = (beta*x[0]*x[1])-epsilon*x[5]; // Exposed x[5]
    return y;
}

/* Mit Hilfe dieser Textfelder kann die Y-Achse und die X-Achse angepasst werden ohne die jeweils andere zu verändern. 
Aus technischen Gründen ist die  Y-Achse auf zwei und die X-Achse auf 1000 beschränkt.*/
var input_x_axis = board3.create('input', [-2, 3, '50', 't_max='], {cssStyle: 'width: 100px', fixed: true});
board3.create('text', [-1.5, 1.5, '<button onclick="updateAxis()">Update x-axis</button>'], {fixed: true});
var input_y_axis = board3.create('input', [2, 3, '1.2', 'zoom='], {cssStyle: 'width: 100px', fixed: true});
board3.create('text', [2.5, 1.5, '<button onclick="updateAxis()">Zoom</button>'], {fixed: true});  
var x_max; 
var y_max = 1.2;  
var updateAxis = function(){
    y_max = input_y_axis.Value();
    if(input_x_axis.Value()<=1000 && input_x_axis.Value()>=0 && (y_max<=2 && y_max>=0)){ 
        x_max = input_x_axis.Value(); 
        board.setBoundingBox([-x_max*0.1, y_max , x_max, -y_max*0.1]);
        board.update();   
    }       
}

// Hier wird die Differentialgleichung gelöst. 
function ode() {

    // Anfangswerte
    var x0 = [startwerte[0].Y(), startwerte[1].Y(), startwerte[2].Y(), startwerte[3].Y(), startwerte[4].Y(), startwerte[5].Y(), startwerte[6].Y()];
    // Lösungsintervall
    var I = [0, x_max];
    // Hier wird das Anfangswertproblem gelöst. 
    var data = JXG.Math.Numerics.rungeKutta('euler', x0, I, x_max*10, f);
    return data;
}

/* Falls die Checkbox für die Logarithmische Skala angekreuzt ist, gibt diese Funktion den Logarithmus der Variablen y zur Basis 10 zurück. 
Andernfalls wird y selbst zurückgegeben.*/
var log_scale = false; 
function getBaseLog(x, y) {
    if(log_scale==true){
        if(y >= 0.000000000001){
            return Math.log(y) / Math.log(x);
        }else{
            return Math.log(0.000000000001) / Math.log(x); 
        }
    }else{
        return y; 
    }
}
// Hier werden die Daten, die sich aus der Lösung der Differentialgleichung ergeben in der Variablen 'data' gespeichert. 
var data = ode();
//Hier werden die Daten in die entsprechenden Listen kopiert, um sie später zeichnen zu können. 
var t = []; 
var datasus = [];
var datainf = [];
var datahos = [];
var datarec = [];   
var datadead = []; 
var dataexp = []; 
var dataicu = [];  
for(var i=0; i<data.length; i++) {
    t[i] = data[i][7];
    datasus[i] = getBaseLog(10,data[i][0]);
    datainf[i] = getBaseLog(10,data[i][1]);
    datahos[i] = getBaseLog(10,data[i][2]);
    datarec[i] = getBaseLog(10,data[i][3]);
    datadead[i] = getBaseLog(10,data[i][4]);
    dataexp[i] = getBaseLog(10,data[i][5]);
    dataicu[i] = getBaseLog(10,data[i][6]);
       
}

// Plot Susceptible
g3 = board.create('curve', [t, datasus], {strokeColor:'red', strokeWidth:'2px'});
g3.updateDataArray = function() {
    var data = ode();
    var h = x_max/(x_max*10);  
    this.dataX = [];
    this.dataY = [];
    for(var i=0; i<data.length; i++) {
        this.dataX[i] = startwerte[0].X()+i*h; 
        this.dataY[i] = getBaseLog(10,data[i][0]);
    }
}

// Plot Infectious
g4 = board.create('curve', [t, datainf], {strokeColor:'blue', strokeWidth:'2px'});
g4.updateDataArray = function() {
    var data = ode();
    var h = x_max/(x_max*10);  
    this.dataX = [];
    this.dataY = [];
    for(var i=0; i<data.length; i++) {
        this.dataX[i] = startwerte[1].X()+i*h; 
        this.dataY[i] = getBaseLog(10,data[i][1]);
    }
}

//Plot Hospitalized
g5 = board.create('curve', [t, datahos], {strokeColor:'brown', strokeWidth:'2px'});
g5.updateDataArray = function() {
    var data = ode();
    var h = x_max/(x_max*10); 
    var showGraph_g5 = true; 
    this.dataX = [];
    this.dataY = [];
    for(var i=0; i<data.length; i++) {
        this.dataX[i] = startwerte[2].X()+i*h;
        this.dataY[i] = getBaseLog(10,data[i][2]);
        if(getBaseLog(10, data[i][2])>= par6.Value()){
            showGraph_g5 = false; 
        }
    }
    if(showGraph_g5==false){
        g5.setAttribute({visible: false}); 
    }else{
        if(!(checkbox5.Value())){
            g5.setAttribute({visible: true}); 
        }
    }
}

//Plot Recovered
g6 = board.create('curve', [t, datarec], {strokeColor:'green', strokeWidth:'2px'});
g6.updateDataArray = function() {
    var data = ode();
    var h = x_max/(x_max*10); 
    this.dataX = [];
    this.dataY = [];
    for(var i=0; i<data.length; i++) {
        this.dataX[i] = startwerte[3].X()+i*h;
        this.dataY[i] = getBaseLog(10,data[i][3]);
    }
}

//Plot Dead
g7 = board.create('curve', [t, datadead], {strokeColor:'yellow', strokeWidth:'2px'});
g7.updateDataArray = function() {
    var data = ode();
    var h = x_max/(x_max*10); 
    this.dataX = [];
    this.dataY = [];
    for(var i=0; i<data.length; i++) {
        this.dataX[i] = startwerte[4].X()+i*h;
        this.dataY[i] = getBaseLog(10,data[i][4]);
    }
}

//Plot Exposed
g8 = board.create('curve', [t, dataexp], {strokeColor:'orange', strokeWidth:'2px'});
g8.updateDataArray = function() {
    var data = ode();
    var h = x_max/(x_max*10); 
    this.dataX = [];
    this.dataY = [];
    for(var i=0; i<data.length; i++) {
        this.dataX[i] = startwerte[5].X()+i*h;
        this.dataY[i] = getBaseLog(10,data[i][5]);
    }
}

//Plot ICU
g9 = board.create('curve', [t, dataicu], {strokeColor:'black', strokeWidth:'2px'});
g9.updateDataArray = function() {
    var data = ode();
    var h = x_max/(x_max*10);
    var showGraph_g9 = true;   
    this.dataX = [];
    this.dataY = [];
    for(var i=0; i<data.length; i++) {
        this.dataX[i] = startwerte[6].X()+i*h;
        this.dataY[i] = getBaseLog(10,data[i][6]);
        if(getBaseLog(10, data[i][6])>= par11.Value()){
            showGraph_g9 = false; 
        }
    }
    if(showGraph_g9==false){
        g9.setAttribute({visible: false}); 
    }else{
        if(!(checkbox9.Value())){
            g9.setAttribute({visible: true}); 
        }
    }
}


// Ist diese Checkbox angekreuzt, wird die Kurve für die Susceptibles nicht gezeichnet. 
var checkbox3 = board4.create('checkbox', [0, 8, 'Susceptible'], {fixed: true, strokeColor: 'red'});
JXG.addEvent(checkbox3.rendNodeCheckbox, 'change', function() {
    if (this.Value()) {
        g3.setAttribute({visible: false});
    } else {
        g3.setAttribute({visible: true});
    }
}, checkbox3);

// Ist diese Checkbox angekreuzt, wird die Kurve für die Gruppe Infectious nicht gezeichnet.
var checkbox4 = board4.create('checkbox', [3, 8, 'Infectious'], {fixed: true, strokeColor: 'blue'});
JXG.addEvent(checkbox4.rendNodeCheckbox, 'change', function() {
    if (this.Value()) {
        g4.setAttribute({visible: false});
    } else {
        g4.setAttribute({visible: true});
    }
}, checkbox4);

// Ist diese Checkbox angekreuzt, wird die Kurve für die Gruppe Hospitalized nicht gezeichnet.
var checkbox5 = board4.create('checkbox', [0, 6, 'Hospitalized'], {fixed: true, strokeColor: 'brown'});
JXG.addEvent(checkbox5.rendNodeCheckbox, 'change', function() {
    if (this.Value()) {
        g5.setAttribute({visible: false});
    } else {
        g5.setAttribute({visible: true});
    }
}, checkbox5);

// Ist diese Checkbox angekreuzt, wird die Kurve für die Gruppe Recovered nicht gezeichnet.
var checkbox6 = board4.create('checkbox', [6, 8, 'Recovered'], {fixed: true, strokeColor: 'green'});
JXG.addEvent(checkbox6.rendNodeCheckbox, 'change', function() {
    if (this.Value()) {
        g6.setAttribute({visible: false});
    } else {
        g6.setAttribute({visible: true});
    }
}, checkbox6);

// Ist diese Checkbox angekreuzt, wird die Kurve für die Gruppe Dead nicht gezeichnet.
var checkbox7 = board4.create('checkbox', [3, 6, 'Dead'], {fixed: true, strokeColor: 'yellow'});
JXG.addEvent(checkbox7.rendNodeCheckbox, 'change', function() {
    if (this.Value()) {
        g7.setAttribute({visible: false});
    } else {
        g7.setAttribute({visible: true});
    }
}, checkbox7);

// Ist diese Checkbox angekreuzt, wird die Kurve für die Gruppe Exposed nicht gezeichnet.
var checkbox8 = board4.create('checkbox', [6, 6, 'Exposed'], {fixed: true, strokeColor: 'orange'});
JXG.addEvent(checkbox8.rendNodeCheckbox, 'change', function() {
    if (this.Value()) {
        g8.setAttribute({visible: false});
    } else {
        g8.setAttribute({visible: true});
    }
}, checkbox8);

// Ist diese Checkbox angekreuzt, wird die Kurve für die Gruppe ICU nicht gezeichnet.
var checkbox9 = board4.create('checkbox', [9, 8, 'ICU'], {fixed: true, strokeColor: 'black'});
JXG.addEvent(checkbox9.rendNodeCheckbox, 'change', function() {
    if (this.Value()) {
        g9.setAttribute({visible: false});
    } else {
        g9.setAttribute({visible: true});
    }
}, checkbox9);

// Checkbox für die Logarithmische Skala. Ist die Checkbox angekreuzt, so werden die Kurven in der Logarithmischen Skala gezeichnet. 
var checkbox10 = board4.create('checkbox', [6, 4, 'Log-Scale'], {fixed: true, strokeColor: 'black'});
JXG.addEvent(checkbox10.rendNodeCheckbox, 'change', function() {
    if (this.Value()) {
        log_scale = true; 
        board.setBoundingBox([-x_max*0.1, 0.2, x_max, -13]); 
        board.update(); 
    } else {
        log_scale = false; 
        board.setBoundingBox([-x_max*0.1, y_max, x_max, -y_max*0.1]); 
        board.update(); 
    }
}, checkbox10);

board.update();