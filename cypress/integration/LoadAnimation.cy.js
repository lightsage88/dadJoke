describe("it opens the app", ()=>{
    it('opens', ()=>{
        cy.visit("http://localhost:3000");
    });
});

describe("the StyledLoadAnimationDiv", ()=>{
    it("properly renders the StyledLoadAnimationDiv element", ()=>{
        //We test that it is displayed at all.
        cy.get('#loadAnimationDiv').should(($loadAnimationDiv)=>{
            expect($loadAnimationDiv).to.have.length(1);
        });
        cy.get('#loadAnimationDiv')
            .should('have.css', 'display', 'block')
            .should('have.css', '-webkit-animation')
        })
})