radio.setGroup(158)
music.setVolume(200)
let lock: boolean = false
let start: number
let difference:number

radio.onReceivedNumber(function (receivedNumber: number){
    basic.showNumber(receivedNumber)
    console.log(receivedNumber)
})
radio.onReceivedValue(function (name: string, receivedNumber2: number) {
    if (name = "start")
        start = input.runningTime()
        lock = false
})

let finish: number
Sensors.SetLightLevel()


Sensors.OnLightDrop(function() {
   if (!lock){
    lock = true
    finish = input.runningTime()
    music.playTone(Note.A,500)
    radio.sendNumber(finish - start)
    basic.showNumber((finish - start)/1000)
   }
})

input.onButtonPressed(Button.A, function () {
    while (lock === true){
    music.playTone(Note.D, 250)
    radio.sendNumber(finish - start)
    basic.showNumber((finish - start)/1000)
    lock = false
    }
    lock = true
})
radio.onReceivedString(function (name: string) {
    if (name = "unlock")
    lock = false
    music.playTone(Note.D3, 400)
})
