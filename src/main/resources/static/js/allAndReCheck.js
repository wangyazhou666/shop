	//绑定Id 全选反选
	function allAndRe(){
		$("#checkAll").click(function(){
			if(this.checked){
					$("#reCheck").prop({"checked":false});
				}
			$("input[name='checkList']:checkbox").prop({checked:$(this).prop("checked")}).each(function(){
				if(this.checked==true){
					$(this).parents("tr").css("background","gainsboro");	
					v_rowIds.push(this.value);
				}else{
					$(this).parents("tr").css("background","");	
					deleteRowId(this.value);
				}
			})
		})
  		$("#reCheck").click(function(){
  				if(this.checked){
  					$("#checkAll").prop({"checked":false});
  				}
  				$("input[name='checkList']:checkbox").each(function(){
					$(this).prop({checked:!$(this).prop("checked")});
					if(this.checked==true){
						$(this).parents("tr").css("background","gainsboro");
						v_rowIds.push(this.value);
					}else{
						$(this).parents("tr").css("background","");
						deleteRowId(this.value);
					}
				})
  			});
					var checkLength = $("input[name='checkList']:checked").length;
			  		var allLength= $("input[name='checkList']").length;
					if(checkLength==allLength){
			  			$("#checkAll").prop({"checked":true});
			  		}
		}
	function deleteRowId(id){
		for(var i=v_rowIds.length-1;i>=0;i--){
			if(v_rowIds[i]==id){
				v_rowIds.splice(i,1);
			}
		}
	}
		//点击事件
		//全选方法
		function checkAll(obj){
			var	v_checked=$(obj).prop("checked");
			$("input[name='checkList']:checkbox").prop({"checked":v_checked})
		}
		//反选方法
		function reCheck(){
			$("input[name='checkList']:checkbox").each(function(){
				var	v_checked=$(this).prop("checked");
				$(this).prop({"checked":!v_checked});
			})
		}
