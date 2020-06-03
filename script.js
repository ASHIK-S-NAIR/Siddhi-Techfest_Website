// function openFunction(){
//     document.getElementById('menu').style.width = "300px";
// }

// function closeFunction(){
//     document.getElementById('menu').style.width = "0px";
// }

const menuBtn =document.querySelector('.menu-btn');
let menuOpen =false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen=true;
        document.getElementById('menu').style.width = "350px";
    }else{
        menuBtn.classList.remove('open');
        menuOpen=false;
        document.getElementById('menu').style.width = "0px";
    }
});