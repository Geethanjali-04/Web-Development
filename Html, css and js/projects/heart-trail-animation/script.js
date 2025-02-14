var bodyEle =  document.querySelector("body");
bodyEle.addEventListener('mousemove', (event)=>{
    var left = event.offsetX;
    var top = event.offsetY;
    var spanEle = document.createElement('span');
    bodyEle.appendChild(spanEle);
    spanEle.style.top = top + "px";
    spanEle.style.left = left + "px";
    var size = Math.random() * 100;
    spanEle.style.height  = size + "px";
    spanEle.style.width = size + "px";
    // setTimeout function will create a closure and remember which span to remove
    setTimeout(()=>{
        spanEle.remove();
    }, 3000);
}
)