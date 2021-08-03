

class Despesas {
	constructor(ano,mes,dia,tipo,valor,descricao){
		this.ano = ano
		this.mes = mes 
		this.dia = dia
		this.tipo = tipo
		this.valor = valor
		this.descricao = descricao

	}
	
}

class Bd {
	constructor(){
	let id = localStorage.getItem('id') 

		if(id === null){
			localStorage.setItem('id',0)
		}

	}


	getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1 
		
		
		}

	gravar(d) {
		let id = this.getProximoId()
		localStorage.setItem(id, JSON.stringify(d))
		

		localStorage.setItem('id',id)
}
}
let bd = new Bd()

console.log(bd)



function cadastrarDispesa() {

	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')

	let despesa = new Despesas(
		ano.value,
		mes.value,
		dia.value,
		tipo.value,
		valor.value,
		descricao.value
		)
	
	bd.gravar(despesa)

}





//primeiro parametro - nome armazenado/ segundo - dado que sera armazanado, encamnhado através de uma notação JSON.

