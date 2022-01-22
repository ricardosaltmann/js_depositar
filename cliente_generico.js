function Cliente(nome,cpf,email,saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    } 
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoupanca) {
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoupanca = saldoPoupanca
}

const ricardo = new ClientePoupanca("Ricardo","35498338466","ricardoaltmann54@gmail.com", 100,200)

console.log(ricardo)

ClientePoupanca.prototype.depositarPoupanca = function(valor){
    this.saldoPoupanca += valor
}

ricardo.depositar(35)

ricardo.depositarPoupanca(34)

console.log(ricardo.saldo)
console.log(ricardo.saldoPoupanca)

/**
Info: Start process (4:49:40 PM)
ClientePoupanca {
  nome: 'Ricardo',
  cpf: '35498338466',
  email: 'ricardoaltmann54@gmail.com',
  saldo: 100,
  depositar: [Function (anonymous)],
  saldoPoupanca: 200
}
Saldo:
135
SaldoPoupanca:
234
Info: End process (4:49:40 PM)
 */