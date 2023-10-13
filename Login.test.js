const Login = require ('./Login')

describe('Tests the Login class', () => {
    
    it('Skapar ett objekt av login-klassen', () => {
        expect(new Login()).toBeInstanceOf(Login) // Eftersom constructorn i Login inte har några parametrar behöver man inte skicka in något
    })

    it('Correct username and password returns true', () => {
        let loginClass = new Login(); // instans av Login class

        let username = 'admin'
        let password = 'password123'

        let result = loginClass.login(username, password); // Anropar funktion login i classen Login

        expect(result).toBe(true);
   })

   it('Incorrect username and password returns false', () => {
    let loginClass = new Login(); // instans av Login class

        let username = 'wrong'
        let password = 'wrong'

        let result = loginClass.login(username, password); // Anropar funktion login i classen Login

        expect(result).toBe(false);
   })

   it('Correct username incorrect password returns false', () => {
    let loginClass = new Login(); // instans av Login class

        let username = 'admin'
        let password = 'wrong'

        let result = loginClass.login(username, password); // Anropar funktion login i classen Login

        expect(result).toBe(false);
   })

   it('Incorrect username correct password returns false', () => {
    let loginClass = new Login(); // instans av Login class

        let username = 'wrong'
        let password = 'password123'

        let result = loginClass.login(username, password); // Anropar funktion login i classen Login

        expect(result).toBe(false);
   })

})