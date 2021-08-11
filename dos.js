/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:


nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).


Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
*/

function mostrar() {
  let nombre;
  let carrera;
  let cantidadMaterias;
  let notaPromedio;
  let edad;
  let nombreMejorPromedio;
  let MejorPromedio=0;
  let flagPromedio=1;
  let nombreAlumnaMasJoven;
  let edadAlumnaMasJoven=0;
  let flagAlumnaJoven=1;
  let contadorFisica=0;
  let contadorSistemas=0;
  let contadorQuimica=0;
  let porcentajeFisica;
  let porcentajeSistema;
  let porcentajeQuimica;
  let nombreAlumnoCursaMas;
  let edadAlumnoCursaMas;
  let masMateriasCursadas=0;
  let flagAlumnoCursaMas=1;



  for(i=0;i<500;i++){
    nombre=prompt("Ingrese nombre").toLowerCase();
    while(nombre.length == 0){
      nombre=prompt("Debe ingresar nombre").toLowerCase();
    }

    carrera=prompt("ingrese carrera(quimica/fisica/sistemas):").toLowerCase();
    while(carrera != "quimica" && carrera !="fisica" && carrera !="sistemas"){
	    carrera=prompt("ERROR. Reingrese carrera(quimica/fisica/sistemas):").toLowerCase();
    }

    sexo=prompt("ingrese su sexo(femenino/masculino)").toLowerCase();
    while(sexo !="femenino" && sexo !="masculino"){
      sexo=prompt("ERROR. Reingrese su sexo(femenino/masculino)").toLowerCase();
    }

    cantidadMaterias=parseInt(prompt("Ingrese la cantidad de materias:"));
    while(isNaN(cantidadMaterias)|| !(cantidadMaterias > 0 && cantidadMaterias <= 15)){
      cantidadMaterias=parseInt(prompt("ERROR. Reingrese la cantidad de materias:"));
    }

    notaPromedio=parseInt(prompt("Ingrese su nota promedio:"));
    while(isNaN(notaPromedio)|| !(notaPromedio > 0 && notaPromedio <= 10)){
      notaPromedio=parseInt(prompt("ERROR. Reingrese su promedio:"));
    }

    edad=parseInt(prompt("Ingrese su edad:"));
    while(isNaN(edad)|| !(edad > 0)){
      edad=parseInt(prompt("ERROR. Reingrese su edad:"));
    }

    if (carrera=="fisica"){
      if(flagPromedio || MejorPromedio < notaPromedio){
        flagPromedio=0;
        MejorPromedio=notaPromedio;
        nombreMejorPromedio=nombre;
      }
    }
    if(sexo=="femenino"){
      if(flagAlumnaJoven || edadAlumnaMasJoven > edad){
        flagAlumnaJoven=0;
        edadAlumnaMasJoven=edad;
        nombreAlumnaMasJoven=nombre;
      }
    }
    switch(carrera){
      case "fisica":
        contadorFisica++;
        break;
      case "quimica":
        contadorQuimica++;
        break;
      case "sistemas":
        contadorSistemas++;
        break;
    }
    if(carrera =="fisica" || carrera == "sistemas"){
      if(flagAlumnoCursaMas || masMateriasCursadas < cantidadMaterias){
        nombreAlumnoCursaMas=nombre;
        edadAlumnoCursaMas=edad;
        flagAlumnoCursaMas=0;
        masMateriasCursadas=cantidadMaterias
      }
    }

  }
  
  if(contadorFisica != 0){
    porcentajeFisica=contadorFisica*100/500
  }
  if(contadorQuimica != 0){
    porcentajeQuimica=contadorQuimica*100/500
  }
  if(contadorSistemas != 0){
    porcentajeSistema=contadorSistemas*100/500
  }


  

  document.write("a- el nombre del mejor promedio que estudia fisica: "+nombreMejorPromedio+"<br>");
  document.write("b- el nombre de la alumna mas joven: "+nombreAlumnaMasJoven+"<br>");
  document.write("c-porcentaje de alumnos en fisica: "+porcentajeFisica+"% porcentaje de alumnos en quimica: "+porcentajeQuimica+"% porcentaje de alumnos en sistemas: "+porcentajeSistema+"% <br>")
  document.write("la edad el alumno que cursa mas materias: "+edadAlumnoCursaMas+" y nombre del mismo: "+nombreAlumnoCursaMas+"<br>")
  

}
