//menu
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const overlay = $('#overlay')
const menu = document.querySelector('.navbar__links');
const menuButton = document.querySelector('.navbar__icons');

//đóng mở m enu trên mobile

menuButton.addEventListener('click', ()=> {
    menu.classList.toggle('navbar__open');
    menuButton.classList.toggle('open');
    overlay.classList.toggle('show');

});

overlay.addEventListener('click', ()=> {
    menu.classList.toggle('navbar__open');
    menuButton.classList.toggle('open');
    overlay.classList.toggle('show');
})



//TabUi

const tabs = $$('.tab-item')
const panes = $$('.tab-pane') 

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')
line.style.left = tabActive.offsetleft + 'px'
line.style.width = tabActive.offsetWidth + 'px'



tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function() {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'
        this.classList.add('active')
        pane.classList.add('active')
    }
})

// card_item check 

const card_items = $$('.card_item')

card_items.forEach((item, index) => {
   item.onclick = function() {
    item.classList.toggle('check')
   }
})

