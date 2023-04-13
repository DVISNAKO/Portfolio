window.addEventListener('DOMContentLoaded', function () {

    let tabsContent = document.querySelectorAll('.tabcontent');
    let tabBtns = document.querySelectorAll('.tabheader__item');
    let parrent = document.querySelector('.tabheader__items');

    function hidenTab() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        })
    }



    function showTabs(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');

        tabBtns.forEach(item => {
            item.classList.remove('active-tab');
        })

        tabBtns[i].classList.add('active-tab');
    }



    hidenTab();
    showTabs();

    parrent.addEventListener('click', function (event) {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabBtns.forEach((item, i) => {
                if (target == item) {
                    hidenTab();
                    showTabs(i);
                }
            });
        }
    });
});