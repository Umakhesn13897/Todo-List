const Container = document.querySelector('.container');
const InputCont = document.querySelector('.input-cont')
const Input = document.getElementById('input');
const Addbutton = document.getElementById('btn-submit');




Addbutton.addEventListener("click", (e) => {
    e.preventDefault();
    
    checkInput();
});

function checkInput(){
    const InputValue = Input.value.trim();
    const li = document.createElement('li');
    const t = document.createTextNode(InputValue);
    li.appendChild(t);
    if(InputValue ===""){
        alert('Input field is empty');
    }

    else{
        const MyUl = document.getElementById('my-ul');
        MyUl.appendChild(li);
    }

    let list = document.getElementsByTagName('li');
    for(var i=0; i < list.length; i++){
        let span = document.createElement('span');
        span.className = 'close';
        var close = document.createTextNode('X');
        span.appendChild(close);
        list[i].appendChild(span);
    }
    
    var close = document.getElementsByClassName('close');
    for (i=0; i<close.length; i++){
        close[i].onclick = function(){
            var d = this.parentElement;
            d.style.display = "none";
        }
    }
}
