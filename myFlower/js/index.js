/**
 * Created by lenovo on 2017/3/15.
 */

var lis=document.getElementsByClassName('hiddSon');
var timer;
console.log(lis);

$(function () {

    navClick();
    line()
})
//导航固定事件

function navClick(){
    for (let i=0;i<lis.length;i++) {
        lis[i].onclick=function () {
            console.log(i);
            lis[i].getElementsByTagName('img')[0].style.transform='rotateZ(360deg)';
            lis[i].getElementsByTagName('img')[0].style.transition='all 2s';
        }

    }

}
var i=0;
function line() {
    document.onscroll = function (event) {
clearInterval(timer);
        if(document.body.scrollTop>=300&&document.body.scrollTop<=900){

           timer= setInterval(function () {
               i++;
               if (i>4) {

                   clearInterval(timer);
                   i=0;
               }
               console.log(i);
               $('.line').css({'transform':'rotateY('+90*i+'deg)','transition':'all 2s'});
                console.log(456);


            },200)
        };

    }
}

