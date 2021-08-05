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
			if(this[i] == null || this[i] == undefined || this[i] == ''){return false}
		}
		return true
	}

}

class Bd {
	constructor(){
		let id = localStorage.getItem('id') 

		if(id === null){
			localStorage.setItem('id', 0)
		}
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id')
			return parseInt(proximoId) + 1 
		
		}

	gravar(d) {
		let id = this.getProximoId()
		
		localStorage.setItem(id, JSON.stringify(d))
		
		localStorage.setItem('id', id)
	
	}

	
}

let x = new Bd()


	

function cadastrarDispesa() {

	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let valor = document.getElementById('valor')
	let descricao = document.getElementById('descricao')

	let despesa = new Despesas(
		ano.value,
		mes.value,
		dia.value,
		tipo.value,
		valor.value,
		descricao.value
		)
	
	if(despesa.validarDados()) {
		x.gravar(despesa)

		document.getElementById('eModal').innerHTML = 'SUCESSO'
		document.getElementById('div1').className = 'modal-header text-success'
		document.getElementById('modal_conteudo').innerHTML = 'adicionado'
		$("#ModeloModal").modal('show')
		} else {
		document.getElementById('eModal').innerHTML = 'ERROR'
		document.getElementById('div1').className = 'modal-header text-danger'
		document.getElementById('modal_conteudo').innerHTML = "não funcionou"
		$("#ModeloModal").modal('show')
	}
}
	

