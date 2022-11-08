let nav = (function () {
    const iconsHouse = document.getElementById('iconsHouse');
    const minMenu = document.getElementById('minMenu');
    const menuBar = document.getElementById('menu');
    const links = document.getElementsByClassName('link');
    const searchIcon = document.getElementById('search');
    const closeIcon = document.getElementById('close');
    const form = document.getElementById('form');


    menuBar.addEventListener('click', e => {
        if (minMenu.style.height == '50vh') {
            minMenu.style.height = '0vh';
            for (let i = 0; i < links.length; i++) {
                links[i].style.display = "none";
            }
        }else {
            minMenu.style.height = '50vh';
            for (let i = 5; i => links.length; i--) {
                if(i == -1) {break;}
                links[i].style.display = "inline";
            }
        }
    })

    closeIcon.style.display = 'none';
    searchIcon.addEventListener('click', e => {
        form.style.height = '100vh';
        closeIcon.style.display = 'block';
        closeIcon.addEventListener('click', e => {
            form.style.height = '0vh';
            (form.style.height == '0vh') ? closeIcon.style.display = 'none' :  closeIcon.style.display = 'block';
        })
    })
}) ()