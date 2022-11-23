describe('トップページ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('じーさんの表示', () => {
        cy.get('#name-0').should('have.text', 'じーさん');
    });
    it('曽山の入力', () => {
        cy.get('[name="name"]').type('曽山');
    });
});
