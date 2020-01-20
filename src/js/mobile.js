
let list = document.querySelectorAll('.ftr');
let input = document.querySelector('input[name=Destination]');

input.addEventListener("focus", function(){
    for (let item of list) {
        item.style.display = "block";     
}
});
