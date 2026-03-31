function countWords(){

    var text = document.getElementById("text").value;

    text = text.trim();

    if (text.length === 0){
        document.getElementById("out").textContent =
        "Введіть текст.";
        return;
    }

    var words = text.split(/\s+/);

    document.getElementById("out").textContent =
    "Кількість слів: " + words.length;
}
  