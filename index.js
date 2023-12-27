// Plan d'action
/**
 * 1- Créer un server HTTP
 *  - importer le module http
 *  - Créer un server avec la méthode .createServer() rangée dans le module http
 *  - Indiquer au server le port qu'il faudra utiliser (la méthode .listen() )
 * 2- Définir le comportement de notre server
 *  - Créer la fonction de callback qui sera utilisée par le server à chaque requête reçue
 *      - Editer le header pour définir le Content-Type
 *      - Mettre en place un switch statement qui fera office de routeur (comme un aiguilleur SNCF)
 *      - Créer des fonctions qui seront appelées par notre routeur
 */

// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const http = require('http');

// Hit parade, classé du premier au dernier.
const hitParade = require('./hitParade');


// On importe notre librairie de fonctions
const functionLib = require('./functionLib');

// Votre code va ici
let songCount = 0;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html;charset=utf8");

    switch (req.url) {
        case "/":
            songCount++;
            functionLib.showHomePage(res);            
            break;

        case "/classement":
            functionLib.showRanking(res, hitParade);
            
            break;

        case "/stats":
            functionLib.showStats(res, songCount);
            
            break;
    
        default:
            console.log("Tiens une favicon !", req.url);
            break;
    }
    res.end();
});



server.listen(3000);







