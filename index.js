const btnMobile = document.getElementById('btn-mobile')

const menuImg = document.getElementById('menu-img')
menuImg.classList.add('menu')


function toggleMenu(){
    const nav = document.getElementById('nav-btn')
    nav.classList.toggle('active')
    
}

function toggleImg(){
    if(menuImg.className === 'menu'){
        menuImg.src='./img/close.png'
        menuImg.classList.remove('menu')
        menuImg.classList.add('close')
    }else if(menuImg.className === 'close'){
        menuImg.src='./img/menu.png'
        menuImg.classList.remove('close')
        menuImg.classList.add('menu')
    }
}


btnMobile.addEventListener('click', toggleMenu)
menuImg.addEventListener('click', toggleImg)
