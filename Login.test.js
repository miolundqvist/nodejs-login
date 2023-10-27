const Login = require ('./Login')

describe('Tests the Login class', () => {

   // const logSpy = jest.spyOn(global.console, 'log');
    
    test('Creates an object of the login class', () => {
        expect(new Login()).toBeInstanceOf(Login)
    })

    test('Correct username and password returns true', () => {
        const loginClass = new Login();

        const username = 'admin'
        const password = 'password123'

        const result = loginClass.login(username, password);

        expect(result).toBe(true);
   })

   test('Incorrect username and password returns false', () => {
    
    const loginClass = new Login();

        const username = 'wrong'
        const password = 'wrong'

        const result = loginClass.login(username, password);

        expect(result).toBe(false);
   })

   test('Correct username incorrect password returns false', () => {
    
    const loginClass = new Login();

        const username = 'admin'
        const password = 'wrong'

        const result = loginClass.login(username, password);

        expect(result).toBe(false);
   })

   test('Incorrect username correct password returns false', () => {

    const loginClass = new Login();
        const username = 'wrong'
        const password = 'password123'

        const result = loginClass.login(username, password);

        expect(result).toBe(false);
   })

   test('Empty username returns "felaktig input"', () => {

    const logSpy = jest.spyOn(global.console, 'log');
    
    const loginClass = new Login();

        const username = ''
        const password = 'password123'

        const result = loginClass.login(username, password);
        
        expect(logSpy).toHaveBeenCalledWith('Felaktig input')
        logSpy.mockRestore();
   })

   test('Password set to null returns "felaktig input"', () => {

    const logSpy = jest.spyOn(global.console, 'log');
    
    const loginClass = new Login();

        const username = 'admin'
        const password = null

        const result = loginClass.login(username, password);
        
        expect(logSpy).toHaveBeenCalledWith('Felaktig input')
        logSpy.mockRestore();
   })

   test('Incorrect username returns "Felaktigt användarnamn eller lösenord"', () => {

    const logSpy = jest.spyOn(global.console, 'log');
    
    const loginClass = new Login();

        const username = 'wrong'
        const password = 'password123'

        const result = loginClass.login(username, password);
        
        expect(logSpy).toHaveBeenCalledWith('Felaktigt användarnamn eller lösenord')
        logSpy.mockRestore();

   })

   test('Incorrect password returns "Felaktigt namn eller lösenord"', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    
    const loginClass = new Login();
        const username = 'admin'
        const password = 'wrong'

        const result = loginClass.login(username, password);
        
        expect(logSpy).toHaveBeenCalledWith('Felaktigt användarnamn eller lösenord')
        logSpy.mockRestore();
   })

   test('Incorrect username and password returns "Felaktigt namn eller lösenord"', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    
    const loginClass = new Login();

        const username = 'wrong'
        const password = 'wrong'

        const result = loginClass.login(username, password);
        
        expect(logSpy).toHaveBeenCalledWith('Felaktigt användarnamn eller lösenord')
        logSpy.mockRestore();
   })

})