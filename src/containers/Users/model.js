export default class UserModel {
    _USER_TEMPLATE = {};

    constructor(){
        this._USER_TEMPLATE = {
            id: '',
            name: {
                title: '--',
                first: '-----',
                last: '------'
            },
            login: {
                uuid: ''
            },
            picture: {
                large: ''
            }
        }
    }
    
    getDefaultUsersTemplate(limit = 100) {
        let users = [];
        for(let i = 0; i < limit; ++i) {
            let user = JSON.parse(JSON.stringify(this._USER_TEMPLATE));
            user.login.uuid = i;
            user.id = i;
            users.push(user);
        }

        return users;
    }
}