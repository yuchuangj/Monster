//表单
function add(){
 
        document.getElementById('contes').style.display='block';
    }
   
//这是获取手机
function two(){
    alert("获取手机成功")
}
//这是注册
function three(){
    alert("注册成功")
}
//这是登陆外部链接
function five(){
    window.location.href="https://villagerpimin.github.io/";
}

//这是最下面的
function four(){
    alert("第二页更新中！")
}



//这是文字效果
message = '犼忘记了自己在这座山上待了多少个年头，在一个冬雪覆满松枝的清晨，犼见到了故人。'
+'故人的模样他可没忘。'+'犼利爪抓挠着地，獠牙森森，法阵“倏”地冒出一阵红光，将他压倒在地，嘶哑的声音从齿缝里挤出来：“顾舟！”'
+'故人踏雪而来，羽衣木簪，手持拂尘，背负长剑，他低垂了眉眼，高高在上地看着挣扎的犼：“一百年了，你心里的怨还未消去。”'
+'犼青白的脸孔上两只被血色浸染的眼眸渗出怨毒：“我要将你那道貌岸然的脸皮撕下来！”'
+'顾舟单手结咒，法阵顷刻间散去红光，不等犼扑过来，他便咬破了中指，隔空画起符咒。'
+'随着最后一笔的落下，刺眼的白芒顷刻间便覆盖了他。'
+'犼不记得自己生前的事，只是凭着怨恨和本能行事，顾舟初见他那时，犼踩着一地的血和残肢碎肉，咽下最后一口心脏，从黑发间隙中望过来，眼里的恶意让人不寒而栗，他的背后燃着大火，映红了头顶的明月。'
+'顾舟封印他花了不少力气，臂膀上被撕咬下了一块肉，犼身上的杀意迫得法阵大亮，符文将犼压趴在地上。'
pos = 0     /*初始截字符的位置*/
maxlength = message.length + 1
    function kaishi() {
        if (pos < maxlength) {
          txt = message.substring(pos, 0)
           document.forms[0].vito.value = txt
          document.forms[0].vito.style.color = 'black'     /*设置打出来的字体样式*/
          timer = setTimeout("kaishi()", 50)    /*设置间隔50毫秒打一个字*/
          pos++
      }
  }

  //这是随机点赞
var num=Math.ceil(Math.random()*99);
window.onload=function(){ 
    document.getElementById("random").innerHTML=num;
}

function good(){
    alert("爱你哟");
    num++
    document.getElementById("random").innerHTML=num;
    num++;
    
}

//这是鸡图
function img1(){
    alert("别点我，没结果")
}