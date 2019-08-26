window.addEventListener('DOMContentLoaded', function () {

    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0],
        wrap = document.getElementsByClassName('wrap')[0],
        slider_item = document.getElementsByClassName('slider-item'),
        slider_dots = document.getElementsByClassName('slider-dots')[0],
        dot = document.getElementsByClassName('dot');


    function hiedSlider(a) {
        for (let i = a; i < slider_item.length; i++){
            slider_item[i].classList.add('hide');
            slider_item[i].classList.remove('show');
        }
    }

    hiedSlider(1);

    function hideTabContent(a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')){
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click',function(event) {
        let target = event.target;
        if (target.className === 'info-header-tab'){
            for (let i = 0; i < tab.length; i++){
                if (target === tab[i]){
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    slider_dots.addEventListener('click', function (event) {
        let target = event.target;
        if (target.className === 'dot'){
            for (let i = 0; i < dot.length; i++){
                if (target === dot[i]){
                    alert('точка');
                }
            }
        }
    })

});