function validarTexto() {
    let campoTexto = document.querySelector('#area-text-input');
    let valorCampo = campoTexto.value
    // Expressão regular para verificar se há letras maiúsculas, acentos ou caracteres especiais 
    // let validador = /[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÇ!@#$%^&*()_+={}\[\]:;<>,.?~´`0-9\\/]/;
    let validador = /[^a-z\s]/;

    if (validador.test(valorCampo)) {
        alert(`erro: O texto não deve conter letras Maiúsculas, Acentos ou Caracteres Especiais!`);
        campoTexto.value = '';
        console.log(campoTexto);
    }   
}

function validaVazio(texto) {
    if (texto == '' || texto == ' ') {
        return true;
    }
    return false;
}

function criptografar() {
    let textoEntrada = document.querySelector('#area-text-input');
    let textoSaida = document.querySelector('#area-text-output');
    let user_text = textoEntrada.value.replaceAll(/\s+/g, ' ').trim();
    console.log(user_text);

    if (validaVazio(user_text)) {
        alert('Precisa de alguma palavra para criptografar');
        return true   
    }

    let criptografado = user_text.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
    console.log(criptografado);
   
    textoSaida.value = criptografado;   
}

function descriptografar() {
    let textoEntrada = document.querySelector('#area-text-input');
    let textoSaida = document.querySelector('#area-text-output');
    let user_text = textoSaida.value;
    console.log(user_text);

    if (validaVazio(user_text)) {
        alert('Precisa de alguma palavra para descriptografar');
        return true   
    }
    
    let descriptografado = user_text.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    console.log(descriptografado);

    textoEntrada.value = descriptografado;
}

async function copiarTexto() {
    let campoSaida = document.querySelector('#area-text-output');
    let textoCampoSaida = campoSaida.value;
    
    await navigator.clipboard.writeText(textoCampoSaida);
    campoSaida.value = '';
}

/*
const validaVazio = () => {

}
 */
