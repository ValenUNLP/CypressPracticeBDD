const TimerPage = require("../../pages/TimerPage")

const secondsToString = (seconds) =>{
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10)? '0' + second : second;
    return hour + ':' + minute + ':' + second;
  }

describe("Timer",()=>{

    const endpoint = "javascript-countdown-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia limpiar el Timer", ()=>{
        TimerPage.elements.clearButton().click()
        TimerPage.elements.timer().should($timer =>{
            expect($timer).to.have.text("Time Up!")
        })
    })

    it("Deberia setear a una nueva hora el Timer a 320 segundos", ()=>{
        const seconds = 320
        const realTime = secondsToString(seconds)
        TimerPage.setTime(seconds)
        TimerPage.elements.timer().should($timer =>{
            expect($timer).to.have.text(realTime)
        })
    })

    it("Deberia pausar el Timer y volverlo a iniciar por donde estaba",function(){
        const seconds = 1000
        const realTime = secondsToString(seconds)
        const newTime = seconds - 1
        const newRealTime = secondsToString(newTime)
        TimerPage.setTime(seconds)
        TimerPage.elements.timer().should($timer =>{
            expect($timer).to.have.text(realTime)
        })
        TimerPage.elements.stopButton().click()
        TimerPage.elements.timer().then($timer =>{
            const time = $timer.text()
            cy.wrap(time).as("time")
        })

        cy.wait(3000)
        TimerPage.elements.timer().should($timer =>{
            expect($timer).to.have.text(this.time)
        })

        TimerPage.elements.startButton().click()
        cy.wait(1000)
        TimerPage.elements.timer().should($timer =>{
            expect($timer).to.have.text(newRealTime)
        })
        
    })

})