let day = parseInt(
  prompt("(Siendo el mes de 31 días) Ingrese un numero del mes: ")
);

function pillbox(day) {  
  switch (day) {
    case 1:
    case 8:
    case 15:
    case 22:
    case 29:
      return alert("Es lunes, usted debe tomar las pastillas: blancas");
    case 2:
    case 9:
    case 16:
    case 23:
    case 30:
      return alert("Es martes, usted debe tomar las pastillas: rojas");
    case 3:
    case 10:
    case 17:
    case 24:
    case 31:
      return alert("Es miércoles, usted debe tomar las pastillas: azules");
    case 4:
    case 11:
    case 18:
    case 25:
      return alert("Es jueves, usted debe tomar las pastillas: rosas");
    case 5:
    case 12:
    case 19:
    case 26:
      return alert(
        "Es viernes, usted debe tomar las pastillas: blancas y rojas"
      );
    case 6:
    case 13:
    case 20:
    case 27:
      return alert(
        "Es sábado, usted debe tomar las pastillas: azules y verdes"
      );
    case 7:
    case 14:
    case 21:
    case 28:
      return alert("Es domingo, usted no debe tomar nada hoy!");

    default:
      while (day < 0 || day > 32) {
        day = parseInt(
          prompt("Dia incorrecto, por favor ingrese un numero del mes: ")
        );
      }
  }
}

pillbox(day);