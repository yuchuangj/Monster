//随机生成点赞数
var num=Math.ceil(Math.random()*99);//生成0~99之间的随机整数
window.onload=function(){ //在网页加载完成后写入数据
    document.getElementById("random").innerHTML=num;
}
//点赞事件
function good(){
    alert("点赞成功！");
    num++;
    document.getElementById("random").innerHTML=num;
}