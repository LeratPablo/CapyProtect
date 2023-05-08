function displayVideo() {
    var nameInput = document.getElementById("name").value;
    var nicknameInput = document.getElementById("nickname").value;

    if (nameInput === "capy" && nicknameInput === "bara") {
        var embedUrl = "https://www.youtube.com/embed/d14_AocXLEA";

        var overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        overlay.style.zIndex = "9999";

        var iframe = document.createElement("iframe");
        iframe.src = embedUrl + "?autoplay=1";
        iframe.allow = "autoplay; encrypted-media";
        iframe.allowFullscreen = true;
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";

        overlay.appendChild(iframe);
        document.body.appendChild(overlay);

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                overlay.remove();
            }
        });
    }
    else {
        alert('You are now registered for the CapyPalooza ' + nameInput + " " + nicknameInput)
    }
}
