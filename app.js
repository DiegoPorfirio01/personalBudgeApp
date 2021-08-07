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
	
			pesquisar(despesa) {
			this.recuperarTodosRegistros()

			let despesasFiltradas = []
			despesasFiltradas = this.recuperarTodosRegistros()

			//Aplicar Filtros
			
			//ano

				if(despesa.ano != '') {
				despesasFiltradas = despesasFiltradas.filter(f => f.ano == despesa.ano)
		  }
		
			
				//dia
				if(despesa.dia != '') {
				 despesasFiltradas = despesasFiltradas.filter(f => f.dia == despesa.dia)
						}
			//mes
				if(despesa.mes != '') {
				despesasFiltradas = despesasFiltradas.filter(f => f.mes == despesa.mes)
					}
			//tipo

				if(despesa.tipo != '') {
			 despesasFiltradas = despesasFiltradas.filter(f => f.tipo == despesa.tipo)
			 	}			

			//descricao
			if(despesa.descricao != '') {
				despesasFiltradas = despesasFiltradas.filter(f => f.descricao == despesa.descricao)
			}

			//valor
			if(despesa.valor != '') {
				despesasFiltradas = despesasFiltradas.filter(f => f.valor == despesa.valor) 
			}

			return despesasFiltradas

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


function carregaListaDespesas(despesaFiltro = [], filtro = false){
	

	//let despesas = Array()
	if(despesaFiltro.length == 0 && filtro == false) {
		
	despesaFiltro = x.recuperarTodosRegistros()
		} 

	let listaDespesas = document.getElementById('listaDespesas')
		listaDespesas.innerHTML = ''	
	

		
//selecionando o elemento tbody da tabela
	/*  					<tr>
                <td>15/01/2021</td>
                <td>alimentaçao</td>
                <td> compras </td>
                <td> 500,50</td>
              </tr>


percorer o array despesas, listando cada despesa 
de forma dinâmica*/

despesaFiltro.forEach(function(d){

//criando a linha(tr)
let linha = listaDespesas.insertRow()
//criar coluna
linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
	switch (d.tipo) {
		case '1': d.tipo = 'Alimentação'
			break
		case "2" : d.tipo = 'Educação'
		 	break
		case '3' : d.tipo = 'Lazer'
		  break
		case '4' : d.tipo = 'Saúde'
		 break
		case '5' : d.tipo = 'Transporte'
	}
linha.insertCell(1).innerHTML = d.tipo
linha.insertCell(2).innerHTML =  d.descricao
linha.insertCell(3).innerHTML =  d.valor

let btn = document.createElement('button')
btn.className = 'btn btn-danger'
btn.innerHTML = '<i class="fas fa-times"> </i>'
linha.insertCell(4).append(btn)
btn.onclick= function(){
	console.log(d)
}


})

}

function pesquisarDespesa() { 
		let ano = document.getElementById('ano').value
		let mes = document.getElementById('mes').value
		let dia = document.getElementById('dia').value
		let tipo = document.getElementById('tipo').value
		let descricao= document.getElementById('descricao').value
		let valor = document.getElementById('valor').value

		let despesa = new Despesas(ano,mes,dia,tipo,descricao,valor)

		let despesaFiltro = x.pesquisar(despesa)
		
		carregaListaDespesas(despesaFiltro, true )
		

}










