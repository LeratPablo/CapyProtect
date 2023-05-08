function displayVideo() {

    // On récupère la valeur des champs input "name" et "nickname"
    var nameInput = document.getElementById("name").value;
    var nicknameInput = document.getElementById("nickname").value;

    if (nameInput === "capy" && nicknameInput === "bara") {
        // variable qui contient le lien vers la vidéo
        var embedUrl = "https://www.youtube.com/embed/d14_AocXLEA";

        var overlay = document.createElement("div"); // On créer un bloc div dans notre page / On créer une boite
        overlay.style.position = "fixed"; // On fixe sa position (l'élément ne bougera de la ou on l'a mis)
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        overlay.style.zIndex = "9999"; // Mettre la vidéo au premier plan

        var iframe = document.createElement("iframe"); // On créer un iframe pour inscruster une vidéo / On créer un élément
        iframe.src = embedUrl + "?autoplay=1"; // On ajoute un paramètre pour que la vidéo se lance automatiquement
        iframe.allowFullscreen = false; // On interdit le plein écran
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";

        overlay.appendChild(iframe); // On met cet élément dans la boite
        document.body.appendChild(overlay); // On affiche la boite sur la page

        document.addEventListener("keydown", function (event) { // On écoute toutes les touches qui sont appuyée
            if (event.key === "Escape") { // Si on appuie sur Echape
                overlay.remove(); // On retire la boite
            }
        });
    }
    else {
        alert('You are now registered for the CapyPalooza ' + nameInput + " " + nicknameInput);
    }
}
