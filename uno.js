function mostrar() {
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let seguir;
  let promedioEdadReptiles;
  let contadorReptil=0;
  let acumuladorEdadReptil=0;
  let tipoMasJoven;
  let sexoMasJoven;
  let edadMascotaJoven=0;
  let flagJoven=1;
  let porcentajeAves;
  let contadorAnimales=0;
  let contadorAves=0;
  let contadorMamifero=0;
  let mayorTipo;


  do{
    nombre=prompt("Ingrese nombre").toLowerCase();
    while(nombre.length < 3 || nombre.length > 8){
      nombre=prompt("ERROR. Reingrese nombre").toLowerCase();
    }
    tipo=prompt("ingrese tipo(mamifero/ave/reptil):").toLowerCase();
    while(tipo != "mamifero" && tipo !="ave" && tipo !="reptil"){
      tipo=prompt("ERROR. Reingrese tipo(mamifero/ave/reptil):").toLowerCase();
    }
    if(tipo=="reptil"){
      sangre="fria";
      alert("su mascota solo tien sangre fria")
    }
    else{
      sangre=prompt("ingrese su sangre(fria/calida)").toLowerCase();
      while(sangre !="fria" && sangre !="calida"){
        sangre=prompt("ERROR. Reingrese su sangre(fria/calida)").toLowerCase();
      }
    }
    sexo=prompt("ingrese su sexo(h/m)").toLowerCase();
    while(sexo !="h" && sexo !="m"){
	    sexo=prompt("ERROR. Reingrese su sexo(h/m)").toLowerCase();
    }
    edad=parseInt(prompt("Ingrese su edad:"));
    while(isNaN(edad)|| !(edad > 0)){
      edad=parseInt(prompt("ERROR. Reingrese su edad:"));
    }
    switch(tipo){
      case "reptil":
        contadorReptil++;
        acumuladorEdadReptil+=edad;
        break;
      case "ave":
        contadorAves++;
        break;
      case "mamifero":
        contadorMamifero++;
        break;
    }
    if(flagJoven || edadMascotaJoven > edad){
      flagJoven=0;
      edadMascotaJoven=edad;
      tipoMasJoven=tipo;
      sexoMasJoven=sexo;
    }


    contadorAnimales++;


    seguir=prompt("quiere ingresar otra mascota");
  }while(seguir=="s");

  if(contadorReptil !=0){
    promedioEdadReptiles=acumuladorEdadReptil/contadorReptil;
  }
  if(contadorMamifero > contadorAves && contadorMamifero > contadorReptil){
    mayorTipo="Mamifero";
  }
  else if(contadorAves >= contadorMamifero && contadorAves > contadorReptil){
    mayorTipo="Ave";
  }
  else{
    mayorTipo="Reptil";
  }

  porcentajeAves=contadorAves*100/contadorAnimales;//siempre se va ingresar un animal

  document.write("a- el promedio de edad de los reptiles es: "+promedioEdadReptiles+"<br>")
  document.write("b- tipo de la mascota mas joven: "+tipoMasJoven+" y sexo de la mascota mas joven: "+sexoMasJoven+"<br>")
  document.write("c- el porcentaje de aves sobre el total de mascotas es: "+porcentajeAves+"% <br>")
  document.write("d- el tipo de mascota que mas se anoto es: "+mayorTipo);


}

