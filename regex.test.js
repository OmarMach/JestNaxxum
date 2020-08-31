test("starts with a letter", () => {
  expect("E_").toMatch(/^[a-z]/i);
});

test("starts with a letter", () => {
  expect("E9").toMatch(/^[a-z][A-Za-z0-9]/i);
});
