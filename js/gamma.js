var fixedNav = document.querySelector('#fixedNav')
document.addEventListener('scroll', function (){
    var y = window.scrollY
    if (y > 10) {
        fixedNav.classList.add('gamma-light')
    }else {
        fixedNav.classList.remove('gamma-light')
    }
})