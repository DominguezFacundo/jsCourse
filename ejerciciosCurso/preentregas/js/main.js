
// arrays

const topArray = [top5, top4, top3, top2, top1]
const jungleArray = [jungle5, jungle4, jungle3, jungle2, jungle1]
const midArray = [mid5, mid4, mid3, mid2, mid1]
const adcArray = [adc5, adc4, adc3, adc2, adc1]
const supportArray = [support5, support4, support3, support2, support1]

const allPlayersArray = [
  top5, top4, top3, top2, top1,
  jungle1, jungle2, jungle3, jungle4, jungle5,
  mid1, mid2, mid3, mid4, mid5,
  adc1, adc2, adc3, adc4, adc5,
  support1, support2, support3, support4, support5
]

const myTeam = []

// functions


/* Row Rendering Function */
const rowRendering = (array, container) => {
  array.forEach((player) => {
    const card = document.createElement("div")
    card.innerHTML = `
    <div class="card">
      <h3 class="role">${player.role}</h3>
      <img src="assets/fotosJugadores/${player.image}" class="${player.role}Img" alt=" ${player.name}'s image">
      <div class="cardBody">
        <h4 class="cardTitle">${player.name}</h4>
        <p class="cardText">PUESTO ${player.topFive}</p>
        <button data-id="${player.name}" class="addPlayerButton">Elegir</button>
      </div>
    </div>
    `
    container.append(card)
  })
}

const myTeamRendering = () => {
  myTeam.forEach((player) => {
    const card = document.createElement("div")
    card.innerHTML = `
    <div class="card">
      <h3 class="role">${player.role}</h3>
      <img src="assets/fotosJugadores/${player.image}" class="${player.role}Img" alt=" ${player.name}'s image">
      <div class="cardBody">
        <h4 class="cardTitle">${player.name}</h4>
        <p class="cardText">PUESTO ${player.topFive}</p>
      </div>
    </div>
    `
    myTeamContainer.append(card)
  })
}

/* Add player Function */
const addPlayer = (e) => {
  const playerName = e.target.getAttribute("data-id")
  const playerFound = allPlayersArray.find((player) => player.name === playerName)
  /* hiding container */
  if (playerFound.role == "top") {
    myTeam.push(playerFound)
    topContainer.style.display = "none"
  } else if (playerFound.role == "jungla") {
    myTeam.push(playerFound)
    jungleContainer.style.display = "none"
  } else if (playerFound.role == "mid") {
    myTeam.push(playerFound)
    midContainer.style.display = "none"
  } else if (playerFound.role == "adc") {
    myTeam.push(playerFound)
    adcContainer.style.display = "none"
  } else if (playerFound.role == "support") {
    myTeam.push(playerFound)
    supportContainer.style.display = "none"
  }
  console.log(`${playerFound.name} fue agregado a tu equipo!`)

  /* rendering selected team */
  if (myTeam.length === 5) {
    alert("Tu equipo esta completo!")
    const myTeamContainer = document.getElementById("myTeamContainer")
    myTeamRendering()
    myTeamContainer.style.display = "display"
    console.log('Tu equipo es: ', myTeam)
  }

  /* saving selection to LS */
  localStorage.setItem('myTeam', JSON.stringify(myTeam))
}

if (localStorage.getItem('myTeam') != null) {
  myTeam = JSON.parse(localStorage.getItem('myTeam'))
  myTeamRendering()
}


/* top injection */
const topContainer = document.getElementById("topContainer")
rowRendering(topArray, topContainer)

/* jungle injection */
const jungleContainer = document.getElementById("jungleContainer")
rowRendering(jungleArray, jungleContainer)

/* mid injection */
const midContainer = document.getElementById("midContainer")
rowRendering(midArray, midContainer)

/* adc injection */
const adcContainer = document.getElementById("adcContainer")
rowRendering(adcArray, adcContainer)

/* support injection */
const supportContainer = document.getElementById("supportContainer")
rowRendering(supportArray, supportContainer)



const addButtons = document.querySelectorAll(".addPlayerButton")
addButtons.forEach((addButton) => {
  addButton.addEventListener("click", addPlayer)
})