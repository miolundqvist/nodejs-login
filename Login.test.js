const Login = require ('./Login')

describe('Tests the Login class', () => {

   // const logSpy = jest.spyOn(global.console, 'log');
    
    test('Creates an object of the login class', () => {
        expect(new Login()).toBeInstanceOf(Login)
    })

    test('Correct username and password returns true', () => {
        let loginClass = new Login();

        let username = 'admin'
        let password = 'password123'

        let result = loginClass.login(username, password);

        expect(result).toBe(true);
   })

   test('Incorrect username and password returns false', () => {
    
    let loginClass = new Login();

        let username = 'wrong'
        let password = 'wrong'

        let result = loginClass.login(username, password);

        expect(result).toBe(false);
   })

   test('Correct username incorrect password returns false', () => {
    
    let loginClass = new Login();

        let username = 'admin'
        let password = 'wrong'

        let result = loginClass.login(username, password);

        expect(result).toBe(false);
   })

   test('Incorrect username correct password returns false', () => {

    let loginClass = new Login();
        let username = 'wrong'
        let password = 'password123'

        let result = loginClass.login(username, password);

        expect(result).toBe(false);
   })

   test('Empty username returns "felaktig input"', () => {

    const logSpy = jest.spyOn(global.console, 'log');
    
    let loginClass = new Login();

        let username = ''
        let password = 'password123'

        let result = loginClass.login(username, password);
        
        expect(logSpy).toHaveBeenCalledWith('Felaktig input')
        logSpy.mockRestore();
   })

   test('Password set to null returns "felaktig input"', () => {

    const logSpy = jest.spyOn(global.console, 'log');
    
    let loginClass = new Login();

        let username = 'admin'
        let password = null

        let result = loginClass.login(username, password);
        
        expect(logSpy).toHaveBeenCalledWith('Felaktig input')
        logSpy.mockRestore();
   })

   test('Incorrect username returns "Felaktigt användarnamn eller lösenord"', () => {

    const logSpy = jest.spyOn(global.console, 'log');
    
    let loginClass = new Login();

        let username = 'wrong'
        let password = 'password123'

        let result = loginClass.login(username, password);
        
        expect(logSpy).toHaveBeenCalledWith('Felaktigt användarnamn eller lösenord')
        logSpy.mockRestore();

   })

   test('Incorrect password returns "Felaktigt namn eller lösenord"', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    
    let loginClass = new Login();
        let username = 'admin'
        let password = 'wrong'

        let result = loginClass.login(username, password);
        
        expect(logSpy).toHaveBeenCalledWith('Felaktigt användarnamn eller lösenord')
        logSpy.mockRestore();
   })

   test('Incorrect username and password returns "Felaktigt namn eller lösenord"', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    
    let loginClass = new Login();

        let username = 'wrong'
        let password = 'wrong'

        let result = loginClass.login(username, password);
        
        expect(logSpy).toHaveBeenCalledWith('Felaktigt användarnamn eller lösenord')
        logSpy.mockRestore();
   })

})