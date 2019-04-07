		//字符串方法
		var ids="";
		function initRows(){
			//slice(1) 默认过滤第一行，不需要加tbody 这层过滤
			/*$("#tableId tr").slice(1).each(function(){*/
			$("#tableId tbody tr").each(function(){
				var v_checkbox=$(this).find("input[name='checkList']:checkbox")[0];
					var v_ids=ids.split(",")
				   for(var i = 0 ; i< v_ids.length ; i++){
					   if(v_ids[i]==v_checkbox.value){
							$(this).css("background","gainsboro");
							v_checkbox.checked=true;
					   }
				   }
					$(this).click(function(){
						if(!v_checkbox.checked){
							$(this).css("background","gainsboro");
							ids+=v_checkbox.value+","
							v_checkbox.checked=true;
						}else{
							$(this).css("background","");
							ids=ids.replace(v_checkbox.value+",","");
							v_checkbox.checked=false;
						}
					})
				})
			}
		//数组方法
		var v_rowIds=[];
		function initTable(){
			//获取table的Id 取得每一行，循环每一行
			$("#tableId tbody tr").each(function(){
				//取得每一个checkbox 
				var v_checkbox=$(this).find("input[name='checkList']:checkbox")[0];
				//绑定一个鼠标移上事件，如果自己不是被选中状态
				$(this).mouseover(function(){
					if(!v_checkbox.checked){
						this.style.background="lime";
					}
				})
				//绑定一个鼠标移下事件，如果自己不是被选中状态
				$(this).mouseout(function(){
					if(!v_checkbox.checked){
						this.style.background="";
					}
				})
				//判断数组中拼接的值与所有checkbox的value对比，用来记录是否被选中
			   for(var i = 0 ; i< v_rowIds.length ; i++){
				   if(v_rowIds[i]==v_checkbox.value){
						$(this).css("background","gainsboro");
						v_checkbox.checked=true;
				   }
			   }
			   //为每一行绑定动态点击事件
				$(this).click(function(){
					//如果没有被选中则点击事件时让其选中并变颜色
					if(!v_checkbox.checked){
						$(this).css("background","gainsboro");
						//将选中的值拼接到自定义的数组中
						v_rowIds.push(v_checkbox.value)
						//并让其被选中
						v_checkbox.checked=true;
					}else{
					//否则让其颜色置空并且取消选中	
						$(this).css("background","");
					//调用删除元素方法在取消的同时删除数组中的此元素
						deleteRowId(v_checkbox.value)
						//并让其不被选中
						v_checkbox.checked=false;
					}
					//取得被选中复选框的长度
					var checkLength = $("input[name='checkList']:checked").length;
					//取得所有复选框的长度
			  		var allLength= $("input[name='checkList']").length;
			  		//如果被选中长度小于总长度
					if(checkLength<allLength){
			  			$("#checkAll").prop({"checked":false});
			  		}else{
			  			$("#checkAll").prop({"checked":true});
			  		}
					$("#reCheck").prop({"checked":false});
				})
			})
		}
		//取消选中是则在v_rowIds的数组中splice(i,1)删除此元素
		function deleteRowId(id){
			//循环自定义数组
			for(var i=v_rowIds.length-1;i>=0;i--){
				//如果传入的值与数组中的值一致
				if(v_rowIds[i]==id){
					v_rowIds.splice(i,1);
				}
			}
		}
		