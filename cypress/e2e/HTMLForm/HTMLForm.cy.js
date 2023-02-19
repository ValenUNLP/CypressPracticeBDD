const data = require("../../fixtures/HTMLForm.json")
const newData = data.first
const defaultData = data.default
const HTMLFormPage = require("../../pages/HTMLFormPage")

describe("HTMLForm",()=>{

    const endpoint = "basic-html-form-test.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia enviar los datos", ()=>{
        HTMLFormPage.completeForm(newData.Username, newData.Password,newData.Comment, newData.Filename ,newData.Checkbox, newData.Radio, newData.MultipleSelect, newData.Dropdown)
        HTMLFormPage.submit()

        HTMLFormPage.elements.submittedUsername().should($username =>{
            expect($username).to.have.text(newData.Username)
        })

        HTMLFormPage.elements.submittedPassword().should($password =>{
            expect($password).to.have.text(newData.Password)
        })

        HTMLFormPage.elements.submittedComment().should($comment =>{
            expect($comment).to.have.text(newData.Comment)
        })

        HTMLFormPage.elements.submittedFilename().should($filename =>{
            expect($filename).to.have.text(newData.Filename)
        })

        HTMLFormPage.elements.submittedCheckboxes().should($checkbox =>{
            expect($checkbox).to.contain(newData.Checkbox)
        })

        HTMLFormPage.elements.submittedRadio().should($radio =>{
            expect($radio).to.contain(newData.Radio)
        })

        HTMLFormPage.elements.submittedMultipleSelect().should($select =>{
            expect($select).to.contain(newData.MultipleSelect)
        })

        HTMLFormPage.elements.submittedValueDropdown().should($value =>{
            expect($value).to.contain(newData.Dropdown)
        })

    })

    it.only("Deberia resetear los datos ingresados", ()=>{
        HTMLFormPage.completeForm(newData.Username, newData.Password,newData.Comment, newData.Filename ,newData.Checkbox, newData.Radio, newData.MultipleSelect, newData.Dropdown)
        HTMLFormPage.cancel()
        HTMLFormPage.submit()

        HTMLFormPage.elements.submittedValues().eq(0).should($text =>{
            expect($text).to.have.text("No Value for username")
        })

        HTMLFormPage.elements.submittedValues().eq(1).should($text =>{
            expect($text).to.have.text("No Value for password")
        })

        HTMLFormPage.elements.submittedComment().should($comment =>{
            expect($comment).to.have.text("Comments...")
        })

        HTMLFormPage.elements.submittedValues().eq(3).should($text =>{
            expect($text).to.have.text("No Value for filename")
        })
       
        HTMLFormPage.elements.submittedCheckboxes().should($checkbox =>{
            expect($checkbox).to.contain(defaultData.Checkbox)
        })

        HTMLFormPage.elements.submittedRadio().should($radio =>{
            expect($radio).to.contain(defaultData.Radio)
        })

        HTMLFormPage.elements.submittedMultipleSelect().should($select =>{
            expect($select).to.contain(defaultData.MultipleSelect)
        })

        HTMLFormPage.elements.submittedValueDropdown().should($value =>{
            expect($value).to.contain(defaultData.Dropdown)
        })

    })
})