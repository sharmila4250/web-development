function addData(){
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let row=`<tr>
    <td>${name}</td>
    <td>${age}</td>
</tr>`;
var ele= document.getElementById('data');
ele.innerHTML=ele.innerHTML+row;
document.getElementById("name").value="";
document.getElementById("age").value="";
}
