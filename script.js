const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i= 0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada =stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i= 0; i <matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada =stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

const btn = document.querySelector('.btn');
const msgCopiada = document.querySelector('.mensagem');

btn.addEventListener('click', copiaTexto);

function copiaTexto() {

    navigator.clipboard.writeText(msgCopiada.value)
    btn.classList.add('ativo');
    btn.innerText = 'Mensagem Copiada';

}

setInterval(()=>{
    btn.classList.remove('ativo');
    btn.innerText = 'Copiar Texto';
}, 8000)
