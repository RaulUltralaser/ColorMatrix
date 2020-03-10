function dibujarLinea(color,xi,yi,xf,yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

//enlista los posibles valores de la variable colorNum, y les asigna un color
function elegirColor()
{

    switch (posicion, posicionj) 
    {
        case 1:
            color="rgb(200,0,0)"//rojo
            break;
        case 2:
            color="rgb(0,200,0)"//verde
            break;
        case 3:
            color="rgb(0,0,200)"//azul
            break;
        case 4:
            color="rgb(255,245,47)"//amarillo
            break;
        case 5:
            color="rgb(255,139,0)"//naranja
            break;
        case 6:
            color="rgb(255,0,255)"//rosa
            break;
        case 7:
            color="rgb(98,0,201)"//morado
            break;
        default:
            color="rgb(200,0,0)"//color por si algo sale mal
            break;
    }
}

//cambia los numeros en la matriz de control y le asigna el color de la variable numColor
function cambiarColor (numColor){
    for (n = 0; n <numeroCuadros; n++)//reconfigura la matriz control
    {
        for (m = 0; m <numeroCuadros; m++) {
            if (control[n][m]==1)
            {
                if (n+1<numeroCuadros )
                {
                    if (matriz[n+1][m]==numColor)//derecha 
                    {
                        control[n+1][m]=1;
                    }
                }
                if (n>0)
                {
                    if (matriz[n-1][m]==numColor )//izquierda
                    {
                        control[n-1][m]=1;
                    }
                }
                if (m>0)
                {    
                    if (matriz[n][m-1]==numColor)//arriba 
                    {
                        control[n][m-1]=1;
                    }
                }
                if (m<numeroCuadros)
                {
                    if (matriz[n][m+1]==numColor)//abajo
                    {
                        control[n][m+1]=1;
                    }
                }    
            }
            
        }
        
    }
    for (i = 0; i <numeroCuadros; i++) 
    {
        if (control[i][0]==1) 
        {
            matriz[i][0]=numColor
        };
        for (j = 0; j <numeroCuadros; j++) 
        {
            if (control[i][j]==1) 
            {
                matriz[i][j]=numColor;
            }
        }
    }
    dibujarMatriz();
}

//funciones de cambio de color
function cambiarRojo()
{
    cambiarColor(1);
}

function cambiarVerde()
{
    cambiarColor(2);
}

function cambiarAzul()
{
    cambiarColor(3);
}

function cambiarAmarillo()
{
    cambiarColor(4);
}

function cambiarNaranja()
{
    cambiarColor(5);
}

function cambiarRosa()
{
    cambiarColor(6);
}

function cambiarMorado()
{
    cambiarColor(7);
}

// Esta funcion redibuja la matriz con los nuevos colores
function dibujarMatriz()
{
    for (i = 0; i < numeroCuadros; i++) {
        posicion=matriz[i][0];
        elegirColor();
        lienzo.fillStyle=color;
        lienzo.fillRect(i*anchoCuadros,0,anchoCuadros,anchoCuadros);
        for (j = 0; j < numeroCuadros; j++) {
            posicionj=matriz[i][j];
            elegirColor();
            lienzo.fillStyle=color;
            lienzo.fillRect(i*anchoCuadros,j*anchoCuadros,anchoCuadros,anchoCuadros);
            console.log(matriz);
            console.log(control);
        }
    }
}

var rojo=document.getElementById("1");
var verde=document.getElementById("2");
var azul=document.getElementById("3");
var amarillo=document.getElementById("4");
var naranja=document.getElementById("5");
var rosa=document.getElementById("6");
var morado=document.getElementById("7");
var d=document.getElementById("dibujo");
var lienzo=d.getContext("2d");
var color, random, ancho=d.width, posicion, posicionj, numColor;
var numeroCuadros=5;
var anchoCuadros=(ancho/numeroCuadros);
var matriz=new Array(numeroCuadros);
var control=new Array(numeroCuadros);
var movimientos=0;

//agrega la funcion respectiva a los colores
rojo.addEventListener("click", cambiarRojo)
verde.addEventListener("click", cambiarVerde)
azul.addEventListener("click", cambiarAzul)
amarillo.addEventListener("click", cambiarAmarillo)
naranja.addEventListener("click", cambiarNaranja)
rosa.addEventListener("click", cambiarRosa)
morado.addEventListener("click", cambiarMorado)

// Aqui se dibuja el marco solamente
dibujarLinea("black", 1, 1, ancho, 1);
dibujarLinea("black", 1, 1, 1, ancho);
dibujarLinea("black", ancho-1, ancho-1, ancho-1, 1);
dibujarLinea("black", ancho-1, ancho-1, 1, ancho-1);

// Genera una matriz para los colores
for (i= 0; i<numeroCuadros; i++) 
{
    matriz[i]=new Array(numeroCuadros);
}

//llena esa matriz con numeros random 
for (i = 0; i<numeroCuadros; i++) {
    random=Math.ceil(Math.random()*7);
    matriz[i][0]=random;

    for (j =0 ; j<numeroCuadros; j++) 
    {
        random=Math.ceil(Math.random()*7);
        matriz[i][j]=random; 
        
    }
}

// Genera otra matriz para el control 
for (n= 0; n<numeroCuadros; n++) 
{
    control[n]=new Array(numeroCuadros);
}

// Llena el control con 0 o 1 siendo 1 el color que esta arriba a la izquierda
for (n=0; n<numeroCuadros; n++) 
{
    control[n][0]=0;
    
    for (m=0; m<numeroCuadros; m++) 
    {
       control[n][m]=0;
    }
}
control[0][0]=1;

for (p=0;p<numeroCuadros;p++) 
{
    if (control[p][0]==1) {
        if (matriz[p][0]==matriz[p+1][0]) {
            control[p+1][0]=1;
        }
    }
    for (q=0; q<numeroCuadros; q++) 
    {
        if (control[p][q]==1) {
            if (matriz[p][q]==matriz[p][q+1]) {
                control[p][q+1]=1;
            }
        } 
        
    }  
}

dibujarMatriz();