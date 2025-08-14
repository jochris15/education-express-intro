class Game {
    constructor(id, name, gameImg, releaseDate, developer, genre) {
        this.id = id;
        this.name = name;
        this.gameImg = gameImg;
        this.releaseDate = releaseDate;
        this.developer = developer;
        this.genre = genre;
    }

    get formattedReleaseDate() {
        return new Date(this.releaseDate).toLocaleDateString('us-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
}

module.exports = Game;