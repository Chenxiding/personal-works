function pubuliu(){
	//行数
	var rows = 0;
	//元素的高度
	var height = 134;
	/*随机宽度*/
	var arrWidth = [134,277];
	//间距
	var space = 10;
	//容器对象
	var $container = $("#container");
	//间距高
	var oheight = height + space;
	//计算行数
	function getRows(){
		rows = Math.floor($(window).innerHeight() / oheight);
		$container.height(rows * oheight);
	}
	
	getRows();
	var arrLeft = [];
	var arrTop = [];
	for(var i=0;i<rows;i++){
		arrLeft.push(space);
		arrTop.push(i*oheight+space);
	}
	 var count = 0;
	 function appendItems(msg){
		var rnum = randomRange(0,1);
		var width = arrWidth[rnum];
		var id = 'pubuliu_'+Math.random(1000).toString().replace("\.","")+ "_"+ count++;
		var $div = $("<div id='"+id+"'></div>");
		var min = getMin();
		$div.css("background",randomColor16()).addClass("items_menu").animate({
			width:width,
			height:height,
			left:arrLeft[min],
			top:arrTop[min]
		}).html(msg);
		
		//每次追加元素以后要覆盖原来值，
		arrLeft[min] = arrLeft[min] + (width + space);
		$container.append($div);
	};


	$(window).resize(function(){
		//4行
		var len = rows;
		//重新计算行数
		getRows(); 
		//浏览器改变的时候，还是和原来的行数一致，那么没有改变必要
		if(len==rows)return;
			
		arrLeft = [];
		arrTop = [];
		for(var i=0;i<rows;i++){
			arrLeft.push(space);
			arrTop.push(i*oheight+space);
		}
		$container.find(".items_menu").each(function(){
			var min = getMin();
			$(this).animate({
				left:arrLeft[min],
				top:arrTop[min]
			});
			arrLeft[min] = arrLeft[min] + ($(this).width() + space);
		});
	});

	function getMin(){
		//找到这个层里面最短的元素的 145 144 288 432
		var val = arrLeft[0]; 
		var index = 0;
		for(var i=1;i<arrLeft.length;i++){
			if(arrLeft[i] < val ){
				index = i;
				val = arrLeft[i]; 
			}
		}
		return index;
	}
	
	return {
		appendData:appendItems
	};
} 	


	
