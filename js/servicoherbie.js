var btAdd = document.getElementById('btAdicionar')

function AdicionarServico() {
var inServico = document.getElementById('inServico')



var servico = inServico.value

if(VerificarExiste(servico)) {
    alert('Servico já adicionado')
    inServico.value = ""
    inServico.focus()
    return
}


if (servico == "") {
    alert('[ERRO]... informe o servico a ser adicionado')
    return;
}



if(localStorage.getItem('servicoHer')) {
    var servicoHer = localStorage.getItem('servicoHer') + ";" + servico


    localStorage.setItem('servicoHer', servicoHer)
} else {
    localStorage.setItem('servicoHer', servico)
}



Pendencias()
mostrarPendencias()

inServico.value = ""
inServico.focus()

}
btAdd.addEventListener('click', AdicionarServico)


function Pendencias() {
    var pendentes = document.getElementById('outPendentes')
    var numPendentes = ""

if(localStorage.getItem('servicoHer'))  {
    numPendentes = localStorage.getItem('servicoHer').split(";").length
} else {
    numPendentes = 0
}




pendentes.textContent =  numPendentes


}
Pendencias()



function VerificarExiste(servico) {
    var flag = false

    if(localStorage.getItem('servicoHer')) {
        var servicos = localStorage.getItem('servicoHer').split(';')


        if(servicos.indexOf(servico.toString()) >= 0) {
            flag = true
        }
    }

    return flag;
}


function ExecutarServico() {
    if(!localStorage.getItem('servicoHer')) {
        alert('Não há serviços pendentes para executar')
        return
    }
    var outExecucao = document.getElementById('outExecucao')
    var servicos = localStorage.getItem('servicoHer').split(';')


    var emExecucao = servicos.shift()

    outExecucao.textContent = emExecucao

    localStorage.setItem('servicoHer',servicos.join(';'))

    Pendencias()
    

}
var btExec = document.getElementById('btExecutar')
btExec.addEventListener('click', ExecutarServico)

var Btenter = document.getElementById('inServico')
Btenter.addEventListener('keypress', function(tecla) {
    if(tecla.key === "Enter") {
        AdicionarServico()
    }
})

function mostrarPendencias() {
    var sele = document.getElementById("outPen")
    if(localStorage.getItem("servicoHer")) { 
        
        var servico = localStorage.getItem("servicoHer").split(";")


        var opcoes = ""

        for(var i = 0; i < servico.length;i++) {
            opcoes += servico[i] + "\n"
        }
       
      sele.textContent = opcoes.substr(0, opcoes.length -1)
        
    }
    
}
mostrarPendencias()




