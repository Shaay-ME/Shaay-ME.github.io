// Objects.
var modal = document.getElementById('modal');
var openBtn = document.getElementById('BTN');
var openBtn2 = document.getElementById('BTN2');

// Events.
openBtn.addEventListener('click',function(){
    /* a handler that fires an event whenever the user clicks on the Project button */
    modal.style.display = 'flex';
});
openBtn2.addEventListener('click',function(){
    /* a handler that fires an event whenever the user clicks on the Project button */
    modal.style.display = 'flex';
});

window.onclick = function(event){
    if(event.target == modal)
    {
        modal.style.display = 'none';
    }
}
