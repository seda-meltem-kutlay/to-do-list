//eski elemanlarda çarpıya basıldığında liste elamanını kaldırmak 
var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function(){
    this.parentElement.style.display = 'none';
  });
  

}

let x = `<span class="close">&times;</span>`// carpı işareti
//eleman ekleme
let inputDOM = document.querySelector('#task');
let ulDOM = document.querySelector('#list');
function newElement(){
if(inputDOM.value.length>0 ){
  
   let liDOM = document.createElement('li');
   liDOM.innerHTML= `${inputDOM.value} ${x}` 
   ulDOM.appendChild(liDOM)
   liDOM.addEventListener("click", blue)
   inputDOM.value = "" // inputa girilen değer temizlenir
   // çarpıya basıldığında liste elamanını kaldırmak 
$('li').hover(function(){
     $(this).find('span').click(function(){
      this.parentElement.style.display = 'none';
     })
})
//yeni elemanlara check classı eklemek 
  function blue(){
    liDOM.className == "checked" ? liDOM.classList.remove("checked"): liDOM.classList.add("checked")
  
}
   $(".success").toast('show')
}else{
   $(".error").toast('show')
}}
   
// eski elemanlara check classı eklemek 
 
let liAll = document.querySelectorAll('li');
for(let i =0; i<liAll.length;i++) {
   console.log(i)
   liAll[i].addEventListener("click", function(){
      liAll[i].className == "checked" ? liAll[i].classList.remove("checked"): liAll[i].classList.add("checked")
   })
}   