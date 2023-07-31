// // loading

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');

    loader.classList.add('loader-hidden');
    
    //  
    loader.addEventListener('transitionend', ()=> {
        document.body.removeChild(loader);
       
    })
    
})

// mobile nav 
function show_nav(){
let nav_mob=document.querySelector('.header-nav');
// nav_mob.addEventListener('click',()=>{
    nav_mob.classList.toggle('active');
    console.log('nav clicked');
// })
}
// search 
const searchid = document.getElementById('searchid');
const card = document.querySelectorAll('.card')
// console.log(ingred[0].textContent.includes('tomato') +" ingredients");
// const ingred=document.querySelectorAll(".ingred-wrapper");
var list_final = [], temp_list = [], ingred_temp_list = [], list_ingred = [];
searchid.addEventListener('input', () => {
    let search = searchid.value;
    if (search != "") {
        // console.log(search);
        let i = 3;
        var final_list = {};
        //  final_list[i]={};
        let count = 0;
        let ingred_count = 0;
        card.forEach((e) => {
            // console.log(search + " search")
            lower_search = search.toLowerCase();
            let ingred = e.querySelector('.ingred-list').innerText.toLowerCase().includes(lower_search);
            // console.log(e.querySelector('.ingred-list').innerText);
            let text = e.querySelector('h3').innerText;
            lower_text = text.toLowerCase();
            let result = lower_text.includes(lower_search)
            if (result) {
                let id = e.id;
                temp_list[count] = id;
                count++;
            } else if (ingred) {
                let id = e.id;
                ingred_temp_list[ingred_count] = id;
                ingred_count++;
            }
        })
        // console.log(ingred_temp_list + " temp list")
        list_final = [...new Set(temp_list)]
        list_ingred = [...new Set(ingred_temp_list)]
        // console.log(list_ingred + " final list");

        show_search(list_final);
        show_ingred_search(list_ingred);

    }
    list_final = []; temp_list = []; ingred_temp_list = []; list_ingred = [];
})
function show_search(list_final) {
    // console.log(final_list[0].text+" object")
    // console.log(list_final + ' show')
    const search_list = document.getElementById('search-list');
    search_list.innerHTML = '';
    // console.log(search_list)
    list_final.forEach(e => {
        let card = document.querySelector("#" + e);
        let src = card.querySelector('img').src;
        let alt = card.querySelector('img').alt;
        let xrs = alt.replaceAll(' ', '-').toLowerCase();
        // console.log(xrs);
        let text = card.querySelector('h3').innerText;
        // console.log(text + ' heading')
        let div = document.createElement('div')
        div.classList.add('search-items');
        div.innerHTML = `
    <a href="${xrs}.html">
    <img src="${src}" alt="${alt}">
    <h3>${text}</h3> 
    </a>
    <hr>
    `
        search_list.prepend(div)
    })
}
function show_ingred_search(list_ingred) {
    // console.log(final_list[0].text+" object")
    // console.log(list_ingred + ' ingredient list items')
    // console.log(list_ingred + ' show')
    const ingred_search_list = document.getElementById('ingred-search-list');
    // console.log(ingred_search_list)
    ingred_search_list.innerHTML = '';
    list_ingred.forEach(e => {
        let card = document.querySelector("#" + e);
        let src = card.querySelector('img').src;
        let alt = card.querySelector('img').alt;
        let xrs = alt.replaceAll(' ', '-').toLowerCase();
        // console.log(xrs);
        let text = card.querySelector('h3').innerText;
        // console.log(text + ' heading')
        let div = document.createElement('div')
        div.classList.add('search-items');
        div.innerHTML = `
    <a href="${xrs}.html">
    <img src="${src}" alt="${alt}">
    <h3>${text}</h3> 
    </a>
    <hr>
    `
        ingred_search_list.prepend(div)
    })
}

// login and sign up
function other_option(exe){
    // const login_wrapper=document.querySelectorAll('.login-wrapper');
    const username=document.querySelector('.username');
    const button_log=document.querySelectorAll('.button-log');
    const sub_page_heading=document.querySelectorAll('.sub-page-heading');
    const other_option=document.querySelectorAll('.other-option');
    // const other_option=document.querySelectorAll('.other-option');
    
        username.classList.toggle('active');
        // console.log(button_log)
        
        
            // regis.classList.toggle('active');
            other_option.forEach(e=>{e.classList.toggle('active');})
            sub_page_heading.forEach(e=>{e.classList.toggle('active');})
            button_log.forEach(e=>{e.classList.toggle('active');})
    

}
// navigation menu 
const navbox = document.querySelector('.nav-box')
navbox.addEventListener('click', () => {
    navbox.classList.toggle('active')
})

// search area
// function search_area(){
const search_area = document.querySelector('.search-area');
const search_btn = document.querySelectorAll('.search-btn');
const search_img = document.querySelectorAll('.search-img');
const header_login = document.querySelector('.header-login');
const header_right = document.querySelector('.header-right');
search_btn.forEach(ex=>{ 
    ex.addEventListener('click', () => {
    search_area.classList.toggle('active');
    header_login.classList.toggle('active');
    header_right.classList.toggle('active');
    search_img.forEach(e => {

        e.classList.toggle('active');
        searchid.focus();   
        // console.log(searchid)
    })
})
})
//ingredient show or hide
const ingred_wrapper = document.querySelectorAll('.ingred-wrapper')
ingred_wrapper.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('active');
    })
})
//scroll triger
show();
function show() {
    const header = document.querySelector('header')
    // console.log(header)
    const ani = document.querySelectorAll('.ani');
    if (window.scrollY > 50) {

        header.classList.add('fixed');
    }
    else {

        header.classList.remove('fixed')
    }
    ani.forEach(sec => {
        let windowheight = window.innerHeight;
        let sectop = sec.getBoundingClientRect().top;

        if (sectop < windowheight) {
            sec.classList.add('animate');


        }
        else {
            sec.classList.remove('animate');
        }

    })
}
window.onscroll = () => {

    show();
}





// scroll triger ends 

const title = document.querySelectorAll('.title');
const imag = document.querySelectorAll('.imag');

for (let i = 0; i < imag.length; i++) {
    imag[i].innerHTML += "<div class='pop'></div>"
    let alt = title[i].getAttribute('alt');
    // console.log(alt)
    imag[i].lastElementChild.innerHTML = `${alt}`;
    // console.log(imag[i].lastElementChild)
}






// slide show

let content = document.querySelector('.menu-container')
let move = document.querySelectorAll('.move');
const slide = document.querySelectorAll('.myslide')
let width = content.querySelector('.myslide').offsetWidth;
// console.log(slide)
let count = -1;


slide.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;

    }
)

function prev() {
    if (count < -2 && count < 0) {
        count = 0;
        // console.log(count)
    } else {
        count--;
    }
    // count--;
    slideImage();
}
const next = () => {
    if (count >= 0) {
        count = -3;
        // console.log("next")
    } else {
        count++;
    }
    // count++;
    slideImage();
}
const slideImage = () => {
    slide.forEach(
        (slide) => {
            slide.style.transform = `translateX(${count * 100}%)`;
            // console.log(count)
        }
    )
}

