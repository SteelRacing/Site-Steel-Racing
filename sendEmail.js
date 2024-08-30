document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("YOUR_USER_ID"); // Substitua "YOUR_USER_ID" pelo seu User ID do EmailJS
});

function sendEmail(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const params = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
        .then(function(response) {
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contact-form").reset(); // Limpa o formulário após o envio
        }, function(error) {
            alert("Falha no envio da mensagem. Por favor, tente novamente.");
        });
}

let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const productWidth = document.querySelector('.product').offsetWidth + 20; // largura + margem
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const totalProducts = document.querySelectorAll('.product').length;
    const maxIndex = totalProducts - Math.floor(containerWidth / productWidth);

    currentIndex += direction;

    // Garantir que o índice atual não ultrapasse os limites
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    carousel.style.transform = `translateX(-${currentIndex * productWidth}px)`;
}