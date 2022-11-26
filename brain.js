let nav = (function () {
    let i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16;

    const minMenu = document.getElementById('minMenu');
    const menuBar = document.getElementById('menu');
    const links = document.getElementsByClassName('link');
    const searchIcon = document.getElementById('search');
    const closeIcon = document.getElementById('close');
    const form = document.getElementById('form');
    i1 = document.getElementById('i1');
    i2 = document.getElementById('i2');
    i3 = document.getElementById('i3');
    i4 = document.getElementById('i4');
    i5 = document.getElementById('i5');
    i6 = document.getElementById('i6');
    i7 = document.getElementById('i7');
    i8 = document.getElementById('i8');
    i9 = document.getElementById('i9');
    i10 = document.getElementById('i10');
    i11 = document.getElementById('i11');
    i12 = document.getElementById('i12');
    i13 = document.getElementById('i13');
    i14 = document.getElementById('i14');
    i15 = document.getElementById('i15');
    i16 = document.getElementById('i16');


    menuBar.addEventListener('click', e => {
        if (minMenu.style.height == '50vh') {
            menuBar.classList.add('fa-bars');
            menuBar.classList.remove('fa-times');
            minMenu.style.height = '0vh';
            for (let i = 0; i < links.length; i++) {
                links[i].style.display = "none";
            }
        }else {
            menuBar.classList.add('fa-times');
            menuBar.classList.remove('fa-bars');
            minMenu.style.height = '50vh';
            for (let i = 5; i => links.length; i--) {
                if(i == -1) {break;}
                links[i].style.display = "inline";
                links[i].addEventListener('click', e => {
                    menuBar.classList.add('fa-bars');
                    menuBar.classList.remove('fa-times');
                    minMenu.style.height = '0vh';
                    minMenu.style.height = '0vh';
                    for (let i = 0; i < links.length; i++) {
                        links[i].style.display = "none";
                    }
                });
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
    
    i1.style.color = "var(--black)";
    i2.style.color = "var(--black)";
    i3.style.color = "var(--black)";
    i4.style.color = "var(--black)";
    i5.style.color = "var(--black)";
    i6.style.color = "var(--black)";
    i7.style.color = "var(--black)";
    i8.style.color = "var(--black)";
    i9.style.color = "var(--black)";
    i10.style.color = "var(--black)";
    i11.style.color = "var(--black)";
    i12.style.color = "var(--black)";
    i13.style.color = "var(--black)";
    i14.style.color = "var(--black)";
    i15.style.color = "var(--black)";
    i16.style.color = "var(--black)";

    likes(i1);
    likes(i2);
    likes(i3);
    likes(i4);
    likes(i5);
    likes(i6);
    likes(i7);
    likes1(i8);
    likes1(i9);
    likes1(i10);
    likes1(i11);
    likes1(i12);
    likes1(i13);
    likes1(i14);
    likes1(i15);
    likes1(i16);

    function likes(par){
        par.addEventListener('click', () => {
            if (par.style.color == "var(--black)") {
                par.style.color = "var(--green)";
                par.style.backgroundColor = "#fff";
                par.style.backgroundColor = "var(--normal)";
            } else {
                par.style.color = "var(--black)";
            }
        });
    }

    function likes1(par){
        par.addEventListener('click', () => {
            if (par.style.color == "var(--black)") {
                par.style.color = "var(--green)";
            } else {
                par.style.color = "var(--black)";
            }
        });
    }

}) ()