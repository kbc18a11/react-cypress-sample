describe('トップページ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('名前一覧に「じーさん」が表示されているか', () => {
        // #name-0のテキスト属性は、「じーさん」であるか？
        cy.get('#name-0').should('have.text', 'じーさん');
    });
    it('フォームに「曽山」と入力して、「曽山」が名前一覧に表示されているか', () => {
        // <input type="text" name="name" /> に「曽山」と入力
        cy.get('[name="name"]').type('曽山');
        // submitボタンを押す
        cy.get('form').submit();
        cy.get('#name-6').should('have.text', '曽山');
    });
    it('「じーさん」のページに遷移する', () => {
        // #name-0に対して、直接クリックしてもaタグをクリックした事にならず、画面遷移はしない。
        cy.get('#name-0').children('a').click();
        // URLの日本語は、エンコードされた文字列じゃないと、trueにならない。
        cy.url().should('include', '/name/%E3%81%98%E3%83%BC%E3%81%95%E3%82%93');
        cy.get('.name').should('have.text', 'じーさん');
    });
});
