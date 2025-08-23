
/* 
//check localStorage for existing notes (MY APPROACH)
const notes = [];

function checkLocalStorage() {
    try {
        const storedNotes = localStorage.getItem('notes')
        if (!storedNotes) {
            throw new Error(`Error! empty local storage`)
        }
        const notesArray = JSON.parse(storedNotes);
        return notesArray;
    } catch (error) {
        console.log(error);
    }
}
// if there are existing notes, push the content into notes array
const prevNotes = checkLocalStorage() ?  checkLocalStorage() : [];
if (prevNotes.length > 0){
    prevNotes.forEach(note => {
        notes.push(note);
    });
}
 */

//check localStorage for existing notes (MUINDETUVA'S APPROACH)

//our notes structure
// notes = [{"body": "bla bla bla", "category": "random"}, {"body": "bla bla bla", "category": "life"}];

//approach 1
/* let notes = JSON.parse(localStorage.getItem('notes'));
const fetchedNotesJson = ;
const fetchedNotes = JSON.parse(fetchedNotesJson);
if (fetchedNotes != null) {
    notes = fetchedNotes;
} */
//approach 2
const notes = JSON.parse(localStorage.getItem('notes')) || [];

const addNoteForm = document.querySelector('#note-form');
const categoryInput = document.querySelector('#category');
const noteInput = document.querySelector('#note');

addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Put the input into an object nad push the object into the array.
    const noteObject = { "category": categoryInput.value, "body": noteInput.value };
    notes.unshift(noteObject);

    console.log(notes)

    //Store notes on loal storage
    localStorage.setItem('notes', JSON.stringify(notes));

    //render notes


    //Clear the input values
    categoryInput.value = '';
    noteInput.value = '';
})
