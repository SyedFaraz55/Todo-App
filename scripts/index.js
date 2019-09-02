document.addEventListener("DOMContentLoaded",function(){
  var btn = document.querySelector('button');
  btn.addEventListener('click',AddItem);
  load();
});

function AddItem(event){

  event.preventDefault();
  var text = document.querySelector('input');
  var input = document.querySelector('input').value;
  if(input!=''){
    const li = document.createElement('li');
    const liText= document.createTextNode(input);
    li.appendChild(liText);

    const span = document.createElement('span');
    const spanText = document.createTextNode('x');
    span.appendChild(spanText);

    li.className ='li';
    li.appendChild(span);
    document.getElementsByTagName('ul')[0].appendChild(li);
    text.value= '';
  } else {
    alert('Please Enter an item ');
  }
  load();
}

function load() {
  var close = document.querySelectorAll('span');
  for(let i=0; i<close.length;i++){
    close[i].addEventListener('click',function(){
      close[i].parentNode.remove();
    });
  }
}
$('#sortable').sortable();
$('#sortable').disableSelection();
