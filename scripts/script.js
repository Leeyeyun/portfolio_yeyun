//nav hover 시 글씨 나타나기
const nav = document.querySelector('nav')
const nav_a = nav.querySelectorAll('nav > a')
for(let i of nav_a){
    i.addEventListener('mouseover',(e)=>{
        e.preventDefault();
        console.log(i.children[0])
        i.children[0].style.marginRight = '0';
        i.children[0].style.opacity = '1'
    })
    i.addEventListener('mouseout',(e)=>{
        e.preventDefault();
        i.children[0].style.marginRight = '-24px';
        i.children[0].style.opacity = '0'
    })
}

//contents hover 애니메이션
const contents_wrap = document.querySelector('.contents_wrap')
const contents_a = contents_wrap.querySelectorAll('.contents_wrap > a')
console.log(contents_a[0].children)
for(let i of contents_a){
    i.addEventListener('mouseover',(e)=>{
        e.preventDefault();
        i.children[2].style.opacity = '0'; //hover아이콘 숨기기
        i.children[3].style.opacity = '1'; //썸네일 img 나타나기
        i.children[3].style.right = '-70px'; //썸네일 img 오른쪽으로 등장
        i.style.backgroundColor = '#0c0c0c';
        console.log(i.children[0], i.children[1])
        i.children[0].style.color = '#fff'
        i.children[1].style.color = '#fff'
    })
    i.addEventListener('mouseout',(e)=>{
        e.preventDefault();
        i.children[2].style.opacity = '1';
        i.children[3].style.opacity = '0';
        i.children[3].style.right = '0';
        i.style.backgroundColor = '';
        i.children[0].style.color = '#0c0c0c'
        i.children[1].style.color = '#0c0c0c'
    })
}

//swiper ux
const swiper1 = new Swiper('.ux-slide',{
    autoplay:{},
    loop:true,
    speed:'500',
})

const bg = document.querySelector('#app_bg');
swiper1.on('slideChange',function(){
    console.log('change')
    console.log(swiper1.activeIndex)
    switch (swiper1.activeIndex) {
        case 0:
            bg.style.backgroundColor = "#3474EF";
            break;
        case 1:
            bg.style.backgroundColor = "#7064FF";
            break;
        case 2:
            bg.style.backgroundColor = "#006EFF";
            break;
    }
})