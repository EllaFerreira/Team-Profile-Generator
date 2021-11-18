class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
  getValidationEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      return true;
    } else false;
  }
  getValidationId() {
    if (/^[A-Za-z0-9]*$/.test(this.id)) {
      return true;
    } else {
      return false;
    }
  }
}

//getName()
//getId()
//getEmail()
//getRole() - returns 'Employee'
