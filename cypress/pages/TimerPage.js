class TimerPage{

    elements = {
        startButton: ()=> cy.get("#start-timer"),
        stopButton: ()=> cy.get("#stop-timer"),
        clearButton: ()=> cy.get("#clear-timer"),
        secondInput: ()=> cy.get("#timer-seconds"),
        resetButton: ()=> cy.get("#reset-timer"),
        timer: ()=> cy.get("#javascript_countdown_time")
    }

    setTime(seconds){
        this.elements.secondInput().clear().type(seconds)
        this.elements.resetButton().click()
    }

}

module.exports = new TimerPage()