const form = document.getElementById('compare');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');

    const campoUm = parseFloat(campoA.value);
    const campoDois = parseFloat(campoB.value);

    const mensagemPositiva = document.querySelector('.mensagemPositiva');
    const mensagemNegativa = document.querySelector('.mensagemNegativa');

    if (campoUm < campoDois) {
        mensagemPositiva.innerHTML = `Parabéns!  Campo A com ${campoA} é menor que o número do Campo B: ${campoB}!`;
        mensagemPositiva.style.display = 'block';
        mensagemNegativa.style.display = 'none';

        campoA.value = '';
        campoB.value = '';
    } else {
        mensagemNegativa.innerHTML = `Infelizmente o número do Campo A precisa ser menor que o número do Campo B. Tente outra vez.`;
        mensagemPositiva.style.display = 'none';
        mensagemNegativa.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }
});