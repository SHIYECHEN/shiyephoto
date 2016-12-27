var links = document.getElementsByClassName('link');

var city = document.getElementById("city");
city.onclick = function () {
    var nav_city = document.getElementById("nav_city");
    toggleDisplay(nav_city);
}
var personal = document.getElementById("personal");
personal.onclick = function () {
    var nav_personal = document.getElementById("nav_personal");
    toggleDisplay(nav_personal);
}

for (var i = 0, l = links.length; i < l; i++) {
    links[i].onclick = function () {
        render(this);
        removeActive(links, 'active');
        this.classList.add('active');
    }
}

links[0].onclick();

function render(el) {
    var images = {
        shanghai: [
            {
                title: '上海淮海路',
                url: 'http://odj13j5fo.bkt.clouddn.com/%E4%B8%8A%E6%B5%B7%E6%B7%AE%E6%B5%B7%E8%B7%AF.jpg'
            }
        ],
        beijing: [
            {
                title: '华丰胡同',
                url: 'http://odj13j5fo.bkt.clouddn.com/%E5%8D%8E%E4%B8%B0%E8%83%A1%E5%90%8C.jpg'
            }
        ],
        suzhou: [
            {
                title: '苏州',
                url: 'http://odj13j5fo.bkt.clouddn.com/%E8%8B%8F%E5%B7%9E.jpg'
            }
        ],
        tianjin: [
            {
                title: '武清站',
                url: 'http://odj13j5fo.bkt.clouddn.com/%E6%AD%A6%E6%B8%85%E7%AB%992.jpg'
            }
        ],
        people: [
            {
                title: '老王',
                url: 'http://odj13j5fo.bkt.clouddn.com/%E8%80%81%E7%8E%8B.jpg'
            }
        ],
        life: [
            {
                title: '老王',
                url: 'http://odj13j5fo.bkt.clouddn.com/%E8%80%81%E7%8E%8B.jpg'
            },
            {
                title: '脚丫',
                url: 'http://odj13j5fo.bkt.clouddn.com/%E8%84%9A%E4%B8%AB.jpg'
            }
        ]
    }
    var content = document.getElementById('content');
    var category = el.getAttribute('data-target');
    var categoryImages = images[category];
    var tpl = '';
    for (var i = 0, l = categoryImages.length; i < l; i++) {
        tpl += '<img src="' + categoryImages[i].url + '">';
    }
    content.innerHTML = tpl;
}

function toggleDisplay(el) {
    var displayProperty = window.getComputedStyle(el, null).getPropertyValue('display');
    displayProperty === 'block' ? el.style.display = 'none' : el.style.display = 'block';
}

function removeActive(els, klass) {
    for (var i = 0, l = els.length; i < l; i++) {
        els[i].classList.remove(klass);
    }
}