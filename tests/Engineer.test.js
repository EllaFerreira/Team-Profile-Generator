const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    let engineer;

    beforeEach(() => {
      engineer = new Engineer("name", "id", "email", "username");
    });

    test('input name via constructor', () => {
        expect(engineer.name).toBe('name')
    });

    test("input id via constructor", () => {
      expect(engineer.id).toBe("id");
    });

    test("input email via constructor", () => {
      expect(engineer.email).toBe("email");
    });

    test("get username", () => {
      expect(engineer.getGitHub()).toBe("username");
    });

    test("get role", () => {
      expect(engineer.getRole()).toBe("Engineer");
    });

    test("test regex not match", () => {
      expect(engineer.email).not.toMatch(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );
    });
})