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

document.getElementById("three").hidden = true

document.getElementsByClassName("sundt")[1].setAttribute("class","usundt")

let nyNode = document.getElementById("two").parentNode.nodeName

let nyNode1 = document.getElementById("liste").firstElementChild.nodeName
console.log(nyNode1)

let nyNode2 = document.getElementById("liste").lastElementChild.nodeName
console.log(nyNode2)

