function mostrar()
{
var nota=0;
var sexo;
var contador=0;
var acumulador=0;
var promedio;
var notatotal=0;
var varones;
var notabaja=0;
var sexomostrar;

while(contador<5)
{
    nota=prompt("mostrar nota");
    while ((isNaN(nota) || (nota>10 || nota<0)))
    {
        
    alert=(nota+"no es la nota correcta");
    nota=prompt("mostrar nota");  
    }
    nota=parseInt(nota);
    notatotal=nota+notatotal;

    sexo=prompt("mostrar el sexo");
    
    while(sexo!="f" && sexo!="m")
    {
        alert=(sexo+"es incorrecto");
        sexo=prompt("mostrar el sexo");
    }

    if(contador==0)
        {
            notabaja=nota;
            sexomostrar=sexo;
        }
        else if(nota<notabaja)
        {
            notabaja = nota;
            sexomostar = sexo;
        }  

        if ( nota>=6 && sexo=="m")
        {
            varones++;
        }




        contador++;
    }
    alert("la nota mas baja fue :"+notabaja+"y su sexo es: "+sexomostrar);
    alert("el promedio es: "+(notatotal/5));
    alert("la cantidad de varones que obtuvieron nota baja fueron: "+varones);



}
