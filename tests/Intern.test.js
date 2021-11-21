const Intern = require('../lib/intern');

describe('Intern', () => {
    let intern;

    beforeEach(() => {
        intern = new Intern('name','id', 'email', 'school')
    });

    test("input name via constructor", () => {
      expect(intern.name).toBe("name");
    });

    test("input id via constructor", () => {
      expect(intern.id).toBe("id");
    });

    test("input email via constructor", () => {
      expect(intern.email).toBe("email");
    });

    test("input school via constructor", () => {
      expect(intern.school).toBe("school");
    });

    test("get role", () => {
      expect(intern.getRole()).toBe("Intern");
    });

    test("test regex match", () => {
      expect(intern.email).not.toMatch(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );
    });
})