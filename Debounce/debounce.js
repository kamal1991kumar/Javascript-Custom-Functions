
function debounce(callbackFn, delay){
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => callbackFn.apply(this, arguments), delay);
    }
}

var btn = document.createElement('button');
btn.innerHTML = 'Debounce';
document.body.appendChild(btn);

btn.addEventListener('click', debounce(function() {
	alert("Hello No matter how many times you click the button, I get executed once every 1 second!!");
}, 1000));