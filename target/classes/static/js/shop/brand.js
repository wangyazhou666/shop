		function initBrand(brandName){
				$.ajax({
					url:v_contextPath+"/brand/findBrandList.jhtml",
					type:"post",
					success:function(result){
							var v_brandList=result.data;
						for (var i = 0; i < v_brandList.length; i++) {
							$("select[name='"+brandName+"']").append("<option value='"+v_brandList[i].id+"'>"+v_brandList[i].brandName+"</option>")
						}
					}
				})		
			}