class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirsaldo(){
        console.table(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }

    exibirsaldoPoupanca(){
        console.log(this.saldoPoupanca)
    }

}
//Criar cliente ricardo
const ricardo = new Cliente("Ricardo Altmann", "ricardo@gmail.com", "2348593955", 100)

//Criar cliente Paloma
const paloma = new ClientePoupanca("Paloma Altmann","paloma@gmail.com","234039423488", 100,200)

//Exibir ricardo e saldo
console.log(ricardo)
ricardo.exibirsaldo()


//Exibir Paloma, saldo e saldo poupança 
console.log(paloma)
paloma.exibirsaldo()
paloma.exibirsaldoPoupanca()

//Depositar em poupança
paloma.depositarPoupanca(300)

//Exibir cliente Paloma, saldo e salo poupança
console.log(paloma)
paloma.exibirsaldo()
paloma.exibirsaldoPoupanca()

/*
Info: Start process (5:57:01 PM)
Cliente {
  nome: 'Ricardo Altmann',
  email: 'ricardo@gmail.com',
  cpf: '2348593955',
  saldo: 100
}
100
ClientePoupanca {
  nome: 'Paloma Altmann',
  email: 'paloma@gmail.com',
  cpf: '234039423488',
  saldo: 100,
  saldoPoupanca: 200
}
100
200
ClientePoupanca {
  nome: 'Paloma Altmann',
  email: 'paloma@gmail.com',
  cpf: '234039423488',
  saldo: 100,
  saldoPoupanca: 500
}
100
500
Info: End process (5:57:01 PM)
*/