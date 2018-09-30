let findNode = document.getElementById("three")
findNode.innerText = "Kiksekage"

let x = document.getElementsByClassName("usundt")
console.log(x.length)

let x1 = document.getElementsByTagName("li")
console.log(x1)

let result = document.getElementsByClassName("sundt")
for (let i = 0; i < result.length; i++){
    let bla = result[i]
    console.log(bla)

}
document.getElementById("one").setAttribute("class", "sundt")



for (let i = 0; i < document.getElementsByClassName("sundt").length; i++){
    document.getElementsByClassName("sundt")[1].setAttribute("class", "usundt")
    
}

document.getElementById("four").hidden = true

let nyNode = document.getElementById("two").parentNode.nodeName

let nyNode1 = document.getElementById("liste").firstElementChild.nodeName
console.log(nyNode1)

let nyNode2 = document.getElementById("liste").lastElementChild.nodeName
console.log(nyNode2)

let listeSund = document.getElementById("liste")
let newli = document.createElement("li")
let newText = document.createTextNode("Salat")
newli.setAttribute("class", "sundt")
newli.appendChild(newText)
listeSund.appendChild(newli)

let list = document.getElementById("liste")
list.insertBefore(newli, list.childNodes[1])


for (let i=0;i<=document.getElementsByClassName('usundt').length;i++) {
    document.getElementById('listeUsund').appendChild(document.getElementsByClassName('usundt')[0]);
    console.log(i)
}
