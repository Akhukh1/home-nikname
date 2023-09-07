import Validator from '../validator';

test('test Validator letters begin "-"', () => {
  const userName = new Validator();
  const result = userName.validateUsername('-kino');
  expect(result).toEqual('Имя пользователя не соответствует правилам!');
});

test('test Validator letters begin "_"', () => {
  const userName = new Validator();
  const result = userName.validateUsername('_kino');
  expect(result).toEqual('Имя пользователя не соответствует правилам!');
});

test('test Validator letters begin "0-9"', () => {
  const userName = new Validator();
  const result = userName.validateUsername('5kino');
  expect(result).toEqual('Имя пользователя не соответствует правилам!');
});

test('test Validator letters end "-"', () => {
  const userName = new Validator();
  const result = userName.validateUsername('kino-');
  expect(result).toEqual('Имя пользователя не соответствует правилам!');
});

test('test Validator letters end "_"', () => {
  const userName = new Validator();
  const result = userName.validateUsername('kino_');
  expect(result).toEqual('Имя пользователя не соответствует правилам!');
});

test('test Validator letters end "0-9"', () => {
  const userName = new Validator();
  const result = userName.validateUsername('kino6');
  expect(result).toEqual('Имя пользователя не соответствует правилам!');
});

test('test Validator letters 3 "0-9"', () => {
  const userName = new Validator();
  const result = userName.validateUsername('kino6544sasha');
  expect(result).toEqual('Имя пользователя не соответствует правилам!');
});

test('test Validator letters Right', () => {
  const userName = new Validator();
  const name = 'kiNo654-sas_ha';
  const result = userName.validateUsername('kiNo654-sas_ha');
  expect(result).toEqual(`Имя пользователя - ${name}`);
});
