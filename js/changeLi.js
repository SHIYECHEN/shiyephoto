

function changeLi() {
    var getLi = document.getElementsByTagName("li");
    var getUl = document.getElementById("navbar-collapse");

    for (var i = 0; i < getLi.length; i++) {
        getLi[i].onclick = function() {
            removeClass(getLi, "active");
            getUl.classList.remove("in");
            this.setAttribute("class", "active");
            render(this.querySelector('a'));

        }
    }
}

function removeClass(els, kliss) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList.remove(kliss);
    }
}
function creatP(el) {
    var p1 = document.createElement("p");
    p1.innerHTML = "<div class='contai2 '><div class='about'><img src='me.jpeg'><p><a href='http://weibo.com/chens0529'>Weibo</a> <a href='https://www.instagram.com/ShikChann'>Instagram</a></p><p>WeChat: ShikChan</p><p>Mail：chikchann(at)gmail.com</p></div></div>";el.appendChild(p1);
}
function render(el) {
    var images = {
        shanghai: [{
            title: '上海淮海路',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E4%B8%8A%E6%B5%B7%E6%B7%AE%E6%B5%B7%E8%B7%AF.jpg'
        }, ],
        beijing: [{
            title: '华丰胡同',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E5%8D%8E%E4%B8%B0%E8%83%A1%E5%90%8C.jpg'
        }, {
            title: '上海淮海路',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E4%B8%8A%E6%B5%B7%E6%B7%AE%E6%B5%B7%E8%B7%AF.jpg'
        }, {
            title: '上海淮海路',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E4%B8%8A%E6%B5%B7%E6%B7%AE%E6%B5%B7%E8%B7%AF.jpg'
        }, {
            title: '上海淮海路',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E4%B8%8A%E6%B5%B7%E6%B7%AE%E6%B5%B7%E8%B7%AF.jpg'
        }, {
            title: '上海淮海路',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E4%B8%8A%E6%B5%B7%E6%B7%AE%E6%B5%B7%E8%B7%AF.jpg'
        }, {
            title: '上海淮海路',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E4%B8%8A%E6%B5%B7%E6%B7%AE%E6%B5%B7%E8%B7%AF.jpg'
        }, ],
        suzhou: [{
            title: '苏州',
            url: 'DSCF0536.JPG'
        }],
        tianjin: [{
            title: '武清站',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E6%AD%A6%E6%B8%85%E7%AB%992.jpg'
        }],
        people: [{
            title: '老王',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E8%80%81%E7%8E%8B.jpg'
        }],
        life: [{
            title: '老王',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E8%80%81%E7%8E%8B.jpg'
        }],
        heyangallery: [{
            title: '故宫',
            url: 'WechatIMG96.jpeg'
        }]
    }
    var contenter = document.getElementById('contenter');
    //获得data_target属性的值
    var category = el.getAttribute('data-target');
    var tpl = '';
    if (category == 'about') {
        contenter.innerHTML = '';
        creatP(contenter);
        return;
    }
    var categoryImages = images[category];
    console.log(categoryImages);
    for (var i = 0, l = categoryImages.length; i < l; i++) {
        tpl += '<div class="contai"><img src="' + categoryImages[i].url + '"></div>';
    }
    contenter.innerHTML = tpl;
}
window.onload = changeLi();
