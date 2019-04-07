
var v_row = [];

function clickChecked(TableId) {
    $("#"+TableId+" tbody").on("mouseover", "tr", function () {
        var v_checkbox = $(this).find("input[name='checkList']:checkbox")[0];
        if (!v_checkbox.checked) {
            this.style.background = "lime";
        }
    })
    //绑定一个鼠标移下事件，如果自己不是被选中状态
    $("#"+TableId+" tbody").on("mouseout", "tr", function () {
        var v_checkbox = $(this).find("input[name='checkList']:checkbox")[0];
        if (!v_checkbox.checked) {
            this.style.background = "";
        }
    })
    $("#"+TableId+" tbody").on("click", "tr", function () {
        var v_checkbox = $(this).find("input[name='checkList']:checkbox")[0];
        if (!v_checkbox.checked) {
            $(this).css("background", "gainsboro")
            v_row.push(v_checkbox.value)
            v_checkbox.checked = true;
        } else {
            //否则让其颜色置空并且取消选中
            $(this).css("background", "");
            //调用删除元素方法在取消的同时删除数组中的此元素
            deleteRowId(v_checkbox.value)
            //并让其不被选中
            v_checkbox.checked = false;
        }
    })
}

function deleteRowId(id) {
    //循环自定义数组
    for (var i = v_row.length - 1; i >= 0; i--) {
        //如果传入的值与数组中的值一致
        if (v_row[i] == id) {
            v_row.splice(i, 1);
        }
    }
}

function isExist(id) {
    for (var i = 0; i < v_row.length; i++) {
        if (v_row[i] == id) {
            return true;
        }
    }
}