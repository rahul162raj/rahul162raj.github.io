const slideCollection = [
    {
        img: 'defence.png',
        caption: 'Defence',
        color: '#FF8F20'
    },
    {
        img: 'sps.png',
        caption: 'Space Technology',
        color: '#01326B'
    },
    {
        img: 'auto_mobile.png',
        caption: 'Automobile ',
        color: '#095BFF'
    },
    {
        img: 'education.png',
        caption: 'Education',
        color: '#04DCEC'
    },
    {
        img: 'ind.png',
        caption: 'Industrial Training',
        color: '#0568BE'
    }
]

const text = document.getElementById('i-text')
const img = document.getElementById('i-img')

let index = 0;

const stringRender = (text, selector, gap) => {
    let template = "";
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            if (text[i] == '|')
                template += '<br>';
            else
                template += text[i];

            selector.innerHTML = template;
        }, i * gap);
    }
}

const LoadSlide = () => {
    stringRender(slideCollection[index].caption, text, 350 / slideCollection[index].caption.length)
    text.style.background = slideCollection[index].color
    document.body.style.setProperty('--color-bars', slideCollection[index].color)
    img.src = `assets/${slideCollection[index].img}`
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 550
    })
        .add({
            targets: 'em',
            opacity: [0, 1],
            marginLeft:0,
            delay: 100,
            easing: 'easeOutExpo',
        })
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    })
        .add({
            targets: 'img',
            opacity: [0, 1],
            translateX: [-80, 0],
            delay: 100,
            easing: 'easeOutExpo',
        })
    //exit animation
    setTimeout(() => {
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
        })
            .add({
                targets: 'img',
                opacity: [1, 0],
                translateX: [0, 120],
                delay: 100,
                easing: 'easeOutExpo',
            })
    }, 2600)
    setTimeout(() => {
            anime.timeline({
                easing: 'easeOutExpo',
                duration: 450
            })
                .add({
                    targets: 'em',
                    opacity: [1,0],
                    marginLeft:[0, 50],
                    delay: 200,
                    easing: 'easeOutExpo',
                })
    }, 2400)
}

const initPage = () => {
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 550
    })
        .add({
            targets: '.banner',
            opacity: [0, 1],
            translateX: [-180, 0],
            delay: 200,
            easing: 'easeOutExpo',
        })
        .add({
            targets: '.right-aside',
            opacity: [0, 1],
            translateY: [100, 0],
            easing: 'easeOutExpo',
        })
        .add({
            targets: 'nav a',
            opacity: [0, 1],
            scale: [0.6, 1],
            duration: 500,
            delay: (el, i) => i * 80
        })
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    })
        .add({
            targets: 'h2, h3',
            opacity: [0, 1],
            translateX: [-200, 0],
            duration: 500,
            delay: (el, i) => i * 80
        })
        .add({
            targets: '.left-aside',
            opacity: [0, 1],
            height: ['80%', '100%'],
            easing: 'easeOutExpo',
        })
    LoadSlide();
}


setInterval(() => {
    console.log('changing to..', index)
    index++;
    if (index === slideCollection.length) index = 0
    LoadSlide()
}, 3000)

document.addEventListener('DOMContentLoaded', initPage);

