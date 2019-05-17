(function () {
    var header = document.querySelector(".package-header");
    var etitle = document.querySelector(".title");
    var title = etitle
        .textContent
        .split(" ");
    var version = title[0] + ": ^" + title[1];

    var button = document.createElement("a");
    button.setAttribute("class", "package-tag");
    button.innerHTML = "Copy to Clipboard";
    button.addEventListener("click",function() {
        var tempInput = document.createElement("input");
        tempInput.style = "position: absolute; left: -1000px; top: -1000px";
        tempInput.value = version;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    });

    etitle.appendChild(button);
})();