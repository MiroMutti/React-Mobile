 export default {
    defaultState: {
        username: '',
        password: '',
        email: '',
        Roles: ['User']
    },

    validate: obj => {
        const { username, password, email } = obj

        if (!username) {
            return "Username is required";
        }

        if (!email) {
            return "Email is required";
        }

        if (!password) {
            return "Password is required";
        }

    }
}