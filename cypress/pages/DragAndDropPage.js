class DragAndDropPage{

    elements = {
        keyboardList: ()=> cy.get("#keyevents li")
    }

}

module.exports = new DragAndDropPage()