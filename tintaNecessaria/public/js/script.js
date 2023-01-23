function validaItens(campos){

    if(camposVazios()){
        validaTamanhoParede();
        validaPortaseJanelas();
        validaTamanhoPorta();
        calculaQntdTinta();
    }
}
numeroPortas =0;
numeroJanelas = 0;
//incrementar portas ou janelas
function increment(index) {

    let type = event.target.getAttribute('data-type');
    escolhido  = document.getElementById("counter-"+type+index).textContent;
    escolhido = Number(escolhido) +1;
    document.getElementById("counter-"+type+index).textContent = escolhido;
}
//decrementar portas ou janelas
function decrement(index) {

    let type = event.target.getAttribute('data-type');
    let escolhido = document.getElementById("counter-"+type+index);
    escolhido  = document.getElementById("counter-"+type+index).textContent;

    escolhido = Number(escolhido);
    if (escolhido > 0 ) {
        escolhido = Number(escolhido) -1;
    }
    document.getElementById("counter-"+type+index).textContent = escolhido;
}

//verifica campos vazios
function camposVazios(){

    for(index = 1; index < 5; index++){

        altura = document.getElementById("altura"+[index]).value;
        largura = document.getElementById("largura"+[index]).value;

        if (altura == "") {
            alert("O campo altura"+[index] + " está vazio");
            return false;
        }else if (largura == "") {
            alert("O campo largura"+[index] + " está vazio");
           return false;
        }
        return true;
    }

}
//valida tamanho da parede
function validaTamanhoParede() {

    for (var i = 1; i <= 4; i++) {

        var largura = document.getElementById("largura" + i).value;
        var altura = document.getElementById("altura" + i).value;

        if (largura < 1 || largura > 50 || altura < 1 || altura > 50) {
            alert("As medidas da parede " + i + " devem estar entre 1 e 50 metros quadrados.");
            return false;
        }
    }
    return true;
}

// Função para validar as medidas das janelas e portas
function validaPortaseJanelas() {

    for (var i = 1; i <= 4; i++) {
        var largura = document.getElementById("largura" + i).value;
        var altura = document.getElementById("altura" + i).value;
        var areaJanela = document.getElementById("counter-janela" + i).innerHTML * 2 * 1.2;
        var areaPorta = document.getElementById("counter-porta" + i).innerHTML * 0.8 * 1.9;
        if (areaJanela + areaPorta > 0.5 * largura * altura) {
            alert("A área total das janelas e portas da parede " + i + " não pode ser maior que 50% da área da parede.");
            return false;
        }
    }
return true;
}

// Função para validar a altura das paredes com portas
function validaTamanhoPorta() {
    for (var i = 1; i <= 4; i++) {
        var altura = document.getElementById("altura" + i).value;
        var portas = document.getElementById("counter-porta" + i).innerHTML;
        if (portas > 0 && altura < 2.3) {
            alert("A altura da parede " + i + " com porta deve ser no mínimo 2.3 metros.");
            return false;
        }
    }
return true;
}

// Função para calcular a quantidade de tinta necessária
function calculaQntdTinta() {

    var totalArea = 0;

    for (var i = 1; i <= 4; i++) {
        var largura = document.getElementById("largura" + i).value;
        var altura = document.getElementById("altura" + i).value;
        var areaJAnela = document.getElementById("counter-janela" + i).innerHTML * 2 * 1.2;
        var areaPorta = document.getElementById("counter-porta" + i).innerHTML * 0.8 * 1.9;
        var areaParede = ((largura * altura) - areaJAnela )- areaPorta;
        totalArea += areaParede;
        metrosQuadrados = totalArea;
    }
    sugestaoLatas(metrosQuadrados);
}

// Função para sugerir os tamanhos de latas de tinta
function sugestaoLatas(metrosQuadrados) {

    var lata18L = 0;
    var lata3_6L = 0;
    var lata2_5L = 0;
    var lata0_5L = 0;
    var QntdDeTinta = Math.ceil( metrosQuadrados / 5);
    litrosNecessarios = QntdDeTinta;

    // Enquanto houver tinta a ser comprada
    while(Math.ceil(QntdDeTinta) > 0) {

        if(QntdDeTinta >= 18) {
            lata18L++;
            QntdDeTinta -= 18;

        } else if(QntdDeTinta >= 3.6) {
            lata3_6L++;
            QntdDeTinta -= 3.6;

        } else if(QntdDeTinta >= 2.5) {
            lata2_5L++;
            QntdDeTinta -= 2.5;

        } else{
            lata0_5L++;
            QntdDeTinta -= 0.5;

        }
    }
    mensagemUsuario(lata18L,lata3_6L,lata2_5L,lata0_5L,litrosNecessarios,metrosQuadrados);

}
//monta mensagem para o usuário
function mensagemUsuario(lata18L,lata3_6L,lata2_5L,lata0_5L){

    frase = 'Para pintar sua casa de '+metrosQuadrados+' metros quadrados Serão necessarios '+litrosNecessarios+"L de tinta!</br>";
    lata18L > 0 ?frase = frase +"Sugiro que use "+lata18L+" latas de 18 L </br>"  : frase;
    lata3_6L > 0 ?frase = frase +"Sugiro que use "+lata3_6L+" latas de 3.6 L </br>"  : frase;
    lata2_5L > 0 ?frase = frase +"Sugiro que use "+lata2_5L+" latas de 2.5 L </br>"  : frase;
    lata0_5L > 0 ?frase = frase +"Sugiro que use "+lata0_5L+" latas de 0.5 L </br>"  : frase;
    openModal(frase);
}

//abre o Modal
function openModal(frase) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.getElementById("frase").innerHTML =frase;
}
//fecha o Modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

