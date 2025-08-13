class Game {
    constructor(id, name, gameImg, releaseDate, developer, genre) {
        this.id = id;
        this.name = name;
        this.gameImg = gameImg;
        this.releaseDate = releaseDate;
        this.developer = developer;
        this.genre = genre;
    }
}

module.exports = Game;