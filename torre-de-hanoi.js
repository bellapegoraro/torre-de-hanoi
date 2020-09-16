let torre1Arr = ["top", "middle", "bottom"];
let torre2Arr = [];
let torre3Arr = [];
let aux = [];
let counter = 0;
document.getElementById("jogadasNum").textContent = counter++;

function timer() {

  let minutesLabel = document.getElementById("minutes");
  let secondsLabel = document.getElementById("seconds");
  let totalSeconds = 0;

  setInterval(setTime, 1000);

  function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }

  function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
}

function createInitialTower() {

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

  let divCounter = document.getElementById("statsContainer");
  let counterSpan = document.createElement("span");
  divCounter.appendChild(counterSpan);

  let modoJogador = document.getElementById('modoJogador');
  modoJogador.innerText = 'Clique no botão "iniciar" para começar a jogar';
  modoJogador.style = "padding-bottom: 20px";

  let restartDis = document.getElementById("btRestart");
  restartDis.setAttribute("disabled", "true");
  restartDis.classList.add('disabled');
}
createInitialTower();

function inicialize() {

  let modoJogador = document.getElementById('modoJogador')
  modoJogador.innerText = "Pegue um disco para mudá-lo de lugar"

  timer()
  let disable = document.getElementById("btStart");
  disable.setAttribute("disabled", "true");
  disable.classList.add('disabled')

  let restartDis = document.getElementById("btRestart");
  restartDis.removeAttribute("disabled")
  restartDis.classList.remove('disabled')


  function moveDisc(arrAux, arr2, clickedTower) {
    if (arrAux.length === 0) {
      modoJogador.innerText = "Agora, escolha uma torre para colocá-lo"
      takeDisc(arr2);
    } else {
      putDisc(arr2, clickedTower);
    }
  }

  function takeDisc(arr) {

    let removedDisc = arr.shift();
    aux.push(removedDisc);

    document.getElementById(`${removedDisc}`).remove();

    let disco = document.getElementById('disco')
    let discDiv = document.createElement('div')
    discDiv.id = aux[0]
    disco.appendChild(discDiv)
  }

  function putDisc(arr, clickedTower) {

    document.getElementById("jogadasNum").textContent = counter++;

    arr.unshift(aux[0]);

    let col = document.getElementById(`col${clickedTower}`);
    let newDisc = document.createElement("div");
    newDisc.id = `${aux[0]}`;
    col.after(newDisc);
    document.getElementById(`${aux[0]}`).remove()
    aux = [];
    modoJogador.innerText = "Pegue um disco para muda-lo de lugar"


    let width0 = newDisc.clientWidth;
    let width1 = document.getElementById(`${clickedTower}`).lastElementChild.clientWidth;

    // condição de derrota
    if (width0 > width1) {
      modoJogador.innerText = ""
      let modalLoser = document.getElementById("modalLoser");
      modalLoser.classList.remove("oculta2");
      let conteinerDiv = document.getElementById("conteiner");
      conteinerDiv.style = "cursor: none"  
    }

    // condição de vitória
    if (clickedTower === "torre3" && arr.length === 3) {
      modoJogador.innerText = ""
      let modalWinner = document.getElementById("modalWinner");
      modalWinner.classList.remove("oculta");
      let conteinerDiv = document.getElementById("conteiner");
      conteinerDiv.style = "cursor: none"
    }
  }

  document.getElementById("torre1").onclick = function () {

    if (aux.length !== 0 || torre1Arr.length !== 0) {
      moveDisc(aux, torre1Arr, "torre1");
    }

  }

  document.getElementById("torre2").onclick = function () {

    if (aux.length !== 0 || torre2Arr.length !== 0) {
      moveDisc(aux, torre2Arr, "torre2");
    }

  }

  document.getElementById("torre3").onclick = function () {

    if (aux.length !== 0 || torre3Arr.length !== 0) {
      moveDisc(aux, torre3Arr, "torre3");
    }

  }

}
document.getElementById('btStart').addEventListener('click', inicialize)

function restart() {
  location.reload();
}
document.getElementById("btRestart").addEventListener("click", restart);
document.getElementById("btJogarNovamente").addEventListener("click", restart);
document.getElementById("btJogarNovamente2").addEventListener("click", restart);




















