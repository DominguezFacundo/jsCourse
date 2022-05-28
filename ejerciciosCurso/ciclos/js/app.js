const OBJECTIVE = 15;
let salesNumber;
let salesman;
let cycleEnds = false;

salesman = prompt ('Ingrese el nombre del vendedor: ');
salesNumber = prompt ('Ingrese sus ventas: ')

while (!cycleEnds) {
    if (salesNumber < OBJECTIVE) {
        alert('Hola '+ salesman + '! vas por la venta '+ salesNumber +' todavía no llegaste al objetivo.')
    } else {
            alert('Felicidades '+ salesman +' llegaste al objetivo! tenes ' + salesNumber +' ventas!')
    }
    respuestaVendedor = prompt('queres preguntar por otro vendedor? (ingresa si o no)').toLowerCase()
    if (respuestaVendedor == 'si') {
        salesman = prompt ('Ingrese el nombre del vendedor: ');
        salesNumber = prompt ('Ingrese sus ventas: ')
    } else {
        if (respuestaVendedor == 'no') {
            respuestaVentas = prompt ('Desea actualizar su numero de ventas? (ingresa si o no)').toLowerCase()
            if (respuestaVentas == 'si') {
                salesNumber = prompt ('Ingrese sus ventas: ')
            } else {
                alert('Gracias, vuelva prontos! ')
                break
            }
        }
    }
}
