const functionLib = {
    showHomePage: function(res) {
        res.write("Je m'appelle Charlu, je m'appelle Lulu, vous êtes chez O'Clock !");
    },

    showRanking: function(res, tableau) {
        let classement = "";
        console.log(tableau);
        for(const song of tableau) {
            classement += `${song.position} : ${song.artist} - ${song.title} <br/>`;
        }
        res.write(classement);
    },

    showStats: function(res, songCount) {
        res.write(`La chanson de Charlu et Lulu a été vue ${songCount} fois !`);
    },
}

module.exports = functionLib;