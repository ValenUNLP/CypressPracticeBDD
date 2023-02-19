class HTMLForm{

    elements = {
        usernameInput: ()=> cy.get('input[name = "username"]'),
        passwordInput: ()=> cy.get('input[name = "password"]'),
        commentInput: ()=> cy.get('textarea[name = "comments"]'),
        filenameInput: ()=> cy.get('input[name = "filename"]'),
        checkboxesInputs: ()=> cy.get('input[name = "checkboxes[]"'),
        radioInputs: ()=> cy.get('input[name = "radioval"'),
        multipleSelectInput: ()=> cy.get('select[multiple = "multiple"]'),
        dropdownInput: ()=> cy.get('select[name = "dropdown"]'),
        cancelButton: ()=> cy.get('input[value="cancel"]'),
        submitButton: ()=> cy.get('input[value="submit"]'),

        submittedValues: ()=> cy.get("div.centered p"),
        submittedUsername: ()=> cy.get("#_valueusername"),
        submittedPassword: ()=> cy.get("#_valuepassword"),
        submittedComment: ()=> cy.get("#_valuecomments"),
        submittedFilename: ()=> cy.get("#_valuefilename"),
        submittedCheckboxes: ()=> cy.get("#_checkboxes li"),
        submittedRadio: ()=> cy.get("#_valueradioval"),
        submittedMultipleSelect: ()=> cy.get("#_valuemultipleselect0"),
        submittedValueDropdown: ()=> cy.get("#_valuedropdown"),
        backButton: ()=> cy.get("#back_to_form")
    }

    completeForm(username, password, comment, fileName, checkbox, radio, multipleselect, dropdown){
        this.elements.usernameInput().clear().type(username)
        this.elements.passwordInput().clear().type(password)
        this.elements.commentInput().clear().type(comment)
        this.elements.filenameInput().selectFile(fileName)
        this.elements.checkboxesInputs().eq(2).click()
        this.elements.checkboxesInputs().eq(checkbox-1).click()
        this.elements.radioInputs().eq(radio-1)
        this.elements.multipleSelectInput().select(`ms${multipleselect}`)
        this.elements.dropdownInput().select(`dd${dropdown}`)
    }
    submit(){
        this.elements.submitButton().click()
    }
    cancel(){
        this.elements.cancelButton().click()
    }
    back(){
        this.elements.backButton().click()
    }
}

module.exports = new HTMLForm()