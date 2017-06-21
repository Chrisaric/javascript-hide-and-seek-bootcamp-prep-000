function getFirstSelector(selector){
 var I = document.querySelector(selector)
 return I
}

function nestedTarget() {
  var i = document.getElementById('nested').querySelector('div.target')
  return i
}

function increaseRankBy(n) {
  var z = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (let i = 0; i < z.length; i++) {
    z[i].innerHTML = parseInt( n + z[i] )
  }
}



function deepestChild() {
  var parent = document.getElementById('grand-node')
  var child = parent.querySelector('div')

  while (child) {
    parent = child
    child = parent.querySelector('div')
  }
  return parent
}
