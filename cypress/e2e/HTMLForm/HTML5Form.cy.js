const HTML5FormPage = require("../../pages/HTML5FormPage")
const data = require("../../fixtures/HTML5Form.json")
const newData = data.newData
const defaultData = data.defaultData
const otherData = data.otherData

describe("HTML5Form",()=>{

    const endpoint = "html5-form-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia de enviarse los datos ingresados", ()=>{
        HTML5FormPage.submitData(newData.Colour, newData.Date, newData.DateTime, newData.Email, newData.Month, newData.Number)
        HTML5FormPage.submit()

        HTML5FormPage.elements.submittedColour().should($colour =>{
            expect($colour).to.have.text(newData.Colour)
        })

        HTML5FormPage.elements.submittedDate().should($date =>{
            expect($date).to.have.text(newData.Date)
        })

        HTML5FormPage.elements.submittedDateTime().should($dateTime =>{
            expect($dateTime).to.have.text(newData.DateTime)
        })

        HTML5FormPage.elements.submittedEmail().should($email =>{
            expect($email).to.have.text(newData.Email)
        })

        HTML5FormPage.elements.submittedMonth().should($month =>{
            expect($month).to.have.text(newData.Month)
        })

        HTML5FormPage.elements.submittedNumber().should($number =>{
            expect($number).to.have.text(newData.Number)
        })
    })

    it("Deberian borrarse los datos ingresados + Los valores enviados deberian de ser actualizados", ()=>{
        HTML5FormPage.submitData(newData.Colour, newData.Date, newData.DateTime, newData.Email, newData.Month, newData.Number)
        HTML5FormPage.submit()
        HTML5FormPage.back()
        HTML5FormPage.reset()
        HTML5FormPage.submit()

        HTML5FormPage.elements.submittedColour().should($colour =>{
            expect($colour).to.have.text(defaultData.Colour)
        })

        HTML5FormPage.elements.submittedValues().eq(1).should($text =>{
            expect($text).to.have.text("No Value for date")
        })

        HTML5FormPage.elements.submittedDateTime().should($dateTime =>{
            expect($dateTime).to.have.text(defaultData.DateTime)
        })

        HTML5FormPage.elements.submittedEmail().should($email =>{
            expect($email).to.have.text(defaultData.Email)
        })

        HTML5FormPage.elements.submittedValues().eq(4).should($text =>{
            expect($text).to.have.text("No Value for month")
        })

        HTML5FormPage.elements.submittedNumber().should($number =>{
            expect($number).to.have.text(defaultData.Number)
        })
    })
})