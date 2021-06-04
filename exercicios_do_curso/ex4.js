// Questao 1
document.getElementById("estados").options.selectedIndex = localStorage["estado"]; // pega o valor de index selecionado

document.getElementById("estados").onchange = function()
{

    var indexSelecionado = document.getElementById("estados").options.selectedIndex; // pega o index do item selecionado

    window.localStorage.setItem("estado", indexSelecionado); // seta o valor do local storage para o index selecionado
}

//  Questao 2

document.getElementById("confirmar_pedido").onclick = function()
{
    var indexSelecionado = document.getElementById("envios").options.selectedIndex;

    function calculaDias(dias, inicio)
    {
        // 86400000ms = 1d
        var convertido = dias * 86400000;

        return inicio + convertido;
    }

   function formatarTempo(tempo)
    {
        if(tempo >= 0 && tempo <= 9)
        {
            var formatado = tempo.toString();
            formatado = "0" + formatado;
        }
        else
        {
            var formatado = tempo.toString();
        }
        return formatado;
    }

    switch(indexSelecionado)
    {
        case 0:
            {
                document.getElementById("data_pedido").innerHTML = "Selecione uma opção de envio.";
                document.getElementById("data_entrega").innerHTML = "Selecione uma opção de envio.";

                break;
            }
        case 1:
            {
                // Normal (18 dias)

                var dataHoje = new Date();

                document.getElementById("data_pedido").innerHTML = formatarTempo(dataHoje.getDate()) + "/" + formatarTempo(dataHoje.getMonth()+1)
                + "/" + formatarTempo(dataHoje.getFullYear());
                
                var dateEntrega = calculaDias(18,dataHoje.getTime());

                var receberData = new Date();

                receberData.setTime(dateEntrega);

                document.getElementById("data_entrega").innerHTML = formatarTempo(receberData.getDate()) + "/" 
                + formatarTempo(receberData.getMonth()+1) + "/" + formatarTempo(receberData.getFullYear());

                break;
            }
        case 2:
            {
                // Express (12 dias)

                var dataHoje = new Date();

                document.getElementById("data_pedido").innerHTML = formatarTempo(dataHoje.getDate()) + "/" + formatarTempo(dataHoje.getMonth()+1) 
                + "/" + formatarTempo(dataHoje.getFullYear());
                
                var dateEntrega = calculaDias(12,dataHoje.getTime());

                var receberData = new Date();

                receberData.setTime(dateEntrega);

                document.getElementById("data_entrega").innerHTML = formatarTempo(receberData.getDate()) + "/" 
                + formatarTempo(receberData.getMonth()+1) + "/" + formatarTempo(receberData.getFullYear());

                break;
            }
    }
}

// Questao 3

var ligaDesliga = false, horaInicial, iniciaCronometro, horaAtual, 
tempoPassado, horas, minutos, segundos, milisegundos;

function addLeftZero(number)
{
    if(number < 10)
    {
        return "0" + number.toString();
    }
    else
    {
        return number.toString();
    }
}

document.getElementById("comecar_parar").onclick = function()
{
    if(ligaDesliga == false)
    {
        ligaDesliga = true;
        document.getElementById("comecar_parar").innerHTML = "Parar";

        // comecar cronometro
        if(!horaInicial)
        {
            horaInicial = new Date().getTime();
        }
        else
        {
            horaInicial = new Date().getTime() - tempoPassado;
        }

        function acao()
        {
            horaAtual = new Date().getTime();
            tempoPassado = horaAtual - horaInicial;

            horas = Math.floor(tempoPassado / 3600000);
            resto = tempoPassado - (horas * 3600000);

            minutos = Math.floor(resto / 60000);
            resto -= (minutos * 60000);

            segundos = Math.floor(resto / 1000);
            resto -= (segundos * 1000);

            milisegundos = resto;
            
            document.getElementById("cronometro").innerHTML = addLeftZero(horas) + ":" + addLeftZero(minutos) + ":" 
            + addLeftZero(segundos) + " " + addLeftZero(milisegundos);
        }

        iniciaCronometro = window.setInterval(acao,10);
    }
    else
    {
        window.clearInterval(iniciaCronometro); // para a repeticao
        ligaDesliga = false;
        document.getElementById("comecar_parar").innerHTML = "Começar";
    }
}

document.getElementById("zerar").onclick = function()
{
    ligaDesliga = false;
    tempoPassado = 0;
    horaInicial = new Date().getTime();
    document.getElementById("cronometro").innerHTML = "00:00:00 000";
}

// Questao 4

var carros = [
    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },
    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },
    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },
    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },
    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },
    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },
    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },
    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }
];

var total = 0;

function valorPagar(veiculo)
{
    switch(veiculo.categoria)
    {
        case '1':
            {
                return 11.22;                   
            }
        case '2':
            {
                return 22.45;
            }
        case '3':
            {
                return 16.88;       
            }
        case '4':
            {
                return 33.65;
            }
        default:
            {
                return 0;
            }
    }
}

for(a = 0; a < carros.length; a++)
{
    total += valorPagar(carros[a]);
}

document.getElementById("faturamento_total").innerHTML = total.toFixed(2);