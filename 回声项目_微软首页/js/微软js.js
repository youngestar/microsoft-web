'use strict';

// header

// 注释
let tooltipElem;

document.addEventListener('mouseover',(event) => {
    let target = event.target;
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;
    tooltipElem = document.createElement('div');
    tooltipElem.classList.add('tooltip');
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();
    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth)/2;
    if (left < 0) left = 0;
    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
      }


    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
});

document.addEventListener('mouseout',() => {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
});

// 点击时拓展信息
let showInformationButton=document.getElementById('showInformationButton');
let moreInformation=document.getElementById('moreInformation');
let searchButton=document.getElementById('searchButton');
let searchCancelButton=document.getElementById('searchCancel');
let searchInput=document.getElementById('searchInput');
let body=document.body;
let Information_showing=0;
let search_showing=0;

// 更多信息展示
function showMoreInformation(event) {
    let moreInformation=document.getElementById("moreInformation");
    moreInformation.classList.toggle('hidden');
    showInformationButton.classList.toggle('changeColor');
    if (Information_showing===1) {
        Information_showing=0;
    }
    else {
        Information_showing=1
    }
    event.stopPropagation();
}

// 搜索框
function search(event) {
    let user=document.querySelector('.user');
    let left=document.querySelector('.left');
    let right=document.querySelector('.right');
    let search=document.getElementById('search');
    user.hidden =!user.hidden;
    left.hidden =!left.hidden;
    right.hidden =!right.hidden;
    search.classList.toggle('hidden');
    searchCancel.classList.toggle('hidden');
    if (search_showing===1) {
        search_showing=0;
    }
    else {
        search_showing=1;
    }
    event.stopPropagation()
}

// 停止冒泡
function searchInputerStop(event) {
    event.stopPropagation()
}

function moreInformationStop(event) {
    event.stopPropagation();
}

// 点击空白处关闭窗口
function cancelall(event) {
    if (Information_showing==1) {
        showMoreInformation(event);
    }
    if (search_showing==1) {
        search(event);
    }

    if (order_showing==1) {
        showOrder(event);
    }

    if (moreoptions_showing==1) {
        showMoreOptions(event);
    }
}

showInformationButton.addEventListener('click',showMoreInformation);
searchButton.addEventListener('click',search);
body.addEventListener('click',cancelall);
searchInput.addEventListener('click',searchInputerStop);
moreInformation.addEventListener('click',moreInformationStop);

// 多媒体查询部分

// 更多

let moreoptionsButton = document.getElementById('moreoptionsButton');
let moreoptions_showing = 0;

function showMoreOptions(event) {
    moreoptionsButton.classList.toggle('moreoptionsButton');
    if (moreoptions_showing===1) {
        moreoptions_showing=0;
    }
    else {
        moreoptions_showing=1;
    }
    event.stopPropagation();
}

moreoptionsButton.addEventListener('click',showMoreOptions);

// 菜单

let orderButton = document.getElementById('orderButton');
let order = document.getElementById('order');
let order_showing = 0;
let rjButton = document.getElementById('rj');
let pcButton = document.getElementById('pc');
let ylButton = document.getElementById('yl');
let qyButton = document.getElementById('qy');
let itButton = document.getElementById('it');
let qtButton = document.getElementById('qt');

function orderchange(buttonName,event) {
    let changerName = buttonName + '_show';
    let changer = document.getElementById(changerName);
    changer.classList.toggle('hidden');
    event.stopPropagation();
}

function showOrder(event) {
    order.classList.toggle('hidden');

    if (order_showing===1) {
        orderButton.innerHTML = '<svg t="1733036393386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1934" width="25" height="25"><path d="M174.999001 336.693984l667.247651 0c12.485309 0 22.514491-10.029182 22.514491-22.514491s-10.029182-22.514491-22.514491-22.514491L174.999001 291.665001c-12.485309 0-22.514491 10.029182-22.514491 22.514491S162.513692 336.693984 174.999001 336.693984z" p-id="1935" fill="#707070"></path><path d="M173.975615 516.809914l667.247651 0c12.485309 0 22.514491-10.029182 22.514491-22.514491s-10.029182-22.514491-22.514491-22.514491L173.975615 471.780931c-12.485309 0-22.514491 10.029182-22.514491 22.514491S161.490306 516.809914 173.975615 516.809914z" p-id="1936" fill="#707070"></path><path d="M842.246652 647.803318 174.999001 647.803318c-12.485309 0-22.514491 10.029182-22.514491 22.514491s10.029182 22.514491 22.514491 22.514491l667.247651 0c12.485309 0 22.514491-10.029182 22.514491-22.514491S854.731961 647.803318 842.246652 647.803318z" p-id="1937" fill="#707070"></path></svg>';
        order_showing=0;
    }
    else {
        orderButton.innerHTML = '<svg  style="margin-top:3px;" t="1733042166855" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4305" width="18" height="18"><path d="M97.1 91.2c11.3-11.3 29.8-11.3 41.1 0l782.2 782.2c11.3 11.3 11.3 29.8 0 41.1s-29.8 11.3-41.1 0L97.1 132.2c-11.3-11.3-11.3-29.7 0-41z" fill="#515151" p-id="4306"></path><path d="M920.4 91.1c11.3 11.3 11.3 29.8 0 41.1L138.2 914.5c-11.3 11.3-29.8 11.3-41.1 0s-11.3-29.8 0-41.1L879.3 91.1c11.4-11.3 29.8-11.3 41.1 0z" fill="#515151" p-id="4307"></path></svg>';
        order_showing=1
    }
    event.stopPropagation();
}

orderButton.addEventListener('click',showOrder);
rjButton.addEventListener('click',(event) => orderchange('rj',event));
pcButton.addEventListener('click',(event) => orderchange('pc',event));
ylButton.addEventListener('click',(event) => orderchange('yl',event));
qyButton.addEventListener('click',(event) => orderchange('qy',event));
itButton.addEventListener('click',(event) => orderchange('it',event));
qtButton.addEventListener('click',(event) => orderchange('qt',event));

//banner
let bannerLeft = 0;
let bannerTimer;
let bannerRunning = 1;
let bannerStop = 0;
let bannerImage = document.getElementById('bannerImage');
let bannerListEsico = document.getElementById('bannerList').getElementsByTagName('li');
let bannerList = document.getElementById('bannerList');
let bannerListShowing;
let bannerPrevButton = document.getElementById('banner').querySelector('.prev');
let bannerNextButton = document.getElementById('banner').querySelector('.next');
let bannerstopButton = document.getElementById('banner').querySelector('.stop');

bannerRun();

// 轮播图自滚动函数
function bannerRun() {
    if (bannerRunning === 1 && bannerStop === 0) {
    clearTimeout(bannerTimer);
    let body = document.body;
    if (bannerLeft <= -(2*body.offsetWidth/window.innerWidth*100)) {
        bannerLeft = 0;
    }
    let bannerListShowing = Math.floor(-bannerLeft*window.innerWidth/100 / body.offsetWidth);
    icoChange(bannerListShowing);
    bannerImage.style.marginLeft = bannerLeft + 'vw';
    // body.offsetWidth 不一定能被整除,所以设置为小于
    let imgStop = (-bannerLeft % (body.offsetWidth/window.innerWidth*100) < 0.5) ? 2400 : 10;
    bannerLeft -= 0.5;
    bannerTimer = setTimeout(bannerRun, imgStop);
}
}

// 图片定位函数
function imgchange(n) {
    let body = document.body;
    let lt = -(n*body.offsetWidth/window.innerWidth*100);
    bannerImage.style.marginLeft = lt + 'vw';
    bannerLeft = lt;
}

//圆点定位函数
function icoChange(m) {
    for(let index = 0; index < bannerListEsico.length; index++) {
        bannerListEsico[index].style.backgroundColor = '';
    }
    if (m < bannerListEsico.length) {
        bannerListEsico[m].style.backgroundColor = '#fff';
    }
}

// 前滚动函数
bannerPrevButton.addEventListener('click', () => {
    let body = document.body;
    let prevgo = Math.floor(-bannerLeft*window.innerWidth/100 / body.offsetWidth) - 1;
    if (prevgo === -1) {
        prevgo = 1;
    }
    imgchange(prevgo);
});

// 后滚动函数
bannerNextButton.addEventListener('click', () => {
    let body = document.body;
    let nextgo = Math.floor(-bannerLeft*window.innerWidth/100 / body.offsetWidth) + 1;
    if (nextgo === 2) {
        nextgo = 0;
    }
    imgchange(nextgo);
});

// 暂停轮播函数
bannerstopButton.addEventListener('click',() => {
    if (bannerStop == 0) {
        bannerstopButton.style.backgroundColor = 'red';
        bannerStop = 1;
    }
    else {
        bannerstopButton.style.backgroundColor = '';
        bannerStop = 0;
        bannerRun();
    }
})

// 点击时圆点与图片切换
bannerList.addEventListener('click', (event) => {
    let tg = event.target;
    let ico = tg.innerHTML - 1;
    if (isNaN(ico) === true) {
        return;
    }
    else{
        imgchange(ico);
        imgchange(ico);
    }
})

// 鼠标在时停止轮播
bannerImage.addEventListener('mouseover', () => {
    bannerRunning = 0;
})

// 鼠标移走继续轮播
bannerImage.addEventListener('mouseout', () => {
    bannerRunning = 1;
    bannerRun();
})

// up-to-top button 

// 回到页首按钮 渐变
let pgupButton = document.getElementById('pgup');
let documentHei = document.documentElement.scrollHeight;
let ugupHidden = 1;

function pgupButtonAnimatiom() {
    if (document.body.offsetWidth >= 540 ) {
        pgupButton.style.position = 'sticky';
        let pageY = document.documentElement.scrollTop;   
        clearTimeout(pgupTimer);
        var pgupTimer = setTimeout(() => {
        if (pageY/documentHei >= 0.3 && ugupHidden === 1) {
                pgupButton.classList.remove('hidden');
                pgupButton.classList.add('emerge');
                pgupButton.classList.remove('fade');
                ugupHidden = 0;
        }
        if (pageY/documentHei < 0.3 && ugupHidden === 0) {
                pgupButton.classList.add('fade');
                setTimeout(() => {
                    pgupButton.classList.add('hidden');
                    pgupButton.classList.remove('emerge');
                    ugupHidden = 1;
                },350)
        }
    },400)
    }

    else {
        pgupButton.style.position = 'relative';
        if (ugupHidden === 1) {
            pgupButton.classList.remove('hidden');
            ugupHidden = 0;
    }
    }
};

window.addEventListener('scroll',pgupButtonAnimatiom);

// 回到顶部
pgupButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    });
});