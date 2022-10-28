module.exports = class Client {
  constructor(name, age, address, email) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
    this.dataRegister = new Date();
  }

  isAdult(){
    return this.age >= 18;
  }

  getFirstName(){
    return this.name.split(" ")[0];
  }
}
