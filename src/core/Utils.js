/**
 * 判断是否是手机端
 * @export
 * @returns
 */
export function isMobile() {
    const sUserAgent = navigator.userAgent.toLowerCase(),
        bIsIpad = sUserAgent.match(/ipad/i) == 'ipad',
        bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os',
        bIsMidp = sUserAgent.match(/midp/i) == 'midp',
        bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4',
        bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb',
        bIsAndroid = sUserAgent.match(/android/i) == 'android',
        bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce',
        bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile',
        bIsWebview = sUserAgent.match(/webview/i) == 'webview';
    return (
        bIsIpad ||
        bIsIphoneOs ||
        bIsMidp ||
        bIsUc7 ||
        bIsUc ||
        bIsAndroid ||
        bIsCE ||
        bIsWM ||
        bIsWebview
    );
}

export function getQueryStrings(url) {
    const ps = {};
    const u = url || window.location.href;
    if (u.indexOf('?') != -1) {
        const s = u.split('?')[1];
        const strs = s.split('&');
        for (let i = 0; i < strs.length; i ++) {
            const p = strs[i].split('=');
            ps[p[0]] = decodeURIComponent(p[1]);
        }
    }
    return ps;
}

/**
 * 获取url参数值
 * @export
 * @param {any} name
 * @returns
 */
export function getQueryString(name) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    let r;
    try{
        r = window.location.href.split('?')[1].match(reg); //window.location.search.substr(1).match(reg);
    }catch(err){
        r = null;
    }
    if (r != null) {
        return (r[2]);
    }
    return null;
}

export function escapeHtml(string) {
    const matchHtmlRegExp = /["'&<>]/;
    const str = `${string}`;
    const match = matchHtmlRegExp.exec(str);

    if (!match) {
        return str;
    }

    let escape;
    let html = '';
    let index = 0;
    let lastIndex = 0;

    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
        case 34: // "
            escape = '&quot;';
            break;
        case 38: // &
            escape = '&amp;';
            break;
        case 39: // '
            escape = '&#39;';
            break;
        case 60: // <
            escape = '&lt;';
            break;
        case 62: // >
            escape = '&gt;';
            break;
        default:
            continue;
        }

        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }

        lastIndex = index + 1;
        html += escape;
    }

    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

/**
 * 计算缩略图的高度
 * @export
 * @param {any} originWidth
 * @param {any} originHeight
 * @param {any} containerWidth
 * @returns
 */
export function getThumbnailHeight(originWidth, originHeight, containerWidth) {
    //图片原始宽小于容器宽则使用原始高度，反之则等比例计算缩略图高度
    const height = parseInt(containerWidth * originHeight / originWidth);
    return (originWidth < containerWidth) ? originHeight : height;
}

export function inView() {
    const y = (window.pageYOffset) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    return (window.innerHeight + y) >= document.body.offsetHeight - 30;
}

export function initDevMode() {
    const SHAKE_THRESHOLD = 8000;
    let lastUpdate = 0;
    let x;
    let y;
    let z;
    let lastX = 0;
    let lastY = 0;
    let lastZ = 0;
    let devMode = false;
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', (eventData) => {
            const acceleration = eventData.accelerationIncludingGravity;
            const curTime = new Date().getTime();
            if ((curTime - lastUpdate) > 100) {
                const diffTime = curTime - lastUpdate;
                lastUpdate = curTime;

                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;
                const speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;
                if (speed > SHAKE_THRESHOLD && !devMode) {
                    if (confirm('开启开发者模式？')) {
                        document.getElementById('__vconsole').style.display = 'block';
                        devMode = true;
                    }
                }
                lastX = x;
                lastY = y;
                lastZ = z;
            }
        }, false);
    }
    window.addEventListener('touchmove', (event) => {
        if (event.targetTouches.length > 1 && !devMode) {
            if (confirm('开启开发者模式？')) {
                document.getElementById('__vconsole').style.display = 'block';
                devMode = true;
            }
        }
    });
}