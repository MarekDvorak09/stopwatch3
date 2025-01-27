radio.setGroup(205)
music.setVolume(100)
let start: number
let difference:number
Sensors.SetLightLevel()
radio.onReceivedNumber(function (receivedNumber: number){
    basic.showNumber(receivedNumber)
    difference = receivedNumber - input.runningTime()
    console.log(receivedNumber)
})
radio.onReceivedValue(function (name: string, receivedNumber2: number) {
    if (name = "time")
        start = difference - receivedNumber2
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(runTime/1000)
})

let finish: number
Sensors.OnLightDrop(function() {
    finish = input.runningTime()
})
let runTime = finish - start


