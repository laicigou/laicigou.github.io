var dqwz56465 = window.location.host;
if(dqwz56465!='pet-chain.baidu.com'){
	alert('请在莱茨狗的页面打开此插件，如 https://pet-chain.baidu.com/ ');
}else{
LoadJs('//55haohuo.duapp.com/humane.min.js');
LoadCss('//55haohuo.duapp.com/original.css');
/* 	javascript:(function(){try{var a=document.createElement('SCRIPT');a.type='text/javascript',a.src='//55haohuo.duapp.com/lcg.js?'+(new Date).getTime()/1e5,a.charset='utf-8',document.getElementsByTagName('head')[0].appendChild(a)}catch(b){alert(b)}})(); */
var css1='height:990px;width:1100px;position: absolute;top: 10px;right: 30px;padding: 5px;border-radius: 5px;box-shadow: rgb(92, 184, 229) 0px 0px 2px; -webkit-box-shadow: rgb(92, 184, 229) 0px 0px 2px;background-color: rgba(255, 255, 255, 1) !important;z-index: 2;'; 
var css2='display:inline-block;margin-top:15px;margin-bottom:10px;vertical-align:middle;text-decoration:none;color:rgb(255,255,255);background-color:rgb(233,104,107);text-align:center;cursor:pointer;white-space:nowrap;box-shadow:rgba(0,0,0,0.117647) 0px 2px 6px,rgba(0,0,0,0.239216) 0px 1px 2px;font-family:微软雅黑;border-width:initial;border-style:none;border-color:initial;border-image:initial;outline:0px;padding:8px 18px;overflow:hidden;transition:0.2s ease-out;border-radius:2px;';
var css3='display:inline-block;margin-top:0px;margin-bottom:0px;vertical-align:middle;text-decoration:none;color:rgb(255,255,255);background-color:rgb(233,104,107);text-align:center;cursor:pointer;white-space:nowrap;box-shadow:rgba(0,0,0,0.117647) 0px 2px 6px,rgba(0,0,0,0.239216) 0px 1px 2px;font-family:微软雅黑;border-width:initial;border-style:none;border-color:initial;border-image:initial;outline:0px;padding:1px 18px;overflow:hidden;transition:0.2s ease-out;border-radius:2px;';
var css4='height:990px;width:410px;position: absolute;top: 10px;right: 30px;padding: 5px;border-radius: 5px;box-shadow: rgb(92, 184, 229) 0px 0px 2px; -webkit-box-shadow: rgb(92, 184, 229) 0px 0px 2px;background-color: rgba(255, 255, 255, 1) !important;z-index: 3;'; 
var htbody='<div id="yhxx"></div><div id="ewm" style="position:absolute;z-index:9999;display:none;" ></div><div id="enlarge_images" style="position:absolute;z-index:999999;" ></div><div id="a1"></div><div id="a2" style="'+css4+'">';
htbody+='<p style="'+css2+'"><a onclick="hqwddd()" href="###">获取我的订单</a></p><p id="mrmcs"></p>';
htbody+='<div class="pull-list scroller pull-list-order"><div class="mint-loadmore"><div class="mint-loadmore-content"><div class="order-wrapper">';
htbody+='<div id="wddd"><div>';
htbody+='</div></div></div></div> <p style="'+css2+'"><a onclick="jxhqwddd()" href="###">继续加载订单</a></p></div>';
document.body.innerHTML =htbody;



var szcsgjg=[0,0,0,0,0,0];
for(var i = 0 ;i < 6;i++){  
      szcsgjg[i]=getCookie("szcsgjg"+i)
    }  

var ggyyl=[0,0,0,0,0,0];/* 狗狗的拥有量 */

var hqyhxxht='<p style="'+css2+'"><a onclick="hqyhxx()" href="###">刷 新 用 户 信 息</a></p><br><a target="_blank" href="http://www.lcg123.top/">http://www.lcg123.top</a>';
var ht1='<div style="'+css1+'">';
ht1+='<p style="'+css2+'"><a onclick="hqzjdg()" href="###">获取自己的狗</a></p> <input id="dx1" type="checkbox">同时获取狗的稀数 '+'  <!--<p style="'+css2+'"><a onclick="test()" href="###">test</a></p> -->';
ht1+='<pre id="sjsz">拥有数量：普通 0个		稀有 0个		卓越 0个		史诗 0个		神话 0个		传说 0个';
ht1+='			约等：0微积分</pre><pre>出售价格：';
ht1+='普通<input type="text" id="jg0" value="'+szcsgjg[0]+'" size="1" onkeyup="setcsgjg(0)">	';
ht1+='稀有<input type="text" id="jg1" value="'+szcsgjg[1]+'" size="1" onkeyup="setcsgjg(1)">	';
ht1+='卓越<input type="text" id="jg2" value="'+szcsgjg[2]+'" size="1" onkeyup="setcsgjg(2)">	';
ht1+='史诗<input type="text" id="jg3" value="'+szcsgjg[3]+'" size="4" onkeyup="setcsgjg(3)">	';
ht1+='神话<input type="text" id="jg4" value="'+szcsgjg[4]+'" size="6" onkeyup="setcsgjg(4)">	';
ht1+='传说<input type="text" id="jg5" value="'+szcsgjg[5]+'" size="9" onkeyup="setcsgjg(5)"></pre>';
ht1+='<div id="gous"></div>';

ht1+='';
ht1+='</div>';
ht1+='';


document.getElementById("a1").innerHTML = ht1;



hqyhxx();

}
function setcsgjg(i){              
	setCookieD("szcsgjg"+i,document.getElementById("jg"+i).value,365)
}


var t2 = window.setInterval("hqwddd()",20000); 

function hqyhxx(){              
	var url = "https://pet-chain.baidu.com/data/user/get";
	var datas='{"requestId":'+(new Date).getTime()+',"appId":1,"tpl":"","timeStamp":null,"nounce":null,"token":null}';
	xmlHttpRequest = createXmlHttpRequest();  /* 1.创建XMLHttpRequest组建 */       
    xmlHttpRequest.onreadystatechange = hqyhxxFun;  //2.设置回调函数     
    xmlHttpRequest.open("POST",url,true);//3.初始化XMLHttpRequest组建
	xmlHttpRequest.setRequestHeader("Content-type", "application/json;charset=UTF-8");  //用POST的时候一定要有这句	
    xmlHttpRequest.send(datas);  //4.发送请求 
}
     
function hqyhxxFun(){      
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){      
        var b = xmlHttpRequest.responseText;        
        var obj = JSON.parse(b); //由JSON字符串转换为JSON对象   
		errorMsg=obj.errorMsg;
		if(errorMsg=='success'){
			document.getElementById("yhxx").innerHTML ='';
			ht_55as445 ='<div class="personal router-view"><div class="personal-info"><div class=""><div class="headIcon"><img src="'+obj.data['headIcon']+'" alt="" class="head-icon"></div></div> <div class=""><h3 class="name">'+obj.data['userName']+'</h3> <p class="price">'+obj.data['amount']+'&nbsp;微积分</p>'+hqyhxxht+'</div></div></div>';
			
			document.getElementById("yhxx").innerHTML =ht_55as445;
			//msg('original',800,'成功');

		}else{
			msg('original',1500,'获取用户信息失败！！！！！！');
		} 
    }      
}
var ddpageNo=1;


/**
 *对Date的扩展，将 Date 转化为指定格式的String
 *月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *例子：
 *(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 */
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

var jrmr=0;
var jrmc=0;
var riqi = new Date().format("yyyy-MM-dd");
var sfqbjz=false;

function jxhqwddd(){
	if(sfqbjz){
		msg('original',1500,'订单已经全部加载完成！！！！！！');
	}else{
		ddpageNo++;
		hqwddd(1);
	}

}
  
function hqwddd(qk){
	sfqbjz=false;
	if(!qk){
		document.getElementById("wddd").innerHTML = '';
		ddpageNo=1;
		jrmr=0;
		jrmc=0;
	}
	var url = "https://pet-chain.baidu.com/data/user/order/list";
	var datas='{"pageNo":'+ddpageNo+',"pageSize":20,"pageTotal":-1,"requestId":'+(new Date).getTime()+',"appId":1,"tpl":"","timeStamp":null,"nounce":null,"token":null}';
	xmlHttpRequest = createXmlHttpRequest();  //1.创建XMLHttpRequest组建       
    xmlHttpRequest.onreadystatechange = hqwdddFun;  //2.设置回调函数     
    xmlHttpRequest.open("POST",url,true);//3.初始化XMLHttpRequest组建
	xmlHttpRequest.setRequestHeader("Content-type", "application/json");  //用POST的时候一定要有这句	
    xmlHttpRequest.send(datas);  //4.发送请求 
}
     
function hqwdddFun(){   
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){      
        var b = xmlHttpRequest.responseText;        
        var obj = JSON.parse(b); //由JSON字符串转换为JSON对象		
		var totalCount = 0;	
		totalCount = obj.data['totalCount'];
		if(totalCount==0){document.getElementById("wddd").innerHTML = '<br>你还没有交易信息！';return;}
		var zys		=parseInt(totalCount/20)+1;
		var zys_yu	=totalCount%20;
　　	var ycs=20;
		if(ddpageNo==zys){ycs=zys_yu;}
/* 		if(ddpageNo==1){
			var ht3='';
			for (var i=0;i<totalCount;i++){
				ht3+='<div id="ggs'+i+'">'+i+'</div>';
			}
			document.getElementById("gous").innerHTML = ht3;
		
		} */
		/* 
            "id": "15952041",
            "petId": "1922937569451534654",
            "petName": "小莱",
            "transDate": "2018-03-05",//日期
            "amount": "5559.97",//买卖价格
            "fee": "4.97",//手续费
            "status": 2,//1是卖出 2是买入
            "txnStatus": 2,//1是上链中  2是交易完成
            "svgPath": "PET_SVG_995436d55a91922b4966a28df8938124",//图片地址
            "petUrl": "https://blockchain-pet-online.cdn.bcebos.com/PET_SVG_995436d55a91922b4966a28df8938124",//图片地址
            "bgColor": "#DDEDC9"//背景颜色




 */
		ht2='';
		var mm=['','已卖出','已买入'];
		var transDate='';

		for (var i=0;i<ycs;i++){
			transDate=obj.data['dataList'][i].transDate;
			if(obj.data['dataList'][i].txnStatus==1){
				ht2+='<div class="order-list"><dl><dt class="dog-img" style="background-color: rgb(255, 249, 197);"><img src="'+obj.data['dataList'][i].petUrl+'" onerror="this.onerror=null; this.style.height=0;"></dt> <dd class="dog-info"><!----> <!----> <h3 class="dog-name">小莱 '+obj.data['dataList'][i].id+'</h3> <div class="date">'+transDate+'</div></dd> <dd class="txn-status"><p class="txn">上链中</p> <!----></dd> <!----></dl></div>';
				if(obj.data['dataList'][i].status==2){
					if(riqi==transDate){jrmr++;}
				}else{
					if(riqi==transDate){jrmc++;}
				}
				
			}else{
				ht2+='<div class="order-list"><dl><dt class="dog-img"style="background-color: rgb(255, 249, 197);"><img src="'+obj.data['dataList'][i].petUrl+'"onerror="this.onerror=null; this.style.height=0;"></dt><dd class="dog-info"><span class="tag">'+mm[obj.data['dataList'][i].status]+'</span><!----><h3 class="dog-name">小莱 '+obj.data['dataList'][i].id+'</h3><div class="date">'+transDate+'</div></dd><!----><dd class="price">';
				if(obj.data['dataList'][i].status==2){
					ht2+='<p class="sale">-'+obj.data['dataList'][i].amount+'微</p><p class="fee">含手续费'+obj.data['dataList'][i].fee+'微</p></dd></dl></div>';
					if(riqi==transDate){jrmr++;}
				}else{
					ht2+='<p class="buy">+'+obj.data['dataList'][i].amount+'微</p><!----></dd></dl></div>';
					if(riqi==transDate){jrmc++;}
				}
				
			}
		}
		document.getElementById("wddd").innerHTML += ht2;
		document.getElementById("mrmcs").innerHTML = '今天已买入 '+jrmr+' 条狗，卖出 '+jrmc+' 条狗';
		hqyhxx();

		if(ddpageNo==zys){
			ddpageNo=1; 
			sfqbjz=true;
			msg('original',1500,'已经加载全部订单！');
			//document.getElementById("sjsz").innerHTML = ht2;
		}else{
			if(riqi==transDate){
				jxhqwddd();
			}
		}
	}
 
}





function test(){
	document.getElementById("a2").innerHTML = '';
}

function szyulan(){

	var demo = document.getElementById("gous");
	var gg = demo.getElementsByTagName("img");
	var ei = document.getElementById("enlarge_images");
	
	
	for(i=0; i<gg.length; i++){
		var ts = gg[i];
		ts.onmousemove = function(event){
			event = event || window.event;
			ei.style.display = "block";
			ei.innerHTML = '<img src="' + this.src + '"  height="220" />';
			
			
			ei.style.top  = document.body.scrollTop + event.clientY -100+ "px";
			ei.style.left = document.body.scrollLeft + event.clientX - 300 + "px";
			
			
		}
		ts.onmouseout = function(){
			//ei.innerHTML = "";
			ei.style.display = "none";
		}
		ts.onclick = function(){
			window.open( this.src );
		}
	}


}



var pageNo=1;
var ht2='';
function hqzjdg(){
	if(pageNo==1){ggyyl=[0,0,0,0,0,0];}
	var url = "https://pet-chain.baidu.com/data/user/pet/list";
	var datas='{"pageNo":'+pageNo+',"pageSize":20,"pageTotal":-1,"requestId":'+(new Date).getTime()+',"appId":1,"tpl":"","timeStamp":null,"nounce":null,"token":null}';
	xmlHttpRequest = createXmlHttpRequest();  //1.创建XMLHttpRequest组建       
    xmlHttpRequest.onreadystatechange = hqzjdgFun;  //2.设置回调函数     
    xmlHttpRequest.open("POST",url,true);//3.初始化XMLHttpRequest组建
	xmlHttpRequest.setRequestHeader("Content-type", "application/json;charset=UTF-8");  //用POST的时候一定要有这句	
    xmlHttpRequest.send(datas);  //4.发送请求 
}
     
function hqzjdgFun(){      
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){      
        var b = xmlHttpRequest.responseText;        
        var obj = JSON.parse(b); //由JSON字符串转换为JSON对象		
		var totalCount = 0;	
		var lsdj='';
		totalCount = obj.data['totalCount'];
		if(totalCount==0){document.getElementById("gous").innerHTML = '<br>你还没有狗狗！';return;}
		var zys		=parseInt(totalCount/20)+1;
		var zys_yu	=totalCount%20;
　　	var ycs=20;
		if(pageNo==zys){ycs=zys_yu;}
		if(pageNo==1){
			var ht3='';
			for (var i=0;i<totalCount;i++){
				ht3+='<div id="ggs'+i+'">'+i+'</div>';
			}
			document.getElementById("gous").innerHTML = ht3;
		
		}
		for (var i=0;i<ycs;i++){
			lsdj = obj.data['dataList'][i].rareDegree;
			//obj.data['dataList'][i].rareDegree
			//obj.data['dataList'][i].petId
			//obj.data['dataList'][i].amount
			//obj.data['dataList'][i].id
			//obj.data['dataList'][i].petUrl
			//If lsdj > 1 Then Label5(i).ForeColor = &HFF&
			ggyyl[lsdj]++;
			var ys='';
			ht2='';
			if	   (lsdj == '0'){ys='Black';}
			else if(lsdj == '1'){ys='ForestGreen';}
			else if(lsdj == '2'){ys='Blue';}
			else if(lsdj == '3'){ys='red';}
			else if(lsdj == '4'){ys='Orange ';}
			else if(lsdj == '5'){ys='MediumSlateBlue';}
			
			ggssid=(pageNo-1)*20+i;
			
			ht2+='<div style="font-size: 25px; color:'+ys+'"><img src="'+obj.data['dataList'][i].petUrl+'" height="40">';
			var gid=obj.data['dataList'][i].id;
			if(gid.length<8){gid+='&ensp;';}
			lsxs='';
			if(document.getElementById("dx1").checked){
				lsxs=hqxs(obj.data['dataList'][i].petId)+'稀';
			}

			ht2+= gid+"-" +  "-" + HqPz(lsdj) + '-' + lsxs + '-<span id="amount'+ggssid+'">' + obj.data['dataList'][i].amount + "</span>-";
			if(obj.data['dataList'][i].chainStatus=='0'){
				ht2+='链ING';
			}
			
			ht2+='<p style="'+css3+'" id="mmg'+ggssid+'">';
			
			if(obj.data['dataList'][i].amount>0){
				ht2+='<a onclick="cxmg(\''+obj.data['dataList'][i].petId+'\',\''+lsdj+'\',\''+ggssid+'\')" href="###">撤销</a></p> ';
			}else{
				ht2+='<a onclick="ksmg(\''+obj.data['dataList'][i].petId+'\',\''+lsdj+'\',\''+ggssid+'\')" href="###">卖狗</a></p> ';
			}
			
			ht2+='<!-- <p style="'+css3+'"><a onclick="ksmg(\''+obj.data['dataList'][i].petId+'\',\''+lsdj+'\')" href="###">TEST</a></p> -->'
			
			ht2+=' <p style="'+css3+'"><a onclick="hqewm(\''+obj.data['dataList'][i].petId+'\')" href="###"  onmouseout="gbewm()">二维码</a></p>';
			
			ht2+=' <p style="'+css3+'"><a  target="_blank" href="https://pet-chain.baidu.com/chain/detail?channel=market&petId='+obj.data['dataList'][i].petId+'&validCode=">链接</a></p></div>';
			
			document.getElementById("ggs"+ggssid).innerHTML = ht2;
		}
				
	  
		

		if(pageNo==zys){
			pageNo=1; 
			ht2='';
			szyulan();
			humane.baseCls = 'humane-original';
			humane.timeoutAfterMove = 1500;
			humane.log("已经加载全部莱茨狗！");
			var lsjg1625=0;
			for(i=0; i<6; i++){
				lsjg1625+=getval("jg"+i) * ggyyl[i];
			}		
			
			ht2= '拥有数量：普通 '+ggyyl[0]+'个		稀有 '+ggyyl[1]+'个		卓越 '+ggyyl[2]+'个		史诗 '+ggyyl[3]+'个		神话 '+ggyyl[4];
			ht2+='个		传说 '+ggyyl[5]+'个			约等：'+lsjg1625+' 微积分';
			

			
			document.getElementById("sjsz").innerHTML = ht2;



		}else{pageNo++;hqzjdg();}
	}      
} 
function getval(id){
	return document.getElementById(id).value;
}

function hqxs(petId){
	//获取狗的稀数
	var url = "https://pet-chain.baidu.com/data/pet/queryPetById";
	var datas='{"petId":"'+petId+'","requestId":'+(new Date).getTime()+',"appId":1,"tpl":"","timeStamp":null,"nounce":null,"token":null}';
	xmlHttpRequest = createXmlHttpRequest();  //1.创建XMLHttpRequest组建       
    //xmlHttpRequest.onreadystatechange = hqxsFun;  //2.设置回调函数     
    xmlHttpRequest.open("POST",url,false);//3.初始化XMLHttpRequest组建
	xmlHttpRequest.setRequestHeader("Content-type", "application/json;charset=UTF-8");  //用POST的时候一定要有这句	
    xmlHttpRequest.send(datas);  //4.发送请求 
	var b = xmlHttpRequest.responseText;        
	var n=(b.split('rareDegree":"稀有"}')).length-1;
	return n;
	
}

function hqewm(petId){
	
	var ei = document.getElementById("ewm");
	ei.style.display = "block";
	ei.innerHTML = '<img src="http://pan.baidu.com/share/qrcode?w=150&h=150&url=https://pet-chain.baidu.com/chain/detail?channel=market%26petId='+ petId+ '"  height="150" />';
	ei.style.top  = document.body.scrollTop + event.clientY -100+ "px";
	ei.style.left = document.body.scrollLeft + event.clientX - 200 + "px";

}
function gbewm(petId){
	var ei = document.getElementById("ewm");
	ei.style.display = "none";
	ei.innerHTML = "";;
}

function ksmg(petId,lsdj,ggssid){
	var lsjg='999999999';
	lsjg=document.getElementById('jg'+lsdj).value;
	if(lsjg>0){
		var url = "https://pet-chain.baidu.com/data/market/salePet";
		var datas='{"petId":"'+petId+'","amount":"'+lsjg+'","requestId":'+(new Date).getTime()+',"appId":1,"tpl":"","timeStamp":null,"nounce":null,"token":null}';
		xmlHttpRequest = createXmlHttpRequest();  //1.创建XMLHttpRequest组建       
		xmlHttpRequest.onreadystatechange =function(){ksmgFun(petId,lsdj,ggssid,lsjg)};  //2.设置回调函数     
		xmlHttpRequest.open("POST",url,true);//3.初始化XMLHttpRequest组建
		xmlHttpRequest.setRequestHeader("Content-type", "application/json;charset=UTF-8");  //用POST的时候一定要有这句	
		xmlHttpRequest.send(datas);  //4.发送请求 
	}else{
		msg('original',1500,'请在上面输入你要出售的价格！');
	}
}



function ksmgFun(petId,lsdj,ggssid,lsjg){
    
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){ 
        var b = xmlHttpRequest.responseText; 		
        var obj = JSON.parse(b); //由JSON字符串转换为JSON对象   
        var errorMsg=obj.errorMsg;
		if(errorMsg){
			if(errorMsg=='success'){
				ht5='<a onclick="cxmg(\''+petId+'\',\''+lsdj+'\',\''+ggssid+'\')" href="###">撤销</a></p> ';
				document.getElementById("mmg"+ggssid).innerHTML = ht5;
				document.getElementById("amount"+ggssid).innerHTML = lsjg;
			}
			humane.baseCls = 'humane-original';
			humane.timeoutAfterMove = 1500;
			humane.log(errorMsg);
		}else{
			humane.baseCls = 'humane-original';
			humane.timeoutAfterMove = 1500;
			humane.log("出现了未知错误！！！！");
		}               
    }      
}
function cxmg(petId,lsdj,ggssid){
	var url = "https://pet-chain.baidu.com/data/market/unsalePet";
	var datas='{"petId":"'+petId+'","requestId":'+(new Date).getTime()+',"appId":1,"tpl":"","timeStamp":null,"nounce":null,"token":null}';
	xmlHttpRequest = createXmlHttpRequest();  //1.创建XMLHttpRequest组建       
    xmlHttpRequest.onreadystatechange =function(){cxmgFun(petId,lsdj,ggssid)};  //2.设置回调函数     
    xmlHttpRequest.open("POST",url,true);//3.初始化XMLHttpRequest组建
	xmlHttpRequest.setRequestHeader("Content-type", "application/json;charset=UTF-8");  //用POST的时候一定要有这句	
    xmlHttpRequest.send(datas);  //4.发送请求 
}
function cxmgFun(petId,lsdj,ggssid){      
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){      
        var b = xmlHttpRequest.responseText; 		
        var obj = JSON.parse(b); //由JSON字符串转换为JSON对象   
        var errorMsg=obj.errorMsg;
		if(errorMsg){
			if(errorMsg=='success'){
				ht5='<a onclick="ksmg(\''+petId+'\',\''+lsdj+'\',\''+ggssid+'\')" href="###">卖狗</a></p> ';
				document.getElementById("mmg"+ggssid).innerHTML = ht5;
				document.getElementById("amount"+ggssid).innerHTML = '0.00';
			}
			humane.baseCls = 'humane-original';
			humane.timeoutAfterMove = 1500;
			humane.log(errorMsg);
			
		}else{
			humane.baseCls = 'humane-original';
			humane.timeoutAfterMove = 1500;
			humane.log("出现了未知错误！！！！");
		}               
    }      
}     
 

function HqPz(dj){
	if(dj==null){return '';}
	else if(dj == '0'){return '普通';}
	else if(dj == '1'){return '稀有';}
	else if(dj == '2'){return '卓越';}
	else if(dj == '3'){return '史诗';}
	else if(dj == '4'){return '神话';}
	else if(dj == '5'){return '传说';}
}








var lq123=0;
var lqdzs;
var lgjs=0;

function zhdt(){              
	document.getElementById('ggdz').value=document.getElementById('ggdz').value.replace('=center', '=market');
}
function fzlj(){              

}
function lxlqgou(){
	lqdzs=document.getElementById('e_lqdz').value.split("\n");
	if(lqdzs[lgjs]){
		document.getElementById('lqdz').value=lqdzs[lgjs];
		lgjs++;
		lq123=2;
		hqyzm();
	}
	else{
		alert('ok');
	}
	
}
function lq1gou(){              
    hqyzm();
	lq123=1;
}
function lq23gou(){
if(document.getElementById('lqdz').value!='')	{
	    hqyzm(); 
	lq123=2;
}

}
function qklqdz(){              
    document.getElementById('lqdz').value='';
} 
function qke_lqdz(){              
    document.getElementById('lqdz').value='';
	lgjs=0;
	document.getElementById('e_lqdz').value='';
} 
   
var xmlHttpRequest;      
           
//XmlHttpRequest对象      
function createXmlHttpRequest(){      
    if(window.ActiveXObject){ //如果是IE浏览器      
        return new ActiveXObject("Microsoft.XMLHTTP");      
    }else if(window.XMLHttpRequest){ //非IE浏览器      
        return new XMLHttpRequest();      
    }      
}      
    
var Seed='';
	
function hqyzm(){      
    document.getElementById("xx1").innerHTML = '请输入验证码';
    var url = "https://pet-chain.baidu.com/data/captcha/gen";
	xmlHttpRequest = createXmlHttpRequest();  //1.创建XMLHttpRequest组建       
    xmlHttpRequest.onreadystatechange = hqyzmFun;  //2.设置回调函数     
    xmlHttpRequest.open("GET",url,true);//3.初始化XMLHttpRequest组建
	xmlHttpRequest.setRequestHeader("Content-type", "application/json");  //用POST的时候一定要有这句	
    xmlHttpRequest.send(null);  //4.发送请求        
}
//回调函数      
function hqyzmFun(){      
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){      
        var str = xmlHttpRequest.responseText;      
        var obj = JSON.parse(str); //由JSON字符串转换为JSON对象   
        Seed=obj.data.seed;
        document.getElementById("yzm1").src="data:image/jpeg;base64,"+obj.data.img;
		document.getElementById('yzmy1').value='';		
		document.getElementById('yzmy1').focus();
    }      
} 
function getKey1()  
{  

	var inputText = document.getElementById('yzmy1').value;
    if(inputText.length > 3){
		if(lq123==1){
			post1gou();
		}
       if(lq123==2){
			post23gou();
		}
        
    }







	//onkeypress
    //if(event.keyCode==13){ }     
}  

	
function post1gou(){      
   
    var url = "https://pet-chain.baidu.com/data/user/gift";
	var datas='{"seed":"' + Seed + '","captcha":"' + document.getElementById('yzmy1').value + '","shareCode":"6506b9d808a41c07","requestId":' + (new Date).getTime() + ',"appId":1,"tpl":"wechat","timeStamp":null,"nounce":null,"token":null}';
	xmlHttpRequest = createXmlHttpRequest();  //1.创建XMLHttpRequest组建       
    xmlHttpRequest.onreadystatechange = oknoFun;  //2.设置回调函数     
    xmlHttpRequest.open("POST",url,true);//3.初始化XMLHttpRequest组建
	xmlHttpRequest.setRequestHeader("Content-type", "application/json;charset=UTF-8");  //用POST的时候一定要有这句	
    xmlHttpRequest.send(datas);  //4.发送请求        
}         
function post23gou(){      
   
   var obj = parseQueryString(document.getElementById('lqdz').value);
   
   
	appid 	=obj.appId;
	tpl 	=obj.tpl;
	nounce 	=obj.nounce;
	token 	= obj.token;
	TimeStamp =obj.timeStamp;
   

   
   
    var url = "https://pet-chain.baidu.com/data/user/gift";
	var datas='{"seed":"' + Seed + '","captcha":"' + document.getElementById('yzmy1').value + '","shareCode":"","requestId":' + (new Date).getTime() + ',"appId":' + appid + ',"tpl":"' + tpl + '","timeStamp":"' + TimeStamp + '","nounce":"' + nounce + '","token":"' + token + '"}';
	xmlHttpRequest = createXmlHttpRequest();  //1.创建XMLHttpRequest组建       
    xmlHttpRequest.onreadystatechange = oknoFun;  //2.设置回调函数     
    xmlHttpRequest.open("POST",url,true);//3.初始化XMLHttpRequest组建
	xmlHttpRequest.setRequestHeader("Content-type", "application/json;charset=UTF-8");  //用POST的时候一定要有这句	
    xmlHttpRequest.send(datas);  //4.发送请求        
}   





	
function onLogin(){      
   
    var url = "https://pet-chain.baidu.com/data/user/sign";
	var datas='{"requestId":'+(new Date).getTime()+',"appId":1,"tpl":"","timeStamp":null,"nounce":null,"token":null}';
    xmlHttpRequest = createXmlHttpRequest();  //1.创建XMLHttpRequest组建       
    xmlHttpRequest.onreadystatechange = oknoFun;  //2.设置回调函数     
    xmlHttpRequest.open("POST",url,true);//3.初始化XMLHttpRequest组建
	xmlHttpRequest.setRequestHeader("Content-type", "application/json;charset=UTF-8");  //用POST的时候一定要有这句	
    xmlHttpRequest.send(datas);  //4.发送请求        
}         
      
      
//回调函数      
function oknoFun(){      
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){      
        var b = xmlHttpRequest.responseText;      
		document.getElementById('yzmy1').value='';
     
        var obj = JSON.parse(b); //由JSON字符串转换为JSON对象   
        var errorMsg=obj.errorMsg;
		if(errorMsg){
			document.getElementById("xx1").innerHTML =errorMsg;
			if(errorMsg=='success'){
				lxlqgou();
			}
		}else{
			document.getElementById("xx1").innerHTML ='未知错误';
		}

	
                   
    }      
} 
function parseQueryString(url){  
    var obj = {};  
    var start = url.indexOf("?")+1;  
    var str = url.substr(start);  
    var arr = str.split("&");  
    for(var i = 0 ;i < arr.length;i++){  
          var arr2 = arr[i].split("=");  
           obj[arr2[0]] = arr2[1];  
    }  
return obj;  
} 




//动态加载CSS
//@param {string} url 样式地址
function LoadCss(url) {
	var head = document.getElementsByTagName('head')[0];
	var link = document.createElement('link');
	link.type='text/css';
	link.rel = 'stylesheet';
	link.href = url;
	head.appendChild(link);
}
//动态加载JS
//@param {string} url JS地址	
function LoadJs(url){
      var myScript= document.createElement("script");
      myScript.type = "text/javascript";
      myScript.src=url;
      document.body.appendChild(myScript);
}
	
//再次封装humane.js
function msg(css,time,str) {
	humane.baseCls = 'humane-'+css;
	humane.timeoutAfterMove = time;
	humane.log(str);
}
/* 设置cookies */
function setCookieD(name,value,Days){
var exp = new Date(); 
exp.setTime(exp.getTime() + Days*24*60*60*1000);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
/* 读取cookies */
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg)) return unescape(arr[2]);
else return null;
}
