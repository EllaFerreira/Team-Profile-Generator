const Manager = require('../lib/manager');

describe('Manager', () => {
    let manager;

    beforeEach(() => {
        manager = new Manager('name', 'id', 'email', 'office')
    });

    test("input name via constructor", () => {
      expect(manager.name).toBe("name");
    });

    test("input id via constructor", () => {
      expect(manager.id).toBe("id");
    });

    test("input email via constructor", () => {
      expect(manager.email).toBe("email");
    });

    test("input office via constructor", () => {
      expect(manager.office).toBe("office");
    });

    test("get role", () => {
      expect(manager.getRole()).toBe("Manager");
    });

    test("test regex match", () => {
      expect(manager.email).not.toMatch(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );
    });

    test('office numbers must be integers', () => {
      const office = 1234567890;
      const manager = new Manager('name', 'id', 'email', office)
      expect(manager.getValidationOffice()).toBe(true);
    })
})