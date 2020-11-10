const addNote = document.querySelector('.add-note');
const addText = document.querySelector('.add-text');
const notes = document.querySelector('.notes');

addNote.addEventListener('click', createNote);

function createNote () {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = 
    `
    <button class="button note-complited">
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
    </button>
    <div class="note-text" contenteditable="true">1</div>
    <button class="button note-remove">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
    </button>
    </div>
    `

    const noteText = noteElement.querySelector('.note-text');
    const buttonComplited = noteElement.querySelector('.note-complited');
    const buttonRemove = noteElement.querySelector('.note-remove');
    
    if(addText.value != '') {
        noteText.innerHTML = addText.value;
        addText.value = '';
    } else {
        return;
    };

    notes.appendChild(noteElement);

    buttonComplited.addEventListener('click', () => {
        noteText.classList.toggle('note-text_complited');

        if(noteText.classList.contains('note-text_complited')) {
            noteText.removeAttribute('contenteditable');
        } else {
            noteText.setAttribute('contenteditable', 'true');
        };
    });
    buttonRemove.addEventListener('click', () => {
        notes.removeChild(noteElement);
    });
};