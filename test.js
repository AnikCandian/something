alert("Testing");

var IdCount = 0

function Continue(test) {
    var check = document.getElementById(IdCount.toString());
    if(check){
        check.style.visibility = "visible";
        test.parentNode.removeChild(test);
        IdCount += 1;
    }
}