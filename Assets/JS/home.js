function required()
{
   document.getElementById("description").required=false;
}

var id=document.getElementById("category");
console.log(id.options[id.selectedIndex].text);

if(id.options[id.selectedIndex].text=="Personal")
{
   document.getElementById("item-category").style.backgroundColor="red";
}