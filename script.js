const createNoteBtn = document.querySelector(".createNew");
const addItemBtn = document.querySelector(".addItem");
const addNoteBtn = document.querySelector(".addNote");
const noteForm = document.querySelector(".addNoteForm");
const noteInfo = document.querySelector(".noteInfo");

// const closeBtn = document.querySelector(".close");
// closeBtn.addEventListener("click", collapseNote);

const notes = document.querySelector(".notes");
let items = ["item1"];

let labelId = 1;
let noteIndex = 0;

createNoteBtn.addEventListener("click", toggleForm);
addItemBtn.addEventListener("click", addItem);
addNoteBtn.addEventListener("click", addNote);

function addNote() {
  const note = document.createElement("div");
  note.classList.add("note");
  const noteHeaderEl = document.createElement("div");
  noteHeaderEl.classList.add("noteHeader");
  const noteTitleEl = document.createElement("h4");
  noteTitleEl.innerText = document.querySelector("#title").value;
  noteTitleEl.classList.add("noteTitle");
  const closeEl = document.createElement("div");
  closeEl.classList.add("close");
  closeEl.innerText = "-";

  const noteBodyEl = document.createElement("div");
  noteBodyEl.classList.add("noteBody");
  const noteList = document.createElement("ul");

  items.forEach((item, index) => {
    if (item !== null) {
      let listItem = document.querySelector(`#item${index + 1}`).value;

      let listItemNode = document.createElement("li");
      listItemNode.innerText = listItem;
      noteList.appendChild(listItemNode);
    }
  });
  noteBodyEl.classList.add(`noteBody${noteIndex + 1}`);
  noteBodyEl.classList.add("noteBody");
  closeEl.setAttribute("id", `noteBody${noteIndex + 1}`);
  closeEl.addEventListener("click", (e) => {
    collapseNote(e);
    closeEl.innerText === "-"
      ? (closeEl.innerText = "+")
      : (closeEl.innerText = "-");
  });
  noteBodyEl.appendChild(noteList);
  noteHeaderEl.appendChild(noteTitleEl);
  noteHeaderEl.appendChild(closeEl);
  note.appendChild(noteHeaderEl);
  note.appendChild(noteBodyEl);

  notes.appendChild(note);
  noteIndex++;
}

function collapseNote(e) {
  const noteID = e.target.id;

  document.querySelector(`.${noteID}`).classList.toggle("hidden");
}

function toggleForm() {
  noteForm.classList.toggle("hidden");
}

function addItem() {
  const label = document.createElement("label");
  labelId++;
  label.setAttribute("for", `item${labelId}`);
  const input = document.createElement("input");

  input.setAttribute("id", `item${labelId}`);
  input.setAttribute("name", `item${labelId}`);
  items.push(`item${labelId}`);
  console.log(items);
  label.innerText = "Item " + labelId;
  noteInfo.appendChild(label);
  noteInfo.appendChild(input);

  console.log(items);
}
