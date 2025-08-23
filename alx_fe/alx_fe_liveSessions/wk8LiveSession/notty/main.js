const notesJson = localStorage.getItem('notes');
const notes = JSON.parse(notesJson);

const notesContainer = document.querySelector('.notes-container');
const categoryFilter = document.querySelector('#category-filter');



//I CODED THE FILTER FROM MY OWN UNDERSTANDING
/* //render the notes
function renderNotes() {
    notes.forEach(creatAndInsertNoteCard)
}


function creatAndInsertNoteCard(note) {
    //console.log(note)
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');

    const noteBody = document.createElement('p');
    noteBody.innerText = note.body;

    const noteCategory = document.createElement('p');
    noteCategory.classList.add('cat');
    noteCategory.innerText = note.category;

    noteCard.appendChild(noteBody);
    noteCard.appendChild(noteCategory);

    notesContainer.appendChild(noteCard);

}

// to enable user to filter based on categories, they wont be hardcoded. 
// we must get all available categories from the notes array
//
function populateCategories() {
    //extract categories from stored notes
    const categories = notes.map((note) => { return note.category });

    // Remove duplicates
    const uniqueCategories = [...new Set(categories)];
    console.log(uniqueCategories);

    //Loop through the categories and insert them into th ecategory filterSelect
    uniqueCategories.forEach((category) => {
        //Inject to the html page
        const option = document.createElement('option');
        option.value = category;
        option.innerText = category;

        categoryFilter.append(option);

    })

}
//Eventlistener when the selection changes
categoryFilter.addEventListener('change', () => {

    
    //Available options and selected index
    //console.log(categoryFilter.options)
    //get the selected value and Text
    //const selectedValue = categoryFilter.value;
    //const selectedText = categoryFilter.options[categoryFilter.selectedIndex].text;
    //console.log(`Selected Value: ${selectedValue}\nSelected Text: ${selectedText}`); 

    //Get the value of the selected category
    const selectedValue = categoryFilter.value;
    // if category is all, display all notes
    if (categoryFilter.value == 'all') {
        // clear the currently displayed notes
        notesContainer.innerText = '';
        // Inject the fotes on the html
        notes.map(creatAndInsertNoteCard)
    } else {
        const filteredNotes = notes.filter(note => note.category === selectedValue);

        // clear the currently displayed notes
        notesContainer.innerText = '';
        // Inject the filteredNotes on the html
        filteredNotes.map(creatAndInsertNoteCard)
    }



})

renderNotes()
populateCategories()
 */

/////////////////////////////////
// HOW TUVA TAUGHT IT

//render the notes
function renderNotes() {
    //clear the current html notes
    notesContainer.innerText = '';

    // if selected filter is all show all notes, else show whats relevant
    const selectedCategory = categoryFilter.value;

    const filteredNotes = notes.filter((note) => {
        if (selectedCategory === 'all') {
            return true;
        }
        else {
            return note.category === selectedCategory;
        }
    })


    //update the html 
    filteredNotes.forEach((note) => {


        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');

        const noteBody = document.createElement('p');
        noteBody.innerText = note.body;

        const noteCategory = document.createElement('p');
        noteCategory.classList.add('cat');
        noteCategory.innerText = note.category;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";

        const noteCardFooter = document.createElement('div');
        noteCardFooter.classList.add('note-card-footer');

        noteCardFooter.appendChild(noteCategory);
        noteCardFooter.appendChild(deleteButton);

        noteCard.appendChild(noteBody);
        noteCard.appendChild(noteCardFooter);

        notesContainer.appendChild(noteCard);

        //add eventlistener to delete button
        deleteButton.addEventListener('click', () => {
            // filter and remove specific note object from the notes array
            /* const currentNoteIndex = notes.indexOf(note);
            if (currentNoteIndex !== -1) {
                const updatedNotes = notes.filter((n, index) => index !== currentNoteIndex);
                localStorage.setItem('notes', JSON.stringify(updatedNotes));
                console.log(updatedNotes);
            } else {
                console.log('Note not found');
            }    */

            //filter current note object from notes array
            const updatedNotes = notes.filter((n) => n !== note);
            /* console.log(notes)
            console.log(updatedNotes) */
            //update the local storage with the new array
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            //remove the note element from the ui
            notesContainer.removeChild(noteCard);

        })
    })
}

// to enable user to filter based on categories, they wont be hardcoded. 
// users should be able to add their preferred categories
function populateCategories() {
    //extract categories from stored notes
    const categories = notes.map((note) => { return note.category });

    // Remove duplicates
    const uniqueCategories = [...new Set(categories)];
    console.log(uniqueCategories);

    //Loop through the categories and insert them into th ecategory filterSelect
    uniqueCategories.forEach((category) => {
        //Inject to the html page
        const option = document.createElement('option');
        option.value = category;
        option.innerText = category;

        categoryFilter.append(option);

    })

}
//Eventlistener when the selection changes
categoryFilter.addEventListener('change', renderNotes)



renderNotes()
populateCategories()
