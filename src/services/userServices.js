import requester from './infrastructure/requester';
import observer from './infrastructure/observer';

export default {
    login: {
        send: data => requester.post('user', 'login', 'basic', data),
        success: function(res) {
            observer.trigger(observer.events.loginUser, res.username)
            sessionStorage.setItem('authtoken', res._kmd.authtoken)
            sessionStorage.setItem('username', res.username)
            sessionStorage.setItem('userRoles', res.Roles.join(','))
            this.props.history.push('/catalogue')
           
        },
        fail: res => {
            this.setState({ username: '', password: '' })
        }
    },

    register: {
        send: data => requester.post('user', '', 'basic', data),
        success: function (res) {
            observer.trigger(observer.events.loginUser, res.username)
            sessionStorage.setItem('authtoken', res._kmd.authtoken)
            sessionStorage.setItem('username', res.username)
            sessionStorage.setItem('userRoles', res.Roles.join(','))
            this.props.history.push('/')

        },
        fail: res => {
            this.setState({ username: '', email:'', password: '' })
        }
    }
}