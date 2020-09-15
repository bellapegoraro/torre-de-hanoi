let torre1Arr = ["top", "middle", "bottom"];
let torre2Arr = [];
let torre3Arr = [];
let aux = [];

function createInitialTower(){

  let torre1 = document.getElementById("torre1");
  let torre2 = document.getElementById("torre2");
  let torre3 = document.getElementById("torre3");

  let coluna1 = document.createElement("div");
  coluna1.className = "coluna";
  coluna1.id = "coltorre1";
  torre1.appendChild(coluna1);

  let coluna2 = document.createElement("div");
  coluna2.className = "coluna";
  coluna2.id = "coltorre2";
  torre2.appendChild(coluna2);

  let coluna3 = document.createElement("div");
  coluna3.className = "coluna";
  coluna3.id = "coltorre3";
  torre3.appendChild(coluna3);

  let topDisc = document.createElement("div");
  topDisc.id = "top";
  torre1.appendChild(topDisc);

  let middleDisc = document.createElement("div");
  middleDisc.id = "middle";
  torre1.appendChild(middleDisc); 

  let bottomDisc = document.createElement("div");
  bottomDisc.id = "bottom";
  torre1.appendChild(bottomDisc); 
}

createInitialTower();

function moveDisc(arrAux, arr2, clickedTower){
  if (arrAux.length === 0){
    takeDisc(arr2);
  } else {
    putDisc(arr2, clickedTower);
  }
}

function takeDisc(arr){
  let removedDisc = arr.shift();
  aux.push(removedDisc);

  document.getElementById(`${removedDisc}`).remove();
}

function putDisc(arr, clickedTower){  
  arr.unshift(aux[0]); 

  let col = document.getElementById(`col${clickedTower}`);
  let newDisc = document.createElement("div");
  newDisc.id = `${aux[0]}`; 
  col.after(newDisc);

  aux = [];
}

let tower1_function = document.getElementById("torre1").onclick = function(){

    moveDisc(aux, torre1Arr, "torre1"); 

}

let tower2_function = document.getElementById("torre2").onclick = function(){

    moveDisc(aux, torre2Arr, "torre2"); 

}

let tower3_function = document.getElementById("torre3").onclick = function(){

    moveDisc(aux, torre3Arr, "torre3"); 

}

























// function firstClick(){

//   document.getElementById(torre1[0]).style = "display: none";
//   let retirado = torre1.shift();
//   aux.push(retirado);

//   return retirado;
// }

// let retirado = firstClick(); 


// let torre1 = document.getElementById('torre1').id
// console.log(torre1)

// //Pega todas as divs
// const cells = document.querySelectorAll('div')

// //pega o id
// const handleClick = function(event) {
//     const cell = event.target
//     let a = cell.id
//     console.log(a);
//    // sumir(cell.id)
// }
// const handleClick = function(event) {
//     const cell = event.target
//     console.log(a);
//    // sumir(cell.id)
// }

// //itera nas divs e coloca um event listener de click
// for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('click', handleClick);
// }

// //some com as divs
// function sumir(id){
//     document.getElementById(id).style = "display: none"
//     aparecer(id)
// }

// function aparecer(id){
//     document.getElementById(id).classList.remove('.colunaTop')
// }













// function currentDiv(){

//   let current = event.currentTarget;

//   console.log(current);


// }

// let btCurrent = document.getElementById("conteiner");
// btCurrent.addEventListener("click", currentDiv); 

