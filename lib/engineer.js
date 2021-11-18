const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email)
        this.role = 'Engineer'
        this.gitHub = gitHub
    }
getRole(){
    return this.role
}
getGitHub(){
    return this.gitHub
}
}
module.exports = Engineer



//gitHub - username
//gitHub()
//getRole() - overriden to return 'Engineer'

