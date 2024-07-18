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
const bg_video = document.querySelector('video')
const contents_a_m = contents_a[3]
console.log(contents_a[0].children.length, contents_a[3].children.length)
for(let i of contents_a){
    if (i.children.length == 4){
        i.addEventListener('mouseover',(e)=>{
            e.preventDefault();
            i.children[2].style.opacity = '0'; //hover아이콘 숨기기
            i.children[3].style.opacity = '1'; //썸네일 img 나타나기
            i.children[3].style.right = '-70px'; //썸네일 img 오른쪽으로 등장
            i.style.backgroundColor = '#0c0c0c';
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
    }else {
        i.addEventListener('mouseover',()=>{
            i.children[2].style.opacity = '0'; //hover아이콘 숨기기
            i.children[0].style.color = '#fff'
            i.children[1].style.color = '#fff'
            bg_video.style.opacity = '1';
            bg_video.play();
            contents_a_m.children[0].style.color = '#fff';
            contents_a_m.children[1].style.color = '#fff';
        })
        i.addEventListener('mouseout',()=>{
            i.children[2].style.opacity = '1';
            i.children[0].style.color = '#0c0c0c'
            i.children[1].style.color = '#0c0c0c'
            bg_video.style.opacity = '';
            bg_video.pause();
            bg_video.currentTime = 0;
            contents_a_m.children[0].style.color = '#0c0c0c';
            contents_a_m.children[1].style.color = '#0c0c0c';
        })
    }
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
    console.log(swiper1.realIndex)
    switch (swiper1.realIndex) {
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

// detail popup
// 1. 팝업 숨기기(big_bg)
// 2. swiper img 클릭 시
// 3. 팝업 보이기
const big_bg = document.querySelector('.big_bg')
const detail_img = document.querySelector('.detail p')
const big_img = document.querySelector('.big_bg img')
big_bg.style.display = 'none'
detail_img.addEventListener('click',(e)=>{
    // 클릭한 대상 관련에 a가 있다면 스크롤 위로 올라가는 기능 막기
    e.preventDefault()
    // 큰 이미지 부모 보이기
    big_bg.style.display = 'block';
    // 팝업 실행 시 body 스크롤 막기
    document.body.style.overflow = 'hidden'; //팝업 안에서만 스크롤 되도록 body에 overflow 설정
    big_bg.children[0].scrollTo(0,0); //스크롤 초기화 (항상 맨위에 위치하도록)
})

// 팝업 출력 시 팝업 닫기
big_bg.addEventListener('click',()=>{
    big_bg.style.display = 'none';
    document.body.style.overflow = '';
})

//nav scroll trigger
gsap.to('nav a',{
    scrollTrigger:'.contents',
    duration:0.5,//1초
    delay:0.2,
    opacity:0,
})