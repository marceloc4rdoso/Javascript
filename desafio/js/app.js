function criptografa() {
    const chave = 3;
    const mensagem = document.getElementById("texto_entrada").value.toLowerCase();
    let novoTexto = '';
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    for (const letra of mensagem) {
        let novaLetra = letra;
        const letraIndiceAlfabeto = alfabeto.indexOf(letra);
        if (letraIndiceAlfabeto >= 0) {
            novaLetra = alfabeto.charAt((letraIndiceAlfabeto + chave) % 26);
            novoTexto += novaLetra;
        }
    }

    document.getElementById("texto_saida").value = novoTexto;
    document.getElementById("texto_entrada").value = ''; // Limpa o texto original
}

function descriptografa() {
    const chave = 3;
    const textoCriptografado = document.getElementById("texto_saida").value.toLowerCase();
    let textoDescriptografado = '';
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    for (const letra of textoCriptografado) {
        const letraIndiceAlfabeto = alfabeto.indexOf(letra);
        if (letraIndiceAlfabeto >= 0) {
            const novaLetraIndice = (letraIndiceAlfabeto - chave + 26) % 26;
            const novaLetra = alfabeto.charAt(novaLetraIndice);
            textoDescriptografado += novaLetra;
        } else {
            // Se não for uma letra do alfabeto, mantenha a mesma letra no texto descriptografado
            textoDescriptografado += letra;
        }
    }

    document.getElementById("texto_entrada").value = textoDescriptografado;
    document.getElementById("texto_saida").value = ''; // Limpa o texto criptografado
}

function copiarTexto() {
    const textoProcessado = document.getElementById("texto_saida").value;
    navigator.clipboard.writeText(textoProcessado)
        .then(() => alert("Texto copiado com sucesso!"));
}