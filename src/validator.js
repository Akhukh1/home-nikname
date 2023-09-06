export default class Validator {
  validateUsername(name) {
    let userName = '';
    const validateName = /^(?![0-9\_\-])((([0-9]{0,3}[a-zA-Z\_\-]{1})|([a-zA-Z\_\-]{0,}))+)(?<![0-9\_\-])$/;
    if (validateName.test(name)) {
      userName = `Имя пользователя - ${name}`;
    } else {
      userName = 'Имя пользователя не соответсвует правилам!';
    }
    return userName;
  }
}
