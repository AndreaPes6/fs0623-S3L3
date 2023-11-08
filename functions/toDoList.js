const input = document.querySelector("#cosaDaFare")
const todoList = document.querySelector("#contenitoreLista")

function aggiungi() {
    if (input.value === "") {
        alert("Devi inserire qualcosa")
    } else {
        let lista = document.createElement("li")
        lista.innerHTML = input.value
        todoList.appendChild(lista)
        let crocetta = document.createElement("span")
        crocetta.innerHTML = "\u00d7"
        lista.appendChild(crocetta)
        input.value = ""
    }
}

todoList.addEventListener(
    "click",
    function (daFare) {
        if (daFare.target.tagName === "LI") {
            daFare.target.classList.toggle("checked");
        } else if (daFare.target.tagName == "SPAN") {
            daFare.target.parentElement.remove();
        }
    },
)


