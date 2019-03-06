//获取dom对象--byid
function dom(id){
	return document.getElementById(id);
};

//随机颜色,op透明度，不写就1
function randDomColor(op){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgba("+r+","+g+","+b+","+(op||1)+")";
};

//给元素添加样式列表 
function css(dom,opts){
	for(var key in opts){
		var val = opts[key];
		if(typeof val=="number"){
		val+="px";
	}
	dom["style"][key] = val;
	}
};



/**
 * 判断非空
 * 
 * @param val
 * @returns {Boolean}
 */
function isEmpty(val) {
	val = $.trim(val);
	if (val == null)
		return true;
	if (val == undefined || val == 'undefined')
		return true;
	if (val == "")
		return true;
	if (val.length == 0)
		return true;
	if (!/[^(^\s*)|(\s*$)]/.test(val))
		return true;
	return false;
}

//不允许有尖括号
function isIllegal(val){
	return val.indexOf('<') != -1 || val.indexOf('>') != -1 ;
}

function isNotEmpty(val) {
	return !isEmpty(val);
}


//日期转换
function transformDate(date){
    if(typeof date =="string"){
        return new Date(date.replace(/-/ig,"/").replace("T"," "));
    }else{
        return date;
    }
}


//获取多久以前，比如1秒前、一分钟前、一天前，等等
function getTimeFormat(startTime) {
    var startTimeMills = null;
    if(typeof startTime == 'number'){
    	startTimeMills = startTime;
    }else{
    	startTimeMills = startTime.getTime();
    }
    var endTimeMills = new Date().getTime();
    var diff = parseInt((endTimeMills - startTimeMills) / 1000);//秒
    var day_diff = parseInt(Math.floor(diff / 86400));//天
    var buffer = Array();
    if (day_diff < 0) {
        return "[error],时间越界...";
    } else {
        if (day_diff == 0 && diff < 60) {
            if (diff <= 0)
                diff = 1;
            buffer.push(diff + "秒前");
        } else if (day_diff == 0 && diff < 120) {
            buffer.push("1 分钟前");
        } else if (day_diff == 0 && diff < 3600) {
            buffer.push(Math.round(Math.floor(diff / 60)) + "分钟前");
        } else if (day_diff == 0 && diff < 7200) {
            buffer.push("1小时前");
        } else if (day_diff == 0 && diff < 86400) {
            buffer.push(Math.round(Math.floor(diff / 3600)) + "小时前");
        } else if (day_diff == 1) {
            buffer.push("1天前");
        } else if (day_diff < 7) {
            buffer.push(day_diff + "天前");
        } else if (day_diff < 30) {
            buffer.push(Math.round(Math.floor(day_diff / 7)) + " 星期前");
        } else if (day_diff >= 30 && day_diff <= 179) {
            buffer.push(Math.round(Math.floor(day_diff / 30)) + "月前");
        } else if (day_diff >= 180 && day_diff < 365) {
            buffer.push("半年前");
        } else if (day_diff >= 365) {
            buffer.push(Math.round(Math.floor(day_diff / 30 / 12)) + "年前");
        }
    }
    return buffer.toString();
}



function randomColor16(){
	//0-255	
	var r = random(255).toString(16);
	var g = random(255).toString(16);
	var b = random(255).toString(16);
	//255的数字转换成十六进制
	if(r.length<2)r = "0"+r;
	if(g.length<2)g = "0"+g;
	if(b.length<2)b = "0"+b;
	return "#"+r+g+b;
}

function random(num){
	return Math.floor(Math.random()*(num+1));
}

function randomRange(start,end){
	return Math.floor(Math.random()*(end-start+1))+start;
}
