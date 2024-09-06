//كود تغيير الصورة 

function change1(img){
    let taags1 = document.querySelector('#taags1');
    taags1.setAttribute('src',img);
}
function change2(img){
    let taags2 = document.querySelector('#taags2');
    taags2.setAttribute('src',img);
}
function change3(img){
    let taags3 = document.querySelector('#taags3');
    taags3.setAttribute('src',img);
}






//كود العداد 
var num1 = document.getElementById("count1");
var num2 = document.getElementById("count2");
var num3 = document.getElementById("count3");
var num4 = document.getElementById("count4");


function animatedCounter(element, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = 0;
    if(end > start){
        increment = 1;
    }
    else{
        increment = -1;
    }
    
    var timer = setInterval(function () {
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, duration);    

}



animatedCounter(num1, 1, 400, 30);
animatedCounter(num2, 1, 80, 60);
animatedCounter(num3, 1, 10, 500);
animatedCounter(num4, 1, 40, 100);


