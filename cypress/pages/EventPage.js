class EventPage{

    elements = {
        eventsButton: ()=> cy.get("div.centered > div")
    }

}

module.exports = new EventPage()