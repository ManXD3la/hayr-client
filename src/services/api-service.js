import TokenService from './token-service'
import config from '../config';


const hayrApiService = {

    //Signup

    makeNewUser(userName, eMail, password) {
        let reqBody = JSON.stringify({
            userName: userName,
            emailAddress: eMail,
            userPassword: password
        })
        console.log(reqBody)
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
            body: reqBody
        })
        .then(console.log('successful submission'))
        .catch(console.error)
    },
    
    //Authorization
    // loginAuthorization() {
    //     return fetch(`${config.API_ENDPOINT}/auth/login`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `basic ${TokenService.getAuthToken()}`,
    //         },
    //     })
    // },


    //User Endpoints

    //
    
    getUserInfo() {
        return fetch(`${config.API_ENDPOINT}/users`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },



    deleteUserAcct() {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },

    // Entries
    postEntry(userId, mood, refelction) {
        let reqBody = JSON.stringify({
            entryId:'', //cuid
            userId: userId,
            mood: mood,
            refelction: refelction
        })

        return fetch(`${config.API_ENDPOINT}/journal`, {
            method: 'POST',
            headers: {
                // 'content-type': 'application/json',
                // 'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },

    getJournalInfo() {
        return fetch(`${config.API_ENDPOINT}/journal`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(entries => console.log(entries))
    },

    getEntry(entryId) {
        return fetch(`${config.API_ENDPOINT}/journal`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },

    getPublicEntries() {
        return fetch(`${config.API_ENDPOINT}/journal/public`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },

    getSimilarEntries(entryID) {
        return fetch(`${config.API_ENDPOINT}/journal/like-entry`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },

    putUpdatedEntry() {
        return fetch(`${config.API_ENDPOINT}/journal`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },

    deleteEntry() {
        return fetch(`${config.API_ENDPOINT}/journal`, {
            method: 'DELETE',
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    }

}
export default hayrApiService;