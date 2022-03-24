//随机生成点赞数
var num=Math.ceil(Math.random()*70);//生成0~70之间的随机整数
window.onload=function(){ //在网页加载完成后写入数据
    document.getElementById("random").innerHTML=num;
}
//点赞事件
function good(){
    alert("点赞成功！");
    num++;
    document.getElementById("random").innerHTML=num;
}
//计时器返回主页
var times=3;
setInterval(refer,1000);
function refer(){
    if(times==0){
        location.href="index.html"; //倒计时结束后返回
    }
    document.getElementById("time").innerHTML=times;
    times--;
}

//点击空页的提示
    function three(){
    alert("真没有");
    }
    function four(){
        alert("这只是拿来看的");
    }
    function five(){
        alert("👍👍👍👍");
    }

//这是时钟代码
    var h = document.getElementById('hours');
    var m = document.getElementById('minutes');
    var s = document.getElementById('seconds');
    var nt= document.getElementById('nowTime');
    function clock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var mseconds = now.getMilliseconds();
        s.style.transform = "rotate("+6*(seconds+mseconds/1000)+"deg)";
        m.style.transform = "rotate("+6*(minutes+seconds/60)+"deg)";
        h.style.transform = "rotate("+30*(hours+minutes/60)+"deg)";
        nowTime.innerHTML="当前时间："+two(hours)+":"+two(minutes)+":"+two(seconds);
    }
    function two(num){
    	if(num<10){
    		num="0"+num;
    	}
    	return num;
    }
    clock();
    setInterval(clock,30);