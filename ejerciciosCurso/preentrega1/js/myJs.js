// class declaration

class Player {
    constructor(name, role, topFive, bestChampion, team, country) {
      this.name = name
      this.role = role
      this.topFive = topFive
      this.bestChampion = bestChampion
      this.team = team
      this.country = country
    }
  }
  
  
  // top players
  
  const top5 = new Player("hanabi", "top", "5", "Gnar", "psg talon", "Taiwan")
  const top4 = new Player("impact", "top", "4", "Gangplank", "evil geniuses", "Corea del sur")
  const top3 = new Player("brokenblade", "top", "3", "Sion", "g2 esports", "Alemania")
  const top2 = new Player("Bin", "top", "2", "Gwen", "rng", "China")
  const top1 = new Player("Zeus", "top", "1", "Gragas", "t1", "Corea del sur")
  
  // jungle players
  
  const jungle1 = new Player("juhan", "jungla", "5", "Hecarim", "psg talon", "Corea del sur")
  const jungle2 = new Player("inspired", "jungla", "4", "Trundle", "evil geniuses", "Polonia")
  const jungle3 = new Player("jankos ", "jungla", "3", "Xin Zhao", "g2 esports", "Polonia")
  const jungle4 = new Player("wei", "jungla", "2", "Viego", "rng", "China")
  const jungle5 = new Player("oner", "jungla", "1", "Lee Sin", "t1", "Corea del sur")
  
  // mid players
  
  const mid1 = new Player("bay", "mid", "5", "Syndra", "psg talon", "Corea del sur")
  const mid2 = new Player("jojopyun", "mid", "4", "Viktor", "evil geniuses", "Canada")
  const mid3 = new Player("caps", "mid", "3", "Sylas", "g2 esports", "Dinamarca")
  const mid4 = new Player("xiaohu", "mid", "2", "Galio", "rng", "China")
  const mid5 = new Player("faker", "mid", "1", "Ahri", "t1", "Corea del sur")
  
  
  // adc players
  
  const adc1 = new Player("unified", "adc", "5", "Jinx", "psg talon", "Hong Kong")
  const adc2 = new Player("danny", "adc", "4", "Zeri", "evil geniuses", "USA")
  const adc3 = new Player("flakked", "adc", "3", "Xayah", "g2 esports", "España")
  const adc4 = new Player("gala", "adc", "2", "Aphelios", "rng", "China")
  const adc5 = new Player("gumayusi", "adc", "1", "Caitlyn", "t1", "Corea del sur")
  
  // support players
  
  const support1 = new Player("kaiwing", "support", "5", "Nautilus", "psg talon", "Hong Kong")
  const support2 = new Player("vulcan", "support", "4", "Alistar", "evil geniuses", "Canada")
  const support3 = new Player("targamas", "support", "3", "Rakan", "g2 esports", "Bélgica")
  const support4 = new Player("ming", "support", "2", "Leona", "rng", "China")
  const support5 = new Player("keria", "support", "1", "Thresh", "t1", "Corea del sur")
  
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