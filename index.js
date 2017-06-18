// Objects.
var modal = document.getElementById('modal');
var openBtn = document.getElementById('BTN');

// Events.
openBtn.addEventListener('click',function(){
    /* a handler that fires an event whenever the user clicks on the Project button */
    modal.style.display = 'flex';
});

window.onclick = function(event){
    if(event.target == modal)
    {
        modal.style.display = 'none';
    }
}