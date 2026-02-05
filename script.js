
const trends = [
    { text: "UniCV", link: "https://unicv.edu.br/" },
    { text: "Central de Carreiras", link: "https://unicv.edu.br/central-de-carreiras/" },
    { text: "Central de Estágio Obrigatório", link: "https://unicv.edu.br/central-de-estagio-obrigatorio/" },
    { text: "Bolsas e Benefícios", link: "https://unicv.edu.br/bolsas-e-beneficios-2/" },
    { text: "Internacionalização", link: "https://unicv.edu.br/internacionalizacao/" },
    { text: "Biblioteca", link: "https://unicv.edu.br/biblioteca/" },
    { text: "IC - Iniciação Científica", link: "https://unicv.edu.br/ic/" },
    { text: "NAP - Núcleo Aplicado de Psicologia", link: "https://unicv.edu.br/nac-nap/" },
    { text: "Smart Space", link: "https://unicv.edu.br/smart-space/" },
    { text: "Ouvidoria", link: "https://ouvidoria.unicv.edu.br/formulario?_gl=1*1y1w1vh*_gcl_au*OTg5NTMzOTgyLjE3NjU5MDgzOTE.*_ga*MTc4MjAxMDQ3MS4xNzY1NDgzMzE1*_ga_K5GX4K7VEW*czE3NzAzMzM3MzAkbzU1JGcxJHQxNzcwMzMzNzYzJGoyNyRsMCRoMTEwMzY4MjQzNg.." },
    { text: "Extensão Universitária", link: "https://unicv.edu.br/extensao-universitaria/" },
    { text: "Responsabilidade Social", link: "https://unicv.edu.br/responsabilidade-social/" },
    { text: "Rádio", link: "https://unicv.edu.br/radio-unicv/" },
    { text: "UniCV Pay", link: "https://www.cooperbank.com.br/proposta-bank/unicv" },
    { text: "Portal do aluno", link: "https://sistema.unicv.edu.br/aluno-v2/login" },
    { text: "Indique um amigo", link: "https://unicv.edu.br/amigo-indica-amigo/" },
    { text: "Horário escolar", link: "https://unicv.edu.br/horario-das-aulas/" },
    { text: "Biblioteca", link: "https://unicv.edu.br/biblioteca/" },
    { text: "Calendário Acadêmico", link: "https://unicv.edu.br/calendario-academico/" },
    { text: "UniCV Pay", link: "https://www.cooperbank.com.br/proposta-bank/unicv" },
    { text: "Portal do aluno", link: "https://sistema.unicv.edu.br/aluno-v2/login" },
    { text: "Indique um amigo", link: "https://unicv.edu.br/amigo-indica-amigo/" },
    { text: "Horário escolar", link: "https://unicv.edu.br/horario-das-aulas/" },
    { text: "Biblioteca", link: "https://unicv.edu.br/biblioteca/" },
    { text: "Calendário Acadêmico", link: "https://unicv.edu.br/calendario-academico/" }
];

const colors = [
    "#14FF6A",
    "#00DA50",
    "#A76D11",
    "#F09300",
    "#8B07FF"
];

const grid = document.getElementById("grid");

function typeText(element, text, speed = 40) {

    element.textContent = "";
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

function getRandomColor(exclude) {
    let color;
    do {
        color = colors[Math.floor(Math.random() * colors.length)];
    } while (color === exclude);

    return color;
}

function createGrid() {

    trends.forEach((trend) => {

        const card = document.createElement("div");
        card.className = "card";

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        card.style.background = randomColor;

        typeText(card, trend.text);

        card.addEventListener("click", () => {
            window.open(trend.link, "_blank");
        });

        card.dataset.text = trend.text;
        card.dataset.link = trend.link;

        grid.appendChild(card);
    });
}

function changeOneCard() {

    const cards = document.querySelectorAll(".card");
    const randomCard = cards[Math.floor(Math.random() * cards.length)];

    const currentColor = randomCard.style.background;
    randomCard.style.background = getRandomColor(currentColor);

    typeText(randomCard, randomCard.dataset.text);
}

createGrid();
setInterval(changeOneCard, 7000);