
const chave = 3
const mensagem ='Marcelo'.toLowerCase();
const encrypted = ''

function cifraDeCesar(mensagem,chave) {    
    let novoTexto = ''
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    //mensagem = mensagem.toLowerCase()    

    for(const char of mensagem){
        let novaLetra = char
        const letraIndiceAlfabeto = alfabeto.indexOf(char)
        if (letraIndiceAlfabeto >= 0){
            novaLetra = alfabeto.charAt((letraIndiceAlfabeto + chave)%26)
            novoTexto += novaLetra
        }
    }

    if(chave < 0) return cifraDeCesar(mensagem, chave + 26)

    return novoTexto
    
  }

  console.log(encrypted)
  //console.log(cifraDeCesar(encrypted, - chave))