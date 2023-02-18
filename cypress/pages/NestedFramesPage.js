class NestedFramesPage{

    elements = {
        leftFrame: ()=> cy.get("frame[name = 'left']"),
        middleFrame: ()=> cy.get("frame[name = 'middle']"),
        rightFrame: ()=> cy.get("frame[name = 'right']"),
    }

}

module.exports = new NestedFramesPage()