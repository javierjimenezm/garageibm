var store = [];

var getData = function(){
    var name=document.getElementById("name").value;
    var addr=document.getElementById("addr").value;
    console.log(name+" "+addr);
    let obj = {name: name, addr: addr}
    store.push(obj)
    console.log(store)
        
         for(let pos of store){
             console.log(pos)
             
                    document.getElementById("variable").insertAdjacentHTML("beforebegin", pos.name + ' ' + pos.addr + "<br>");
             
         }
    
     store.pop();
    
}

