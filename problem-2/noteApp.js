const addBtn = document.getElementById("add_note");

const notes = JSON.parse(localStorage.getItem("notes"));

var counter = 0;

if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");
    counter++;

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <select name="colors" onchange = "changeColor(this, ` + counter + `)">
                    <option selected="">Choose colour</option>
                    <option id="red" value="#F7BBB5">Red</option>
                    <option value="#F7DAB5">Orange</option>
                    <option value="#F7F7B5">Yellow</option>
                    <option value="#C8F7B5">Green</option>
                    <option value="#B5E7F7">Blue</option>
                    <option value="#E2B5F7">Purple</option>
                </select>
                
                
                <button class = "edit"><i class="fa-sharp fa-solid fa-pen"></i></button>
                <button class = "delete"><i class="fa-sharp fa-solid fa-trash"></i></button>

            </div>

            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea id = ` + counter + ` class="${text ? "hidden" : ""}"></textarea>
        </div>

    `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = marked(text);

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    deleteBtn.addEventListener("click", () => {
        note.remove();

        updateLS();
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    });

    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}


function changeColor(event, counter) {
    var color = event.value;
    const b = document.getElementById(counter)
	console.log("First line" + b.getItem);
    b.style.backgroundColor=color;
    
}