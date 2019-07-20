function mostrar()
{

	var contador=0;
	var numero;
	var contadorpPositivos=0;
	var contadorNegativos=0;
	var acumuladorPositivos=0;
	var acumularorNegativos=0;
	var acumuladorCeros=0;
	var acumuladorPares=0;
	var promedioPositivos;
	var promedioNegativos;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		
	numero=prompt("ingrese un numero");
	numero=parseInt(numero);
	if(numero>0)
	{
	   contadorPositivos++;
	   acumuladorPositivos=acumuladorPositivos + numero;
	}


	else
{


	

   	contador++
}
	
	if(numero<%2==0)
	{
	  contadorPares++;
	  respuesta=confirm("desea ingresar otro numero?"); 
	}
	
	else
	{
	  contadorCeros++;
	  
	}
	if(contadorPositivos!=0)
	{
		promedioPositivos=acumuladorPositivos/contadorPositivos;
	}
	else
	{
	promedioPositivos="no se ingrearon numeros positivos;"
	}
	
	if(contadorNegativo!=0)
	{
		promedioNegativos=acumuladorNegativos/contadorNegativos;	
	}
	else
	{
		PromedioNegativo="no se ingresaron numeros negativos";
	}
	
	promedioPositivos=acumuladorPositivos/contadorPositivos;
	promedioNegativos=acumuladorNegativos/contadorNegativos;
	document.write("Positivos:"+ acumuladorPositivos);
	document.write("Negativos:"+ acumuladorNegativos);
	document.write("Positivos:"+contadorPositivos);
	document.write("Positivos:"+contadorNegativos);
	document.write("contadorCeros:"+ contadorCeros);
	document.write("contadorPares:"+contadorPares);
	
	
	

	}




}//FIN DE LA FUNCIÓN