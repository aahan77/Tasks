let form = document.querySelector("form")
form.addEventListener("submit",myForm);

let details = JSON.parse(localStorage.getItem("student_details"))||[];

function myForm(event){
event.preventDefault();


let detail_obj={
    num:document.getElementById("num").value,
    name:document.getElementById("name").value,
    address:document.getElementById("address").value,
    marks:document.getElementById("marks").value
};
details.push(detail_obj);
localStorage.setItem("student_details",JSON.stringify(details));

window.location.reload();
};

let list = JSON.parse( localStorage.getItem("student_details"));

const append =(list)=>{
    let table= document.querySelector("tbody");
    table.innerText=null;
    list.forEach(function(el,i){
        let tr = document.createElement("tr");
    
        let td1= document.createElement('td');
        td1.innerText=el.num;
    
        let td2= document.createElement('td');
        td2.innerText=el.name;
    
        let td3= document.createElement('td');
        td3.innerText=el.address;
    
        let td4= document.createElement("td");
        td4.innerText=el.marks;
    
        let td5 = document.createElement('td');
        td5.innerText="Remove"
        td5.style.backgroundColor="red"
        td5.className="rmv"
        td5.onclick=()=>{
            removeItem(i);

        };
    
        tr.append(td1,td2,td3,td4,td5);
        
        table.append(tr);
    
    
    
    });

};

append(list);

function removeItem(index){
    list.splice(index,1);
    localStorage.setItem("student_details",JSON.stringify(list));
    append(list);
}

let searchbox = document.getElementById("search").value;
searchbox.addEventListener("input", function(){
    let trlist = document.querySelectorAll("tr")
    Array.from(trlist).forEach(function(el){
        let searchedtext= el.getElementsByTagName("td")[0].innerHTML;
        let searchedtextVal=searchbox.value;
        let re= new RegExp(searchedtextVal,'gi');

        if(searchedtext.match(re)){
            el.style.display="table-row"
        }else{
            el.style.display="none";
        }
    })
});