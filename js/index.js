function diaDaSemanaPorExtenso() {
    // Cria um array com os dias da semana por extenso
    const diasDaSemana = [
        "Domingo",    // 0
        "Segunda-feira", // 1
        "Terça-feira",   // 2
        "Quarta-feira",  // 3
        "Quinta-feira",  // 4
        "Sexta-feira",   // 5
        "Sábado"         // 6
    ];

    // Pega o dia da semana atual (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
    const dataAtual = new Date();
    const diaSemanaNumero = dataAtual.getDay();

    // Retorna o nome do dia por extenso
    return diasDaSemana[diaSemanaNumero];
}

var dia = diaDaSemanaPorExtenso()

var titulo_principal = document.querySelectorAll(".titulo_principal");

titulo_principal[0].innerText = `${dia} é dia de Burguer!!!`