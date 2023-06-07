const LS = JSON.parse(localStorage.getItem('arrayElement')) || []

let array3 = []

if(LS.length > 0){
  LS.forEach(element => {
    array3.push(element)
  });
}

const nuevoElemento = () => {
  array3.push('asdasdsa')
  localStorage.setItem('arrayElement', JSON.stringify(array3))
}

/* Convirtiendo de String a Objeto */
JSON.parse(localStorage.getItem('array'))

/* Convertir un Objeto o Array en String */
localStorage.setItem('arrayElement', JSON.stringify(array3))

/* --------------------------------------------------- */

