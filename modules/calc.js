const result = document.querySelector('.result');

let sex, height, weight, age, ratio;

if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
} else {
    sex = 'woman';
    localStorage.setItem('sex', 'woman');
}

if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
} else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
}


function initLocalSetting(selector, active1) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
        elem.classList.remove(active1);
        if (elem.getAttribute('id') === localStorage.getItem('sex')) {
            elem.classList.add(active1);
        }
        if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            elem.classList.add(active1);
        }
    })
}



initLocalSetting('#gender button', 'active1');
initLocalSetting('.calculating button', 'active1');

function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
        result.textContent = '_____';
        return;
    }
    if (sex === 'woman') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
};

calcTotal();

function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));
            }

            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);

            calcTotal();
        });
    })
}

getStaticInformation('#gender button', 'active1');
getStaticInformation('.calculating button', 'active1');

function getDynamic(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {

        if (input.value.match(/\D/g)) {
            input.style.background = 'red'
        } else {
            input.style.background = 'white';
        }

        switch (input.getAttribute('id')) {
            case 'height':
                height = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break;
            case 'age':
                age = +input.value;
                break;
        }
        calcTotal();
    });

}

getDynamic('#height');
getDynamic('#weight');
getDynamic('#age');

const tyepd = new Typed('.mult-text', {
    strings: ['Calculate your calories for day?'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


