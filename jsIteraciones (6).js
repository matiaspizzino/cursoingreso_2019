function mostrar()
{
var acumulador;
var contador;
var promedio;
var numero;
	contador=0;
	 acumulador=0;
numero=prompt("ingrese un numero");
while(contador>=5)
{
	numero=prompt(numero);
	contador=contador+1;
	numero=parseInt(numero);
	acumulador=acumulador +numero;
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN