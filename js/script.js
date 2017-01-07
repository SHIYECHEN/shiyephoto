function addStyle() {
    var tagA = document.getElementsByTagName("a");
    for (var i = 0; i < tagA.length; i++) {
        var getclass = tagA[i].getAttribute('class');
        if (getclass == "link") {
            var links = document.getElementsByClassName(getclass);
            for (var j = 0, l = links.length; j < l; j++) {
                links[j].onclick = function() {
                    render(this);
                    removeActive(links, 'active');
                    this.classList.add('active');
                    // this.style.color = "black";
                }
            }
        }
    }
}

function removeActive(els, klass) {
    for (var i = 0, l = els.length; i < l; i++) {
        els[i].classList.remove(klass);
    }
}

function creatP(el) {
    var div = document.createElement("div");
    var p = document.createElement("p");
    p.innerHTML = "这是一个记忆盒子，这里存放一些不经意的瞬间，<br/>希望在多年以后，朋友们在这里看到某一张照片之后能够重新找回丢失记忆；<br /><br />这里的大部分照片由我拍摄，<br />另外一些是由朋友拍摄，我会增加一个列表存放他们的照片;<br />";
    div.appendChild(p);
    var p1 = document.createElement("p");
    p1.innerHTML = "<br />ShikChan<br /> Mail：chikchann(at)gmail.com<br /><br />HeYan<br/>WeChat：78946855";
    p1.setAttribute("id","contact");
    div.appendChild(p1);
    el.appendChild(div);
}

function render(el) {
    var images = {
        shanghai: [{
            title: '上海淮海路',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E4%B8%8A%E6%B5%B7%E6%B7%AE%E6%B5%B7%E8%B7%AF.jpg'
        }],
        beijing: [{
            title: '华丰胡同',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E5%8D%8E%E4%B8%B0%E8%83%A1%E5%90%8C.jpg'
        }],
        suzhou: [{
            title: '苏州',
            url: 'http://odj13j5fo.bkt.clouddn.com/%E8%8B%8F%E5%B7%9E.jpg'
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
        heyanGallery: [{
            title: '故宫',
            url: 'WechatIMG96.jpeg'
        }]
    }
    var content = document.getElementById('content');
    //获得data_target属性的值
    var category = el.getAttribute('data-target');
    var tpl = '';
    if (category == 'about') {
        content.innerHTML = '';
        creatP(content);
        return;
    }
    var categoryImages = images[category];
    for (var i = 0, l = categoryImages.length; i < l; i++) {
        tpl += '<img src="' + categoryImages[i].url + '">';
    }
    content.innerHTML = tpl;
}

function toggleDisplay() {
    var tagA = document.getElementsByTagName("a");
    for (var i = 0; i < tagA.length; i++) {
        var navId = tagA[i].getAttribute("id");
        if (navId == "city" || navId == "personal") {
            var nav = document.getElementById(navId);
            if (nav.innerHTML == "city") {
                nav.onclick = function() {
                    var nav_city = document.getElementById("nav_city");
                    var displayProperty = window.getComputedStyle(nav_city, null).getPropertyValue('display');
                    displayProperty === 'block' ? nav_city.style.display = 'none' : nav_city.style.display = 'block';
                }
            }
            if (nav.innerHTML == "personal") {
                nav.onclick = function() {
                    var nav_personal = document.getElementById("nav_personal");
                    var displayProperty = window.getComputedStyle(nav_personal, null).getPropertyValue('display');
                    displayProperty === 'block' ? nav_personal.style.display = 'none' : nav_personal.style.display = 'block';
                }
            }
        }
    }
}

// window.onload = addStyle();
// window.onload = toggleDisplay();
addLoadEvent(addStyle);
addLoadEvent(toggleDisplay);
