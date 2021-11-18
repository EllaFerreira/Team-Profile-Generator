const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.role = "Manager";
    this.office = office;
  }
  getRole() {
    return this.role;
  }
  getValidationEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      return true;
    } else false;
  }
  getValidationOffice() {
    if (/^\d*(\.\d+)?$/.test(this.office)) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Manager
//officeNumber
//getRole() - overriden to return 'Manager'