

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
    p1.innerHTML = "<div class='contai2 '><div class='about'><img src='http://odj13j5fo.bkt.clouddn.com/me.jpeg'><p><a href='http://weibo.com/chens0529'>Weibo</a> <a href='https://www.instagram.com/ShikChann'>Instagram</a></p><p>WeChat: ShikChan</p><p>Mail：chikchann(at)gmail.com</p></div></div>";el.appendChild(p1);
}
// function render(el) {
//     var images = {
//         shanghai: [{
//             title: 'shanghai1',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai1.jpg'
//         },{
//             title: 'shanghai2',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai2.jpg'
//         },{
//             title: 'shanghai3',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai3.jpg'
//         },{
//             title: 'shanghai4',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai4.jpg'
//         },{
//             title: 'shanghai5',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai5.jpg'
//         },{
//             title: 'shanghai6',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai6.jpg'
//         },{
//             title: 'shanghai7',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai7.jpg'
//         },{
//             title: 'shanghai8',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai8.jpg'
//         },{
//             title: 'shanghai9',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai9.jpg'
//         },{
//             title: 'shanghai10',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai10.jpg'
//         },{
//             title: 'shanghai11',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai11.jpg'
//         },{
//             title: 'shanghai12',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai12.jpg'
//         },{
//             title: 'shanghai13',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai13.jpg'
//         },{
//             title: 'shanghai14',
//             url: 'http://odj13j5fo.bkt.clouddn.com/shanghai14.jpg'
//         }, ],
//         beijing: [{
//             title: 'beijing1',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing1.jpg'
//         },{
//             title: 'beijing2',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing2.jpg'
//         },{
//             title: 'beijing3',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing3.jpg'
//         },{
//             title: 'beijing4',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing4.jpg'
//         },{
//             title: 'beijing5',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing5.jpg'
//         },{
//             title: 'beijing6',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing6.jpg'
//         },{
//             title: 'beijing7',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing7.jpg'
//         },{
//             title: 'beijing8',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing8.jpg'
//         },{
//             title: 'beijing9',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing9.jpg'
//         },{
//             title: 'beijing10',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing10.jpg'
//         },{
//             title: 'beijing11',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing11.jpg'
//         },{
//             title: 'beijing12',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing12.jpg'
//         },{
//             title: 'beijing13',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing13.jpg'
//         },{
//             title: 'beijing14',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing14.jpg'
//         },{
//             title: 'beijing17',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing17.jpg'
//         },{
//             title: 'beijing18',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing18.jpg'
//         },{
//             title: 'beijing19',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing19.jpg'
//         },{
//             title: 'beijing20',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing20.jpg'
//         },{
//             title: 'beijing21',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing21.jpg'
//         },{
//             title: 'beijing22',
//             url: 'http://odj13j5fo.bkt.clouddn.com/beijing22.jpg'
//         }, ],
//         suzhou: [{
//             title: 'suzhou1',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suzhou1.JPG'
//         },{
//             title: 'suzhou2',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suzhou2.jpg'
//         },{
//             title: 'suzhou3',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suzhou3.jpg'
//         },{
//             title: 'suzhou4',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suzhou4.jpg'
//         },{
//             title: 'suzhou5',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suzhou5.jpg'
//         },{
//             title: 'suzhou6',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suzhou6.jpg'
//         },{
//             title: 'suzhou7',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suzhou7.jpg'
//         },{
//             title: 'suzhou8',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suzhou8.jpg'
//         },{
//             title: 'suzhou9',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suzhou9.jpg'
//         },{
//             title: 'suzhou10',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suzhou10.jpg'
//         },{
//             title: 'suzhou11',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suzhou11.jpg'
//         },],
//         tianjin: [{
//             title: 'tianjin1',
//             url: 'http://odj13j5fo.bkt.clouddn.com/tianjin1.jpg'
//         }],
//         people: [{
//             title: 'people1',
//             url: 'http://odj13j5fo.bkt.clouddn.com/people1.jpg'
//         },{
//             title: 'people3',
//             url: 'http://odj13j5fo.bkt.clouddn.com/people3.jpg'
//         },{
//             title: 'people4',
//             url: 'http://odj13j5fo.bkt.clouddn.com/people4.jpg'
//         },{
//             title: 'people5',
//             url: 'http://odj13j5fo.bkt.clouddn.com/people5.jpg'
//         },{
//             title: 'people6',
//             url: 'http://odj13j5fo.bkt.clouddn.com/people6.jpg'
//         },{
//             title: 'people7',
//             url: 'http://odj13j5fo.bkt.clouddn.com/people7.jpg'
//         },{
//             title: 'people8',
//             url: 'http://odj13j5fo.bkt.clouddn.com/people8.jpg'
//         },{
//             title: 'people9',
//             url: 'http://odj13j5fo.bkt.clouddn.com/people9.jpg'
//         },{
//             title: 'people10',
//             url: 'http://odj13j5fo.bkt.clouddn.com/people10.jpg'
//         },{
//             title: 'people11',
//             url: 'http://odj13j5fo.bkt.clouddn.com/people11.jpg'
//         },{
//             title: 'people12',
//             url: 'http://odj13j5fo.bkt.clouddn.com/people12.jpg'
//         },],
//         life: [{
//             title: 'life2',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life2.jpg'
//         },{
//             title: 'life1',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life1.jpg'
//         },{
//             title: 'life3',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life3.jpg'
//         },{
//             title: 'life4',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life4.jpg'
//         },{
//             title: 'life5',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life5.jpg'
//         },{
//             title: 'life6',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life6.jpg'
//         },{
//             title: 'life7',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life7.jpg'
//         },{
//             title: 'life8',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life8.jpg'
//         },{
//             title: 'life9',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life9.jpg'
//         },{
//             title: 'life10',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life10.jpg'
//         },{
//             title: 'life11',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life11.jpg'
//         },{
//             title: 'life12',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life12.jpg'
//         },{
//             title: 'life13',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life13.jpg'
//         },{
//             title: 'life14',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life14.jpg'
//         },{
//             title: 'life15',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life15.jpg'
//         },{
//             title: 'life16',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life16.jpg'
//         },{
//             title: 'life17',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life17.jpg'
//         },{
//             title: 'life18',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life18.jpg'
//         },{
//             title: 'life19',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life19.jpg'
//         },{
//             title: 'life20',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life20.jpg'
//         },{
//             title: 'life21',
//             url: 'http://odj13j5fo.bkt.clouddn.com/life21.jpg'
//         },],
//         heyangallery: [{
//             title: '故宫',
//             url: 'http://odj13j5fo.bkt.clouddn.com/WechatIMG96.jpeg'
//         }],
//         Suizhou: [{
//             title: 'suizhou1',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suizhou1.jpg'
//         },{
//             title: 'suizhou2',
//             url: 'http://odj13j5fo.bkt.clouddn.com/suizhou2.jpg'
//         }],
//         Kunshan: [{
//             title: 'kunshan1',
//             url: 'http://odj13j5fo.bkt.clouddn.com/kunshan1.jpg'
//         },{
//             title: 'kunshan2',
//             url: 'http://odj13j5fo.bkt.clouddn.com/kunshan2.jpg'
//         },{
//             title: 'kunshan3',
//             url: 'http://odj13j5fo.bkt.clouddn.com/kunshan3.jpg'
//         },{
//             title: 'kunshan4',
//             url: 'http://odj13j5fo.bkt.clouddn.com/kunshan4.jpg'
//         },{
//             title: 'kunshan5',
//             url: 'http://odj13j5fo.bkt.clouddn.com/kunshan5.jpg'
//         },{
//             title: 'kunshan6',
//             url: 'http://odj13j5fo.bkt.clouddn.com/kunshan6.jpg'
//         },{
//             title: 'kunshan7',
//             url: 'http://odj13j5fo.bkt.clouddn.com/kunshan7.jpg'
//         },{
//             title: 'kunshan8',
//             url: 'http://odj13j5fo.bkt.clouddn.com/kunshan8.jpg'
//         },],
//         Wuxi: [{
//             title: 'wuxi1',
//             url: 'http://odj13j5fo.bkt.clouddn.com/wuxi1.jpg'
//         },{
//             title: 'wuxi2',
//             url: 'http://odj13j5fo.bkt.clouddn.com/wuxi2.jpg'
//         },]
//     }
//     var contenter = document.getElementById('contenter');
//     //获得data_target属性的值
//     var category = el.getAttribute('data-target');
//     var tpl = '';
//     if (category == 'about') {
//         contenter.innerHTML = '';
//         creatP(contenter);
//         return;
//     }
//     var categoryImages = images[category];
//     console.log(categoryImages);
//     for (var i = 0, l = categoryImages.length; i < l; i++) {
//         tpl += '<div class="contai"><img src="' + categoryImages[i].url + '"></div>';
//     }
//     contenter.innerHTML = tpl;
// }
function render(el) {
    var images = {
        shanghai: [],
        beijing: [],
        suzhou: [],
        tianjin: [],
        people: [],
        life: [],
        heyangallery: [],
        Suizhou: [],
        Kunshan: [],
        Wuxi: []
    }
window.onload = changeLi();
