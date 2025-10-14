const whatsappBtn = document.querySelector('.whatsapp-float');
const contatoBotoes = document.querySelectorAll('.agendar-button');

let visiveis = new Set();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            visiveis.add(entry.target);
        } else {
            visiveis.delete(entry.target);
        }
    });

    // Se nenhum botão "Entrar em contato" estiver visível, mostra o WhatsApp
    if (visiveis.size === 0) {
        whatsappBtn.classList.remove('hidden');
    } else {
        whatsappBtn.classList.add('hidden');
    }
});

// Observar todos os botões
contatoBotoes.forEach((btn) => observer.observe(btn));
