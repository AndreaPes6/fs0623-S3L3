const input = document.querySelector("#cosaDaFare")
const todoList = document.querySelector("#contenitoreLista")

function aggiungi() {
    if (input.value === "") {
        alert("Devi inserire qualcosa")
    } else {
        let li = document.createElement("li")
        li.innerHTML = input.value
        todoList.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        input.value = ""
    }
}

todoList.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        } else if (e.target.tagName == "SPAN") {
            e.target.parentElement.remove();
        }
    },
    false
)


