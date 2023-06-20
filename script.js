var percent = document.querySelector('#percent');
var percentviewed = document.querySelector('#percentviewed');
var horizontalscroll= document.querySelector('#horizontalscroll')
var horizontalscroll1 = document.querySelector('#horizontalscroll1');
window.addEventListener('scroll', () => {
    // var userscrnheight = screen.availHeight;  // visible height
    // var totalheight = screen.height;   // total height
    //  var curposition = window.pageYOffset;
    //  var percentagechange = Math.floor(((curposition)/(totalheight-userscrnheight)));
    //  percent.innerHTML = percentagechange;


    // Method to see how much screen % has been viewed
    var h = document.documentElement;
    var b= document.body;
    var st='scrollTop';
    sh='scrollHeight';
    percent.innerHTML = Math.floor((h[st]||b[st])/((h[sh]||b[sh]) - h.clientHeight)*100);
    // horizontalscroll.style.background = linear-gradient(to right, cyan, blue,Math.floor((h[st]||b[st])/((h[sh]||b[sh]) - h.clientHeight)*100));
    
})
