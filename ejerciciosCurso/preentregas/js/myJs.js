// class declaration

class Player {
  constructor(name, image, role, topFive, bestChampion, team, country) {
    this.name = name
    this.image = image
    this.role = role
    this.topFive = topFive
    this.bestChampion = bestChampion
    this.team = team
    this.country = country
  }
}


// top players

const top5 = new Player("hanabi", "psgTalon/hanabi.png", "top", "5", "Gnar", "psg talon", "Taiwan")
const top4 = new Player("impact", "evilGeniuses/impact.png", "top", "4", "Gangplank", "evil geniuses", "Corea del sur")
const top3 = new Player("brokenblade", "G2/brokenBlade.png", "top", "3", "Sion", "g2 esports", "Alemania")
const top2 = new Player("Bin", "RNG/bin.png", "top", "2", "Gwen", "rng", "China")
const top1 = new Player("Zeus", "T1/zeus.png", "top", "1", "Gragas", "t1", "Corea del sur")

const topArray = [top5, top4, top3, top2, top1]

// jungle players

const jungle5 = new Player("juhan", "noPhoto.png", "jungla", "5", "Hecarim", "psg talon", "Corea del sur")
const jungle4 = new Player("inspired", "evilGeniuses/inspired.png", "jungla", "4", "Trundle", "evil geniuses", "Polonia")
const jungle3 = new Player("jankos ", "G2/jankos.png", "jungla", "3", "Xin Zhao", "g2 esports", "Polonia")
const jungle2 = new Player("wei", "RNG/wei.png", "jungla", "2", "Viego", "rng", "China")
const jungle1 = new Player("oner", "T1/oner.png", "jungla", "1", "Lee Sin", "t1", "Corea del sur")

const jungleArray = [jungle5, jungle4, jungle3, jungle2, jungle1]

// mid players

const mid5 = new Player("bay", "noPhoto.png", "mid", "5", "Syndra", "psg talon", "Corea del sur")
const mid4 = new Player("jojopyun", "noPhoto.png","mid", "4", "Viktor", "evil geniuses", "Canada")
const mid3 = new Player("caps", "G2/caps.png", "mid", "3", "Sylas", "g2 esports", "Dinamarca")
const mid2 = new Player("xiaohu", "RNG/xiaohu.png", "mid", "2", "Galio", "rng", "China")
const mid1 = new Player("faker", "T1/faker.png", "mid", "1", "Ahri", "t1", "Corea del sur")

const midArray = [mid5, mid4, mid3, mid2, mid1]

// adc players

const adc5 = new Player("unified", "psgTalon/unified.png", "adc", "5", "Jinx", "psg talon", "Hong Kong")
const adc4 = new Player("danny", "evilGeniuses/danny.png", "adc", "4", "Zeri", "evil geniuses", "USA")
const adc3 = new Player("flakked", "G2/flakked.png", "adc", "3", "Xayah", "g2 esports", "España")
const adc2 = new Player("gala", "RNG/gala.png", "adc", "2", "Aphelios", "rng", "China")
const adc1 = new Player("gumayusi", "T1/gumayusi.png", "adc", "1", "Caitlyn", "t1", "Corea del sur")

const adcArray = [adc5, adc4, adc3, adc2, adc1]

// support players

const support5 = new Player("kaiwing", "psgTalon/kaiwing.png", "support", "5", "Nautilus", "psg talon", "Hong Kong")
const support4 = new Player("vulcan", "evilGeniuses/vulcan.png", "support", "4", "Alistar", "evil geniuses", "Canada")
const support3 = new Player("targamas", "G2/targamas.png", "support", "3", "Rakan", "g2 esports", "Bélgica")
const support2 = new Player("ming", "RNG/ming.png", "support", "2", "Leona", "rng", "China")
const support1 = new Player("keria", "T1/keria.png", "support", "1", "Thresh", "t1", "Corea del sur")

const supportArray = [support5, support4, support3, support2, support1]

// all players

const playersArray = [
  top5, top4, top3, top2, top1,
  jungle1, jungle2, jungle3, jungle4, jungle5,
  mid1, mid2, mid3, mid4, mid5,
  adc1, adc2, adc3, adc4, adc5,
  support1, support2, support3, support4, support5
]

// functions

const showPlayerName = (player) => {
  console.log(`
  Nickname: ${player.name}`)
}

const showPlayer = (player) => {
  console.log(`
  Nickname: ${player.name}
  Rol: ${player.role}
  Posición en el ranking: ${player.topFive}
  Mejor campeón: ${player.bestChampion}
  Equipo: ${player.team}
  País de origen: ${player.country}
  `)
}

const myTeam = []

const showMyTeam = () => {
  console.log("Felicidades, aquí esta su equipo: ")
  myTeam.forEach((player) => {
    showPlayer(player)
  })
}

/* top injection */
const topContainer = document.getElementById("topContainer")
topArray.forEach((top) => {
  const card = document.createElement("div")
  card.innerHTML = `
  <div class="card">
    <h3 class="role">${top.role}</h3>
    <img src="assets/fotosJugadores/${top.image}" class="topImg" alt=" ${top.name}'s image">
    <div class="cardBody">
      <h4 class="cardTitle">${top.name}</h4>
      <p class="cardText">PUESTO ${top.topFive}</p>
      <button data-id="${top.name}" class="addPlayerButton">Elegir</button>
    </div>
  </div>
  `
  topContainer.append(card)
})

/* jungle injection */
const jungleContainer = document.getElementById("jungleContainer")
jungleArray.forEach((jungle) => {
  const card = document.createElement("div")
  card.innerHTML = `
  <div class="card">
    <h3 class="role">${jungle.role}</h3>
    <img src="assets/fotosJugadores/${jungle.image}" class="jungleImg" alt=" ${jungle.name}'s image">
    <div class="cardBody">
      <h4 class="cardTitle">${jungle.name}</h4>
      <p class="cardText">PUESTO ${jungle.topFive}</p>
      <button data-id="${jungle.name}" class="addPlayerButton">Elegir</button>
    </div>
  </div>
  `
  jungleContainer.append(card)
})

/* mid injection */
const midContainer = document.getElementById("midContainer")
midArray.forEach((mid) => {
  const card = document.createElement("div")
  card.innerHTML = `
  <div class="card">
    <h3 class="role">${mid.role}</h3>
    <img src="assets/fotosJugadores/${mid.image}" class="midImg" alt=" ${mid.name}'s image">
    <div class="cardBody">
      <h4 class="cardTitle">${mid.name}</h4>
      <p class="cardText">PUESTO ${mid.topFive}</p>
      <button data-id="${mid.name}" class="addPlayerButton">Elegir</button>
    </div>
  </div>
  `
  midContainer.append(card)
})

/* adc injection */
const adcContainer = document.getElementById("adcContainer")
adcArray.forEach((adc) => {
  const card = document.createElement("div")
  card.innerHTML = `
  <div class="card">
    <h3 class="role">${adc.role}</h3>
    <img src="assets/fotosJugadores/${adc.image}" class="adcImg" alt=" ${adc.name}'s image">
    <div class="cardBody">
      <h4 class="cardTitle">${adc.name}</h4>
      <p class="cardText">PUESTO ${adc.topFive}</p>
      <button data-id="${adc.name}" class="addPlayerButton">Elegir</button>
    </div>
  </div>
  `
  adcContainer.append(card)
})

/* support injection */
const supportContainer = document.getElementById("supportContainer")
supportArray.forEach((support) => {
  const card = document.createElement("div")
  card.innerHTML = `
  <div class="card">
    <h3 class="role">${support.role}</h3>
    <img src="assets/fotosJugadores/${support.image}" class="supportImg" alt=" ${support.name}'s image">
    <div class="cardBody">
      <h4 class="cardTitle">${support.name}</h4>
      <p class="cardText">PUESTO ${support.topFive}</p>
      <button data-id="${support.name}" class="addPlayerButton">Elegir</button>
    </div>
  </div>
  `
  supportContainer.append(card)
})

const addPlayer = (e) => {
  const playerName = e.target.getAttribute("data-id")
  const playerFound = playersArray.find((player) => player.name === playerName)
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
  if (myTeam.length === 5) {
    alert("Tu equipo esta completo!")
    const myTeamContainer = document.getElementById("myTeamContainer")
    myTeam.forEach((player) => {
      const card = document.createElement("div")
      card.innerHTML = `
      <div class="card">
    <h3 class="role">${player.role}</h3>
    <img src="assets/fotosJugadores/${player.image}" class="supportImg" alt=" ${player.name}'s image">
    <div class="cardBody">
      <h4 class="cardTitle">${player.name}</h4>
      <p class="cardText">PUESTO ${player.topFive}</p>
      <p class="cardText">${player.team}</p>
    </div>
  </div>
  `
      myTeamContainer.append(card)
    })
    myTeamContainer.style.display = "display"
    console.log('Tu equipo es: ', myTeam)
  }

}


const addButtons = document.querySelectorAll(".addPlayerButton")
addButtons.forEach((addButton) => {
  addButton.addEventListener("click", addPlayer)
})

const hideRow = () => {
  if (Player.role === "top") {
    topContainer.style.display = "none"
  } else if (Player.role === "jungla") {
    jungleContainer.style.display = "none"
  } else if (Player.role === "mid") {
    midContainer.style.display = "none"
  } else if (Player.role === "adc") {
    adcContainer.style.display = "none"
  } else if (Player.role === "support") {
    supportContainer.style.display = "none"
  }
      
}


const topButton = document.querySelectorAll(".addPlayerButton")
topButton.forEach((topButton) => {
  topButton.addEventListener("click", hideRow)
})





/* OLD METHOD

const choosePlayers = () => {
  chooseTopPlayer()
  chooseJunglePlayer()
  chooseMidPlayer()
  chooseAdcPlayer()
  chooseSupportPlayer()
  showMyTeam()
}

// top function

const chooseTopPlayer = () => {
  let topPlayer = prompt(
    "¿Qué jugador sera su top laner? (Hanabi, Impact, BrokenBlade, Bin, Zeus)").toLowerCase()

  switch (topPlayer) {
    case "hanabi":
      showPlayerName(top5)
      myTeam.push(top5)
      break
    case "impact":
      showPlayerName(top4)
      myTeam.push(top4)
      break
    case "brokenblade":
      showPlayerName(top3)
      myTeam.push(top3)
      break
    case "bin":
      showPlayerName(top2)
      myTeam.push(top2)
      break
    case "zeus":
      showPlayerName(top1)
      myTeam.push(top1)
      break
    default:
      alert("Por favor ingrese un nombre de jugador valido")
      chooseTopPlayer()
  }
}

// jungle function

const chooseJunglePlayer = () => {
  let junglePlayer = prompt("¿Qué jugador sera tu jungler? (Juhan, Inspired, Jankos, Wei, Oner)").toLowerCase()

  switch (junglePlayer) {
    case "juhan":
      showPlayerName(jungle1)
      myTeam.push(jungle1)
      break
    case "inspired":
      showPlayerName(jungle2)
      myTeam.push(jungle2)
      break
    case "jankos":
      showPlayerName(jungle3)
      myTeam.push(jungle3)
      break
    case "wei":
      showPlayerName(jungle4)
      myTeam.push(jungle4)
      break
    case "oner":
      showPlayerName(jungle5)
      myTeam.push(jungle5)
      break
    default:
      alert("Por favor ingrese un nombre de jugador valido")
      chooseJunglePlayer()
  }
}

// mid function

const chooseMidPlayer = () => {
  let midPlayer = prompt("¿Qué jugador sera tu mid laner? (Bay, Jojopyun, Caps, Xiaohu, Faker)").toLowerCase()

  switch (midPlayer) {
    case "bay":
      showPlayerName(mid1)
      myTeam.push(mid1)
      break
    case "jojopyun":
      showPlayerName(mid2)
      myTeam.push(mid2)
      break
    case "caps":
      showPlayerName(mid3)
      myTeam.push(mid3)
      break
    case "xiaohu":
      showPlayerName(mid4)
      myTeam.push(mid4)
      break
    case "faker":
      showPlayerName(mid5)
      myTeam.push(mid5)
      break
    default:
      alert("Por favor ingrese un nombre de jugador valido")
      chooseMidPlayer()
  }
}

// adc function

const chooseAdcPlayer = () => {
  let adcPlayer = prompt("¿Qué jugador sera tu ADC? (Unified, Danny, Flakked, GALA, Gumayusi)").toLowerCase()

  switch (adcPlayer) {
    case "unified":
      showPlayerName(adc1)
      myTeam.push(adc1)
      break
    case "danny":
      showPlayerName(adc2)
      myTeam.push(adc2)
      break
    case "flakked":
      showPlayerName(adc3)
      myTeam.push(adc3)
      break
    case "gala":
      showPlayerName(adc4)
      myTeam.push(adc4)
      break
    case "gumayusi":
      showPlayerName(adc5)
      myTeam.push(adc5)
      break
    default:
      alert("Por favor ingrese un nombre de jugador valido")
      chooseAdcPlayer()
  }
}

// support function

const chooseSupportPlayer = () => {
  let supportPlayer = prompt("¿Qué jugador sera tu support? (Kaiwing, Vulcan, Targamas, Ming, Keria)").toLowerCase()

  switch (supportPlayer) {
    case "kaiwing":
      showPlayerName(support1)
      myTeam.push(support1)
      break
    case "vulcan":
      showPlayerName(support2)
      myTeam.push(support2)
      break
    case "targamas":
      showPlayerName(support3)
      myTeam.push(support3)
      break
    case "ming":
      showPlayerName(support4)
      myTeam.push(support4)
      break
    case "keria":
      showPlayerName(support5)
      myTeam.push(support5)
      break
    default:
      alert("Por favor ingrese un nombre de jugador valido")
      chooseSupportPlayer()
  }
}


 const userFind = () => {
  let userFindings = prompt("Dame un rol").toLowerCase()

  let playerFound = playersArray.find((player) => player.role === userFindings)
  console.log(playerFound);
}


const userFilter = () => {
  let userSearch = prompt("Inserte nombre, rol o equipo de su jugador").toLowerCase()

  const filteredPlayer = playersArray.filter(player => player.name.includes(userSearch)
    || player.role.includes(userSearch)
    || player.team.includes(userSearch)
    || player.topFive.includes(userSearch))

  console.log(filteredPlayer)
} 


if (confirm("Armemos su dream team de league of legends!")) {
  choosePlayers()
} else if (confirm("Prefiere buscar un jugador en particular?")) {
  userFilter()
} else if
  (confirm("Encontrar el primer jugador que aparezca en el rol elegido?")) {
  userFind()
} else {
  alert("Gracias por usar nuestro programa")
}
 */