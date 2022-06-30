// arrays

let topArray = []
let jungleArray = []
let midArray = []
let adcArray = []
let supportArray = []

let allPlayersArray = []

let myTeam = []

// functions


const getData = () => {
  if (allPlayersArray != null) {
  fetch('../data.json')
  .then(response => response.json())
  .then(players => {
    allPlayersArray = players.data
  })
  .then(() => {
    allPlayersArray.forEach(player => {
      if (player.role === "top") {
        topArray.push(player)
      } else if (player.role === "jungla") {
        jungleArray.push(player)
      } else if (player.role === "mid") {
        midArray.push(player)
      } else if (player.role === "adc") {
        adcArray.push(player)
      } else if (player.role === "support") {
        supportArray.push(player)
      }
    })
  })
  .then(() => {
    landingPage()
  })
  .catch(error => console.log(error))
}
}

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
  const addButtons = document.querySelectorAll(".addPlayerButton")
  addButtons.forEach((addButton) => {
    addButton.addEventListener("click", addPlayer)
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


let landingPage = () => {
  console.log('se llamo a landingPage');
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
}


/* Add player Function */
const addPlayer = (e) => {
  const playerName = e.target.getAttribute("data-id")
  const playerFound = allPlayersArray.find((player) => player.name === playerName)

  const isTop = playerFound.role === "top"
  const isJungle = playerFound.role === "jungla"
  const isMid = playerFound.role === "mid"
  const isAdc = playerFound.role === "adc"
  const isSupport = playerFound.role === "support"


  /* hiding container */

  isTop ? (myTeam.push(playerFound), topContainer.style.display = "none")
    : isJungle ? (myTeam.push(playerFound), jungleContainer.style.display = "none")
      : isMid ? (myTeam.push(playerFound), midContainer.style.display = "none")
        : isAdc ? (myTeam.push(playerFound), adcContainer.style.display = "none")
          : isSupport ? (myTeam.push(playerFound), supportContainer.style.display = "none")
            : console.log("como llegaste aca ?")

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: "success",
    title: `${playerName} fue agregado a tu equipo`,
    color: "#FAFAFA",
    background: "linear-gradient(to right, #000000 25%, #258843)"
  })

  /* rendering selected team */
  if (myTeam.length === 5) {
    Swal.fire({
      icon: 'success',
      title: 'Su equipo esta completo!',
      color: "#FAFAFA",
      background: "black",
    })
    const myTeamContainer = document.getElementById("myTeamContainer")
    myTeamRendering()
    myTeamContainer.style.display = "display"
    console.log('Tu equipo es: ', myTeam)
  }

  /* saving selection to LS */
  localStorage.setItem('myTeam', JSON.stringify(myTeam))
}


(localStorage.getItem('myTeam') != null && myTeam < 5) ? (
  Swal.fire({
    title: 'Ya tiene un equipo guardado!',
    text: "Desea borrarlo?",
    iconColor: '#ffff00',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#258843',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, bórrelo!',
    cancelButtonText: 'No, mejor no!',
    color: "#FAFAFA",
    background: "black",
  }).then((result) => {
    result.isConfirmed ? (
      Swal.fire({
        title: 'Equipo eliminado!',
        text: "Ya puede elegir un nuevo equipo",
        icon: 'success',
        background: "black",
        color: "#FAFAFA",
        confirmButtonColor: '#258843',
      }),
      localStorage.removeItem('myTeam'),
      myTeamContainer.innerHTML = "",
      getData()
    )
      : (myTeam = JSON.parse(localStorage.getItem('myTeam')),
        myTeamRendering())
  }))
  : getData()
