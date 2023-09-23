var frstatus = document.querySelector("h5")
var add = document.querySelector("#add")
var btn = document.querySelector("button")
var stat = 0

add.addEventListener("click", function(){
    if(stat == 0){
        frstatus.innerHTML = "Friend"
        frstatus.style.color = "Green"
        add.innerHTML = "Remove Friend"
        btn.style.backgroundColor = "grey"
        btn.style.color = "Black"
        stat = 1
    }
    else{
        frstatus.innerHTML = "Stranger"
        frstatus.style.color = "Hotpink"
        add.innerHTML = "Add Friend"
        btn.style.backgroundColor = "Orange"
        btn.style.color = "azure"
        stat = 0
    }
})