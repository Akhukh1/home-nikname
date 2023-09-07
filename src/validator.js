export default class Validator {
  validateUsername(name) {
    let userName = '';
    const validateName = /^(?![0-9_-])((([0-9]{0,3}[a-zA-Z_-]{1})|([a-zA-Z_-]{0,}))+)(?<![0-9_-])$/;
    if (validateName.test(name)) {
      userName = `Имя пользователя - ${name}`;
    } else {
      userName = 'Имя пользователя не соответствует правилам!';
    }
    return userName;
  }
}
