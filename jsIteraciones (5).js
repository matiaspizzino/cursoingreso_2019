function mostrar()
{
var sexo;
var masculino;
var femenino;

masculino="m"
femenino= "f"
sexo = prompt("ingrese f ó m .");
while(sexo!=masculino && sexo!=femenino)
{
    sexo=prompt("reingrese f o m");
}




document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN