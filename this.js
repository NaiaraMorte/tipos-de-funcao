function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Sara',
	idade: 30,
};

const pessoa2 = {
	nome: 'Olivia',
	idade: 28,
};

const pessoa3 = {
	nome: 'Sofia',
	idade: 15,
    raca: 'Srd',
};

console.log(calculaIdade.call(pessoa2, 35));
console.log(calculaIdade.apply(pessoa3, [7]));