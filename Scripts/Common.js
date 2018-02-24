//请求连接参数分割
$UrlParameter = function(_key) {
    //debugger
    var _url = window.location.search;
    //如果不等于空表示存在参数
    if (_url.length != 0) {
        //清除问号字符
        _params = _url.replace('?', "").split('&');
        for (var i = 0; _p = _params[i]; i++) {
            _params[_p.split('=')[0]] = _p.split('=')[1];
        }
        //是否返回固定参数值
        if (_key && _key.length != 0) {
            return _params[_key];
        }
        //否则返回对象集合
        return _params;
    }
}

//字符编码
function reCode(s) {
    //特殊字符
    s = s.replace(/\+/g, "%2B");   // +
    s = s.replace(/\=/g, "%3D");   // =    
    s = s.replace(/\!/g, "%21");   // !
    s = s.replace(/\'/g, "%27");   // '
    s = s.replace(/\(/g, "%28");   // (
    s = s.replace(/\)/g, "%29");   // )
    s = s.replace(/\*/g, "%2A");   // *
    s = s.replace(/\-/g, "%2D");   // -
    s = s.replace(/\./g, "%2E");   // .
    s = s.replace(/\_/g, "%5F");   // _
    s = s.replace(/\~/g, "%7E");   // ~
    //中文编码
    s = encodeURIComponent(s);
    s = encodeURIComponent(s);
    return s;
}

//字符解码
function deCode(s) {
    return decodeURIComponent(decodeURIComponent(s));
}



//占位符  alert("{0}|{1}".format(1,2));
String.prototype.format = function() {
    if (arguments.length == 0) return this;
    for (var s = this, i = 0; i < arguments.length; i++)
        s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
    return s;
};




$(function() {

    function stop() {
        return false;
    }
    document.oncontextmenu = stop;
});