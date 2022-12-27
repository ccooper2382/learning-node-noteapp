const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}


const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Please select a unique title'))
    }

}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })


    if (notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen(`Note removed!`))
        saveNotes(notesToKeep) // i need to do some research on how filter() works
    } else {
        console.log(chalk.bgRed("No note found!"))
    }
    //  my solution
    // const deadNote = notes.filter(function (note) {
    //     return note.title === title
    // })
    //
    // if (deadNote.length !== 0) {
    //     for (let i = 0; i < notes.length; i++ ) {
    //         if (notes[i].title === title) {
    //             let removed = notes.splice(i,1)
    //             console.log(`Note with title ${removed.title} has been removed`)
    //             saveNotes(notes)
    //         }
    //     }
    // } else {
    //     console.log(`No note with title of ${title} exists` )
    // }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}