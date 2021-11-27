const Employee = require("../lib/employee");

describe("Employee generator", () => {
  let employee;

  beforeEach(() => {
    employee = new Employee("name", "id", "email");
  });

  test("email validation", () => {
    const email = 'test@test.com.au';
    const employee = new Employee('name', 'id', email)
    expect(employee.getValidationEmail()).toBe(true);
  });

  test("id validation", () => {
    expect(employee.getValidationId()).toBe(true);
  });

  test("input name via constructor", () => {
    expect(employee.name).toBe('name');
  });

  test("input id via constructor", () => {
    expect(employee.id).toBe("id");
  });

  test("input email via constructor", () => {
    expect(employee.email).toBe("email");
  });

  test("Data type as object", () => {
    expect(typeof employee).toEqual("object");
  });

  test("If it is an object to be false", () => {
    expect(employee).toMatchObject(employee);
  });
});
// test('getName() returns this.name', () =>{
//     const param = new Employee('name', 'id', 'email')
//     expect(param.getName()).toBe(param.name)
// })

// test("getId() returns this.id", () => {
//   const param = new Employee("name", "id", "email");
//   expect(param.getId()).toBe(param.id);
// });

// test("getEmail() returns this.email", () => {
//   const param = new Employee("name", "id", 'email');
//   expect(param.getEmail()).toBe(param.email);
// });

// test("getRole() returns Employee", () => {
//   const param = new Employee("name", "id", "email");
//   expect(param.getRole()).toBe("Employee");
// })
