function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{
    case"febrero":
    alert("est mes no tiene mas de 29 dias");
    break;

    default:
    alert("este mes tiene mas de 29 dias");
    break;

}
	


}//FIN DE LA FUNCIÓN