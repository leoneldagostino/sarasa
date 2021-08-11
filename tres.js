function mostrar() {
  let tipoJugete;
  let origen;
  let precio;
  let seguir;
  let contadorMuñecas=0;
  let contadorPelota=0;
  let contadorRompecabezas=0;
  let masJugetesVendidos;
  let promedioPrecioImportados;
  let contadorImportado=0;
  let acumuladorPrecioImportado=0;
  let recaudacion=0;
  let precioRompecabezasBarato=0;
  let flagBarato=1;
  let ivaPercibido;

  
  do{
    tipoJugete=prompt("ingrese tipo de jugete(muñecas/rompecabezas/pelota):").toLowerCase();
    while(tipoJugete != "muñecas" && tipoJugete !="rompecabezas" && tipoJugete !="pelota"){
      tipoJugete=prompt("ERROR. Reingrese tipo de jugete(muñecas/rompecabezas/pelota):").toLowerCase();
    }
    origen=prompt("ingrese su origen(nacional/importado)").toLowerCase();
    while(origen !="nacional" && origen !="importado"){
	    origen=prompt("ERROR. Reingrese su origen(nacional/importado)").toLowerCase();
    }
    precio=parseInt(prompt("Ingrese su precio:"));
    while(isNaN(precio)|| !(precio > 1000 && precio <5000)){
      precio=parseInt(prompt("ERROR. Reingrese precio:"));
    }
    switch(tipoJugete){
      case "muñecas":
        contadorMuñecas++;
        break;
      case "pelota":
        contadorPelota++;
        break;
      case "rompecabezas":
        contadorRompecabezas++;
        break;
    }
    if(origen=="importado"){
      contadorImportado++;
      acumuladorPrecioImportado+=precio;
    }
    
    recaudacion+=precio

    if(origen == "nacional" && tipoJugete=="rompecabezas"){
      if(flagBarato || precioRompecabezasBarato < precio){
        flagBarato=0;
        precioRompecabezasBarato=precio;
      }
    }
 

    seguir=prompt("Quiere ingresar otra venta?");
  }while(seguir=="s");


  if(contadorImportado !=0){
    promedioPrecioImportados=acumuladorPrecioImportado/contadorImportado;
  }

  if(contadorMuñecas > contadorPelota && contadorMuñecas > contadorRompecabezas){
    masJugetesVendidos="Muñeca";
  }
  else if(contadorPelota >= contadorMuñecas && contadorPelota > contadorRompecabezas){
    masJugetesVendidos="Pelota";
  }
  else{
    masJugetesVendidos="Rompecabezas";
  }

  ivaPercibido=recaudacion*21/100;
  
  document.write("a-El tipo de juguete mas vendido: "+masJugetesVendidos+"<br>");
  document.write("b-el promedio de precio de los jugetes importados: "+promedioPrecioImportados+"<br>");
  document.write("c-la recaudacion total del dia es: "+recaudacion+"<br>");
  document.write("d-el precio del rompecabezas nacional mas barato es: "+precioRompecabezasBarato+"<br>");
  document.write("e-el iva percibido es: "+ivaPercibido+"<br>")


}
