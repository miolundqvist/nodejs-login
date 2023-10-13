class Login {

    constructor() {
        
    }

    login(username, password) {

        return username === 'admin' && password === 'password123'
    } 

}

module.exports = Login