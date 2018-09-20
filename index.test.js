import singleton from './src';
 const mockData = [{
  router: { a: 1 },
},{
  myobject: { a: 2 },
}
];
test('blank add with no error', () => {
  expect(singleton.set()).toBe(undefined);
});
test('blank fetch with no error', () => {
  expect(singleton.get()).toBe(null);
});
test('blank clear with no error', () => {
  expect(singleton.clear()).toBe(undefined);
  expect(singleton.clearAll()).toBe(undefined);
});
test('set and get data', () => {
  singleton.set(mockData[0]);
  expect(singleton.get('router')).toBe(mockData[0].router);
});
test('clear data', () => {
  singleton.clear('router');
  expect(singleton.get('router')).toBe(null);
});
test('get cloned data', () => {
  singleton.set(mockData[1]);
  const temp = singleton.getClone('myobject');
  temp.a = 4;
  expect(singleton.get('myobject').a).toBe(2);
  singleton.clearAll();
  expect(singleton.getClone('myobject')).toBe(null);
});
test('clear All data when already empty', () => {
  singleton.clearAll();
  expect(singleton.get()).toBe(null);
});
test('is key exist', () => {
  singleton.set(mockData[0]);
  expect(singleton.isKeyExist('router')).toBe(true);
  singleton.clearAll();
  expect(singleton.isKeyExist('myobject')).toBe(false);
});
test('is data exist', () => {
  singleton.set(mockData[0]);
  expect(singleton.isExist('router')).toBe(true);
  singleton.clearAll();
  expect(singleton.isExist('myobject')).toBe(false);
});
test('get All data', () => {
  singleton.set(mockData[0]);
  singleton.set(mockData[1]);
  expect(singleton.getAll().myobject.a).toBe({ ...mockData[0], ...mockData[1] }.myobject.a);
  singleton.clearAll();
  expect(singleton.getAll()).toBe(null);
});
