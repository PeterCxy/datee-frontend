window.onload = function () {
	var aLi = document.querySelectorAll(".list1 li");
    var i = 0;
    for (i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmousedown = function () {
            alert('Submit: ' + (this.index%5+1) + ' point!');
        };
    }
};
