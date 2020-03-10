function dibujarLinea(color,xi,yi,xf,yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}


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

//funciones de cambio de color
function cambiarRojo()
{
    for (n = 0; n <numeroCuadros; n++)//reconfigura la matriz control
    {
        for (m = 0; m <numeroCuadros; m++) {
            if (control[n][m]==1)
            {
                if (n+1<numeroCuadros )
                {
                    if (matriz[n+1][m]==1)//derecha 
                    {
                        control[n+1][m]=1;
                    }
                }
                if (n>0)
                {
                    if (matriz[n-1][m]==1 )//izquierda
                    {
                        control[n-1][m]=1;
                    }
                }
                if (m>0)
                {    
                    if (matriz[n][m-1]==1)//arriba 
                    {
                        control[n][m-1]=1;
                    }
                }
                if (m<numeroCuadros)
                {
                    if (matriz[n][m+1]==1)//abajo
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
            matriz[i][0]=1
        };
        for (j = 0; j <numeroCuadros; j++) 
        {
            if (control[i][j]==1) 
            {
                matriz[i][j]=1;
            }
        }
    }
    dibujarMatriz();
}

function cambiarVerde()
{
    for (n = 0; n <numeroCuadros; n++)//reconfigura la matriz control
    {
        for (m = 0; m <numeroCuadros; m++) {
            if (control[n][m]==1)
            {
                if (n+1<numeroCuadros)
                {
                    if (matriz[n+1][m]==2)//derecha 
                    {
                        control[n+1][m]=1;
                    }
                }
                if (n>0)
                {
                    if (matriz[n-1][m]==2 )//izquierda
                    {
                        control[n-1][m]=1;
                    }
                }
                if (m>0)
                {    
                    if (matriz[n][m-1]==2)//arriba 
                    {
                        control[n][m-1]=1;
                    }
                }
                if (m<numeroCuadros)
                {
                    if (matriz[n][m+1]==2)//abajo
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
            matriz[i][0]=2
        };
        for (j = 0; j <numeroCuadros; j++) 
        {
            if (control[i][j]==1) 
            {
                matriz[i][j]=2;
            }
        }
    }
    dibujarMatriz();   
}

function cambiarAzul()
{
    for (n = 0; n <numeroCuadros; n++)//reconfigura la matriz control
    {
        for (m = 0; m <numeroCuadros; m++) {
            if (control[n][m]==1)
            {
                if (n+1<numeroCuadros)
                {
                    if (matriz[n+1][m]==3)//derecha 
                    {
                        control[n+1][m]=1;
                    }
                }
                if (n>0)
                {
                    if (matriz[n-1][m]==3 )//izquierda
                    {
                        control[n-1][m]=1;
                    }
                }
                if (m>0)
                {    
                    if (matriz[n][m-1]==3)//arriba 
                    {
                        control[n][m-1]=1;
                    }
                }
                if (m<numeroCuadros)
                {
                    if (matriz[n][m+1]==3)//abajo
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
            matriz[i][0]=3
        };
        for (j = 0; j <numeroCuadros; j++) 
        {
            if (control[i][j]==1) 
            {
                matriz[i][j]=3;
            }
        }
    }
    dibujarMatriz();     
}

function cambiarAmarillo()
{
    for (n = 0; n <numeroCuadros; n++)//reconfigura la matriz control
    {
        for (m = 0; m <numeroCuadros; m++) {
            if (control[n][m]==1)
            {
                if (n+1<numeroCuadros)
                {
                    if (matriz[n+1][m]==4)//derecha 
                    {
                        control[n+1][m]=1;
                    }
                }
                if (n>0)
                {
                    if (matriz[n-1][m]==4 )//izquierda
                    {
                        control[n-1][m]=1;
                    }
                }
                if (m>0)
                {    
                    if (matriz[n][m-1]==4)//arriba 
                    {
                        control[n][m-1]=1;
                    }
                }
                if (m<numeroCuadros)
                {
                    if (matriz[n][m+1]==4)//abajo
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
            matriz[i][0]=4
        };
        for (j = 0; j <numeroCuadros; j++) 
        {
            if (control[i][j]==1) 
            {
                matriz[i][j]=4;
            }
        }
    }
    dibujarMatriz();    
}

function cambiarNaranja()
{
    for (n = 0; n <numeroCuadros; n++)//reconfigura la matriz control
    {
        for (m = 0; m <numeroCuadros; m++) {
            if (control[n][m]==1)
            {
                if (n+1<numeroCuadros)
                {
                    if (matriz[n+1][m]==5)//derecha 
                    {
                        control[n+1][m]=1;
                    }
                }
                if (n>0)
                {
                    if (matriz[n-1][m]==5 )//izquierda
                    {
                        control[n-1][m]=1;
                    }
                }
                if (m>0)
                {    
                    if (matriz[n][m-1]==5)//arriba 
                    {
                        control[n][m-1]=1;
                    }
                }
                if (m<numeroCuadros)
                {
                    if (matriz[n][m+1]==5)//abajo
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
            matriz[i][0]=5
        };
        for (j = 0; j <numeroCuadros; j++) 
        {
            if (control[i][j]==1) 
            {
                matriz[i][j]=5;
            }
        }
    }
    dibujarMatriz();  
}

function cambiarRosa()
{
    for (n = 0; n <numeroCuadros; n++)//reconfigura la matriz control
    {
        for (m = 0; m <numeroCuadros; m++) {
            if (control[n][m]==1)
            {
                if (n+1<numeroCuadros)
                {
                    if (matriz[n+1][m]==6)//derecha 
                    {
                        control[n+1][m]=1;
                    }
                }
                if (n>0)
                {
                    if (matriz[n-1][m]==6 )//izquierda
                    {
                        control[n-1][m]=1;
                    }
                }
                if (m>0)
                {    
                    if (matriz[n][m-1]==6)//arriba 
                    {
                        control[n][m-1]=1;
                    }
                }
                if (m<numeroCuadros)
                {
                    if (matriz[n][m+1]==6)//abajo
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
            matriz[i][0]=6
        };
        for (j = 0; j <numeroCuadros; j++) 
        {
            if (control[i][j]==1) 
            {
                matriz[i][j]=6;
            }
        }
    }
    dibujarMatriz();  
}

function cambiarMorado()
{
    for (n = 0; n <numeroCuadros; n++)//reconfigura la matriz control
    {
        for (m = 0; m <numeroCuadros; m++) {
            if (control[n][m]==1)
            {
                if (n+1<numeroCuadros)
                {
                    if (matriz[n+1][m]==7)//derecha 
                    {
                        control[n+1][m]=1;
                    }
                }
                if (n>0)
                {
                    if (matriz[n-1][m]==7 )//izquierda
                    {
                        control[n-1][m]=1;
                    }
                }
                if (m>0)
                {    
                    if (matriz[n][m-1]==7)//arriba 
                    {
                        control[n][m-1]=1;
                    }
                }
                if (m<numeroCuadros)
                {
                    if (matriz[n][m+1]==7)//abajo
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
            matriz[i][0]=7
        };
        for (j = 0; j <numeroCuadros; j++) 
        {
            if (control[i][j]==1) 
            {
                matriz[i][j]=7;
            }
        }
    }
    dibujarMatriz();   
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
var color, random, ancho=d.width, posicion, posicionj;
var numeroCuadros=10;
var anchoCuadros=(ancho/numeroCuadros);
var matriz=new Array(numeroCuadros);
var control=new Array(numeroCuadros);
var movimientos=0;


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