//CODIGO QUE FAZ A SESSAO ESCOLHIDA FICAR EM NEGRITO

/*
let sections = docment.querySelectorAll('section');
let navLinks = docment.querySelectorAll('header nav a');

window.onscroll = () => [
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //ativando a navegação
            navLinks.forEach(links => {
                navLinks.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    })
]
*/