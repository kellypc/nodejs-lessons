const Client = require ("./Client");
const Address = require ("./Address");

const enderecolient1 = new Address("Tupis", 125, "São Vicente", "Gravatai", "RS");
const client1 = new Client("kelly", 37, enderecolient1 ,'kelly@gmail.com');

const enderecolient2 = new Address("Tupis", 125, "São Vicente", "Gravatai", "RS");
const client2 = new Client("clei", 14, enderecolient2,  'clei@gmail.com');

console.log(client1.name + " mora em " + client1.address);
console.log(client2.name + " mora em " + client2.address);
