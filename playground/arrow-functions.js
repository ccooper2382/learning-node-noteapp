// const square = function (x) {
//     return x*x
// }


// const square = (x) => {
//    return x * x
// }

// const square = (x) => x * x
// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['person1', 'person2', 'person3'],
    // arrow functions don't work well for methods as they don't bind their own 'this'
    printGuestList() {
        console.log(`Guest list for ${this.name}` )

        this.guestList.forEach( (guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()