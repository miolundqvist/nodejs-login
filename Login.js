class Login {

     login(username, password) {

        if(username === 'admin' && password === 'password123') {

            return true;
        }

        else if(username === '' || password === '') {

            console.log('Felaktig input')
            return false
        }
        else if (username === null || password === null){
            console.log('Felaktig input')
            return false
        }

        else {

            console.log('Felaktigt användarnamn eller lösenord')
            return false
        }

    } 
    
}

module.exports = Login