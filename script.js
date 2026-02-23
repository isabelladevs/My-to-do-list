function start() {
    window.location.href = 'todolist.html';
}

let botao = document.getElementById("button");

botao.addEventListener("click", function() {
    let input = document.getElementById("tarefa");
    let texto = input.value;

    if (texto.trim() !== "") {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let span = document.createElement("span");
        span.textContent = texto;

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);

       document.getElementById("lista").appendChild(li);


        input.value = "";
    }
});

function renderizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.sort();

    tarefas.forEach(tarefa => {
        let li = document.createElement("li");
        li.textContent = tarefa;
        lista.appendChild(li);
    });
}