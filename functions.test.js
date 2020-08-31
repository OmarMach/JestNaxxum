const mainFile = require("./functions");

test("Password isn't null ", () => {
  expect(mainFile.password).not.toBeNull();
});

test("Password's length greater than 6 charachters", () => {
  expect(mainFile.funcs.verifyPasswordsLength("fail")).toBeTruthy();
});

test("Password's length greater than 6 charachters", () => {
  expect(mainFile.funcs.verifyPasswordsLength("successPassord")).toBeTruthy();
});

test("Pasword contains at least one uppercase letter", () => {
  expect(mainFile.password).toMatch(
    /^(?=.*d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$/
  );
});

test("Pasword contains at least one special charachter", () => {
  expect(mainFile.password).toMatch(/(?=.*[!@#$%^&*])/);
});

test("Email isn't null ", () => {
  expect(mainFile.email).not.toBeNull();
});

test("Email format valid ", () => {
  expect(mainFile.email).toMatch(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
});

test("Emails database exists", () => {
  expect(mainFile.emailDB).not.toBeNull();
});

test("Emails database contains at least one element", () => {
  expect(mainFile.emailDB.length).toBeGreaterThan(0);
});

test("GET request from JSON Placeholder API", () => {
  expect.assertions(1);
  return mainFile.funcs.fetchUser().then((data) => expect(data).toBeTruthy());
});
