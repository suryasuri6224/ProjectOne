global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve("OK"),
  })
);
// ✅ mock alert for jsdom
global.alert = jest.fn();