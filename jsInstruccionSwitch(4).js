function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{
    case"Febrero":
    alert("tiene 28 dias");
    break;

    case"Abril":
    case"Junio":
    case"Septiembre":
    case "noviembre":
    alert("estos meses tienen 30 dias");
    break;

    default:
    alert("estos meses tienen 31 dias");
    break;
}


	



}//FIN DE LA FUNCIÓN