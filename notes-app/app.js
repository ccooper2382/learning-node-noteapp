
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title' ,
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
       notes.addNote(argv.title, argv.body)
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

//Create list command

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Notes...')
    }
})

//Create read command

yargs.command({
    command: 'read',
    describe: 'Show a specified note',
    handler: function () {
        console.log('Specific note...')
    }
})

yargs.parse()

//console.log(yargs.argv)