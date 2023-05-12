
const name = ["Charlie", "Samip", "Ali"]
let event = "birthday"

function writeCards(name, event){
    const empty = []

    for (let i = 0; i < name.length; i++){
        console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
        empty.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return empty
} 

function countDown(){
let countdown = 10;
while (countdown >= 0){
    console.log(countdown--)
}
}