let lunes = [1, 8, 15, 22, 29];
let martes = [2, 9, 16, 23, 30];
let miercoles = [3, 10, 17, 24, 31];
let jueves = [4, 11, 18, 25];
let viernes = [5, 12, 19, 26];
let sabado = [6, 13, 20, 27];
let domingo = [7, 14, 21, 28];

function pillbox() {
  let dayOfWeek = parseInt(
    prompt("(Siendo el mes de 31 días) Ingrese un numero del mes: ")
  );
  if (lunes.includes(dayOfWeek)) {
    alert("Es lunes, usted debe tomar las pastillas: blancas");
  } else if (martes.includes(dayOfWeek)) {
    alert("Es martes, usted debe tomar las pastillas: rojas");
  } else if (miercoles.includes(dayOfWeek)) {
    alert("Es miércoles, usted debe tomar las pastillas: azules");
  } else if (jueves.includes(dayOfWeek)) {
    alert("Es jueves, usted debe tomar las pastillas: rosas");
  } else if (viernes.includes(dayOfWeek)) {
    alert("Es viernes, usted debe tomar las pastillas: blancas y rojas");
  } else if (sabado.includes(dayOfWeek)) {
    alert("Es sábado, usted debe tomar las pastillas: azules y verdes");
  } else if (domingo.includes(dayOfWeek)) {
    alert("Es domingo, usted no debe tomar nada hoy!");
  } else {
    alert("Dia incorrecto, por favor ingrese un numero del mes");

    pillbox();
  }
}

pillbox();
