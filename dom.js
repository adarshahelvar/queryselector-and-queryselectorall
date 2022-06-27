var submit = document.querySelector('input[type="submit"]');
submit.value="send";

var items=document.querySelector('.list-group-item:nth-child(2)');
items.style.backgroundColor ="red";
var items=document.querySelector('.list-group-item:nth-child(3)');
items.style.visibility = "hidden";

//QuerySelectorALL

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = "green";
}

