// Declarar constantes
const w = '[r][g]'
const i = '[0][1][3][5][9]';
const wi = '[g][r]';
const j = '[j][u][l][i][a][n]';

const resultado = document.getElementsByClassName('resultado');
const txtAdd = document.getElementById('texto');

console.log('Registros:');

function obtenerCadena() {
    // Obtener la cadena de texto
    const texto = document.getElementById('texto');

    // Obtener el valor de n mediante la repeticion de rg en la cadena
    let n = texto.value.match('([r][g]){1,}') ? texto.value.match('([r][g]){1,}')[0].length / 2 : 0;

    if (n == 0) {
        n = 1;
    }

    // Establecer el patron
    const patron = new RegExp(`^${i}{1}(${w}){${n}}${i}{1}(${wi}){${n * 2}}(${j}){2}$`);

    if (texto == null || texto.value == '') 
    {
        // Texto vacio
        swal('Ups!', 'El campo de texto esta vacio', 'warning');
    } 
    else 
    {
        // Validar que la cadena es valida
        if (patron.test(texto.value)) {
            console.log(`${texto.value} es una cadena valida`);
            swal('Cadena valida', 'Registro guardado exitosamente en consola', 'success');
        } else {
            console.log(`${texto.value} no es una cadena valida`);
            swal('Cadena invalida', 'Registro guardado exitosamente en consola', 'warning');
        }
        document.getElementById('texto').value = '';
    }
}

function agregar(txt) {
    txtAdd.value += txt;
}

function agregarExp() {
    const L = document.getElementById('L').value;


    if (L <= 0 || L == NaN) 
    {
        // Numero menor que 1
        swal('Ups!','La longitud debe ser mayor o igual a 1', 'warning');
    } 
    else if (L >= 100) 
    {
        // Numero mayor que 100
        swal('Ups!','La longitud debe ser menor a 100', 'warning');
    }
    else 
    {
        txtAdd.value += '01359';
        for (let i = 0; i < L; i++) {
            txtAdd.value += 'rg';
        }
        txtAdd.value += '01359';
        for (let i = 0; i < L; i++) {
            txtAdd.value += 'grgr';
        }
        txtAdd.value += 'julianjulian';
        document.getElementById('L').value = '';
        swal('Genial!','Cadena generada exitosamente', 'success');
    }
}