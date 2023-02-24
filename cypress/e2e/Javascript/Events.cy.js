const EventPage = require("../../pages/EventPage")

describe("Events", ()=>{

    const endpoint = "events/javascript-events.html"

    beforeEach(()=>{
        cy.visit(endpoint)
    })

    it("Deberia iniciar el evento OnBlur", ()=>{
        EventPage.elements.eventsButton().eq(0).find("button").click()
        EventPage.elements.eventsButton().eq(0).find("p").should($p =>{
            expect($p).not.to.be.visible
        })
        cy.get("body").click(0,0)
        EventPage.elements.eventsButton().eq(0).find("p").should($p =>{
            expect($p).to.have.text("Event Triggered")
        })
    })

    it("Deberia iniciar el evento OnClick", ()=>{
        EventPage.elements.eventsButton().eq(1).find("p").should($p =>{
            expect($p).not.to.be.visible
        })
        EventPage.elements.eventsButton().eq(1).find("button").click()
        EventPage.elements.eventsButton().eq(1).find("p").should($p =>{
            expect($p).to.have.text("Event Triggered")
        })
    })

    it("Deberia iniciar el evento OnContextMenu", ()=>{
        EventPage.elements.eventsButton().eq(2).find("p").should($p =>{
            expect($p).not.to.be.visible
        })
        EventPage.elements.eventsButton().eq(2).find("button").rightclick()
        EventPage.elements.eventsButton().eq(2).find("p").should($p =>{
            expect($p).to.have.text("Event Triggered")
        })
    })

    it("Deberia iniciar el evento OnDoubleClick", ()=>{
        EventPage.elements.eventsButton().eq(3).find("p").should($p =>{
            expect($p).not.to.be.visible
        })
        EventPage.elements.eventsButton().eq(3).find("button").dblclick()
        EventPage.elements.eventsButton().eq(3).find("p").should($p =>{
            expect($p).to.have.text("Event Triggered")
        })
    })

    it("Deberia iniciar el evento OnFocus", ()=>{
        EventPage.elements.eventsButton().eq(4).find("p").should($p =>{
            expect($p).not.to.be.visible
        })
        EventPage.elements.eventsButton().eq(4).find("button").click()
        EventPage.elements.eventsButton().eq(4).find("p").should($p =>{
            expect($p).to.have.text("Event Triggered")
        })
    })

    it("Deberia iniciar el evento OnKeyDown", ()=>{
        EventPage.elements.eventsButton().eq(5).find("p").should($p =>{
            expect($p).not.to.be.visible
        })
        EventPage.elements.eventsButton().eq(5).find("button").click()
        EventPage.elements.eventsButton().eq(5).find("button").type("{leftArrow}")
        EventPage.elements.eventsButton().eq(5).find("p").should($p =>{
            expect($p).to.have.text("Event Triggered")
        })
    })

    it("Deberia iniciar el evento OnKeyUp", ()=>{
        EventPage.elements.eventsButton().eq(6).find("p").should($p =>{
            expect($p).not.to.be.visible
        })
        EventPage.elements.eventsButton().eq(6).find("button").click()
        EventPage.elements.eventsButton().eq(6).find("button").type("{a}", {
            delay: 3000
        })
        EventPage.elements.eventsButton().eq(6).find("p").should($p =>{
            expect($p).to.have.text("Event Triggered")
        })
    })

    it("Deberia iniciar el evento OnKeyPress", ()=>{
        EventPage.elements.eventsButton().eq(7).find("p").should($p =>{
            expect($p).not.to.be.visible
        })
        EventPage.elements.eventsButton().eq(7).find("button").click()
        EventPage.elements.eventsButton().eq(7).find("button").type("{b}")
        EventPage.elements.eventsButton().eq(7).find("p").should($p =>{
            expect($p).to.have.text("Event Triggered")
        })
    })

    it("Deberia iniciar el evento OnMouseOver", ()=>{
        EventPage.elements.eventsButton().eq(8).find("p").should($p =>{
            expect($p).not.to.be.visible
        })
        EventPage.elements.eventsButton().eq(8).find("button").trigger("mouseover")
        EventPage.elements.eventsButton().eq(8).find("p").should($p =>{
            expect($p).to.have.text("Event Triggered")
        })
    })

    it("Deberia iniciar el evento OnMouseLeave", ()=>{
        EventPage.elements.eventsButton().eq(9).find("p").should($p =>{
            expect($p).not.to.be.visible
        })
        EventPage.elements.eventsButton().eq(9).find("button").trigger("mouseover")
        EventPage.elements.eventsButton().eq(9).find("button").trigger("mouseleave")
        EventPage.elements.eventsButton().eq(9).find("p").should($p =>{
            expect($p).to.have.text("Event Triggered")
        })
    })

    it("Deberia iniciar el evento OnMouseDown", ()=>{
        EventPage.elements.eventsButton().eq(10).find("p").should($p =>{
            expect($p).not.to.be.visible
        })
        EventPage.elements.eventsButton().eq(10).find("button").click()
        EventPage.elements.eventsButton().eq(10).find("p").should($p =>{
            expect($p).to.have.text("Event Triggered")
        })
    })
})