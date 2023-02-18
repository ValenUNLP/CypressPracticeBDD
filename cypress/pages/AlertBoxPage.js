class AlertBox{

    elements = {
        alertBox: ()=> cy.get("#alertexamples"),
        confirmBox: ()=> cy.get("#confirmexample"),
        confirmBoxResult: ()=> cy.get("#confirmreturn"),
        confirmBoxResultText: ()=> cy.get("#confirmexplanation"),
        promptBox: ()=> cy.get("#promptexample"),
        promptBoxResultText: ()=> cy.get("#promptreturn"),
        promptBoxReturn: ()=> cy.get("#promptexplanation")
    }

}

module.exports = new AlertBox()