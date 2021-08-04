

class Despesas {
	constructor(ano,mes,dia,tipo,valor,descricao){
		this.ano = ano
		this.mes = mes 
		this.dia = dia
		this.tipo = tipo
		this.valor = valor
		this.descricao = descricao
	}

//for in, recupera as chaves de um array, ou atrivutos de objeto e coloca numa variavel
	
	validarDados() {
		for(let i in this){
			if(this[i] = null || this[i] == undefined || this[i] == ''){	return false}
		}
		return true
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
	
	if(despesa.validarDados()) {
		bd.gravar(despesa)
		$("#Sucesso").modal('show')
	} else {
		$("#Error").modal('show')
	}
}