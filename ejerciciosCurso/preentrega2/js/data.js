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



// jungle players

const jungle5 = new Player("juhan", "noPhoto.png", "jungla", "5", "Hecarim", "psg talon", "Corea del sur")
const jungle4 = new Player("inspired", "evilGeniuses/inspired.png", "jungla", "4", "Trundle", "evil geniuses", "Polonia")
const jungle3 = new Player("jankos ", "G2/jankos.png", "jungla", "3", "Xin Zhao", "g2 esports", "Polonia")
const jungle2 = new Player("wei", "RNG/wei.png", "jungla", "2", "Viego", "rng", "China")
const jungle1 = new Player("oner", "T1/oner.png", "jungla", "1", "Lee Sin", "t1", "Corea del sur")



// mid players

const mid5 = new Player("bay", "noPhoto.png", "mid", "5", "Syndra", "psg talon", "Corea del sur")
const mid4 = new Player("jojopyun", "noPhoto.png", "mid", "4", "Viktor", "evil geniuses", "Canada")
const mid3 = new Player("caps", "G2/caps.png", "mid", "3", "Sylas", "g2 esports", "Dinamarca")
const mid2 = new Player("xiaohu", "RNG/xiaohu.png", "mid", "2", "Galio", "rng", "China")
const mid1 = new Player("faker", "T1/faker.png", "mid", "1", "Ahri", "t1", "Corea del sur")



// adc players

const adc5 = new Player("unified", "psgTalon/unified.png", "adc", "5", "Jinx", "psg talon", "Hong Kong")
const adc4 = new Player("danny", "evilGeniuses/danny.png", "adc", "4", "Zeri", "evil geniuses", "USA")
const adc3 = new Player("flakked", "G2/flakked.png", "adc", "3", "Xayah", "g2 esports", "España")
const adc2 = new Player("gala", "RNG/gala.png", "adc", "2", "Aphelios", "rng", "China")
const adc1 = new Player("gumayusi", "T1/gumayusi.png", "adc", "1", "Caitlyn", "t1", "Corea del sur")



// support players

const support5 = new Player("kaiwing", "psgTalon/kaiwing.png", "support", "5", "Nautilus", "psg talon", "Hong Kong")
const support4 = new Player("vulcan", "evilGeniuses/vulcan.png", "support", "4", "Alistar", "evil geniuses", "Canada")
const support3 = new Player("targamas", "G2/targamas.png", "support", "3", "Rakan", "g2 esports", "Bélgica")
const support2 = new Player("ming", "RNG/ming.png", "support", "2", "Leona", "rng", "China")
const support1 = new Player("keria", "T1/keria.png", "support", "1", "Thresh", "t1", "Corea del sur")
