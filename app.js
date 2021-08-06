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

	
	retorno() { 
	document.getElementById('ano').value = ''
	document.getElementById('mes').value = ''
	document.getElementById('dia').value = ''
	document.getElementById('tipo').value = ''
	document.getElementById('valor').value = ''
	document.getElementById('descricao').value = ''


	}


	recuperarTodosRegistros(){
		
		//array de despesas
		let despesa = Array()

		let id = localStorage.getItem('id')

		//recuperar todas a despesas cadastradas em local Storage
		
		for(let i = 1 ; i <= id ; i++){
			
			let rec	= JSON.parse(localStorage.getItem(i))

			//verificamos se existe indices null(removidos)

				if (rec !== null) {
					//poderia colocar o push pra baixo e usar um continue;
					despesa.push(rec)
				}
			
			}

			return despesa

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
		document.getElementById('ModalTitle').className = 'modal-title text-primary'
		document.getElementById('ModalTitle').style.marginLeft = '170px'
		document.getElementById('ModalTitle').innerHTML = 'SUCESSO TOTAL'
		document.getElementById('texto').className = 'text-success'
		document.getElementById('texto').style.fontSize = '22px'
		document.getElementById('texto').style.marginLeft = '140px'
		document.getElementById('texto').innerHTML = 'Você Adicionou Dispesa'
		document.getElementById('botao').className = 'btn btn-success'
		$("#ModeloModal").modal('show')
			x.retorno()

		} else {
		document.getElementById('ModalTitle').className = 'modal-title text-warning'
		document.getElementById('ModalTitle').style.marginLeft = '190px'
		document.getElementById('ModalTitle').innerHTML = 'ERROR 404'
		document.getElementById('texto').className = 'text-warning'
		document.getElementById('texto').style.fontSize = '22px'
		document.getElementById('texto').style.marginLeft = '100px'
		document.getElementById('texto').innerHTML = 'Você Não Adicionou Dispesa'
		document.getElementById('botao').className = 'btn btn-danger'
		$("#ModeloModal").modal('show')
		
	}
}


function carregaListaDespesas() {
	let despesas = Array()

	despesas = x.recuperarTodosRegistros()

	console.log(despesas)


}

