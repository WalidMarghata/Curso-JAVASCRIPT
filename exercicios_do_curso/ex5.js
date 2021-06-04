// Questão 1

$.ajax({
    url: "https://restcountries.eu/rest/v2/all",
    type: "GET",
    dataType: "json",
    success: function(data){
            for(let i = 0; i < data.length; i++){
                $("#paises").append("<option>" + data[i].name + "</option>");
            }
    },
    error: function(){
        console.log("Erro ao enviar requisição.");
    }
});

// Questão 2

var cursos = [
    {
        "titulo": "PHP",
        "aval": []
    },
    {
        "titulo": "Javascript",
        "aval": [5,5,4.5,4,5,5,5,4.5]
    },
    {
        "titulo": "Python",
        "aval": [5,5,4,4,5,3,5,4,4,5]
    },
    {
        "titulo": "Machine Learning",
        "aval": [5,5,4.5]
    }
];

function calcularMedia(array){
    for(i = 0; i < array.length; i++){
        try{
            if(array[i].aval.length == 0){
                throw "Curso não possui nenhuma avaliação";
            }

            if(array[i].aval.length < 5){
                throw "Curso não tem avaliações suficientes";
            }

            var media = 0;
    
            for(let y = 0; y < array[i].aval.length; y++){
                media += array[i].aval[y];
            }
    
            media /= array[i].aval.length; 
    
            console.log("Curso: " + array[i].titulo + " media: " + media);
        }
        catch(err)
        {
            console.log(err);
        }
    }
}

calcularMedia(cursos);

// Questão 3
var meuNamespace = {
    "usuarios": {
        "33884h": "João Gomes",
        "43585f": "Maria Luisa",
        "93661h": "Pedro Henqrique",
        "23172g": "Paula Carvalho",
    },

    "acessos": [
        {
            "usuario": "33884h",
            "data": "10/07/18"
        },
        {
            "usuario": "33884h",
            "data": "11/07/18"
        },
        {
            "usuario": "43585f",
            "data": "19/07/18"
        },
        {
            "usuario": "93661h",
            "data": "24/07/18"
        },
        {
            "usuario": "23172g",
            "data": "13/08/18"
        },
        {
            "usuario": "93661h",
            "data": "14/08/18"
        }
    ],

    "registroAcessos": ["Acesso de Eduardo Jorge, no dia 13/07/18"],

    "registraAcessos": function(){
        for(let i = 0; i < this.acessos.length; i++){
            this.registroAcessos.push("Acesso de " + this.usuarios[this.acessos[i].usuario] + " no dia " + this.acessos[i].data);
        }
    }
}

meuNamespace.registraAcessos();

var stringHTML = "";

for(let i = 0; i < meuNamespace.registroAcessos.length; i++){
    stringHTML += "<p>" + meuNamespace.registroAcessos[i] + "</p>";
}

$("#acessos").html(stringHTML);

// Questão 4

$.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=11&type=multiple",
    type: "GET",
    dataType: "json",
    success: function(data){
        function numerosAleatorios(){
            var numeros = [];

            while(numeros.length < 4){
                var aleatorio = Math.floor(Math.random() * 4);

                    if(numeros.includes(aleatorio) == false)
                    {
                        numeros.push(aleatorio);
                    }
            }
            return numeros;
        }

        var aleatorios = numerosAleatorios();
        console.log(aleatorios);

        var array = [];
        array.push(data.results[0].incorrect_answers[0]);
        array.push(data.results[0].incorrect_answers[1]);
        array.push(data.results[0].incorrect_answers[2]);
        array.push(data.results[0].correct_answer);
        console.log(array);

        var stringHTML =
                    "<div>"+
                        data.results[0].question +
                    "</div>"+
                    "<tr>" +
                        "<td>" + "<strong>" + '<input type="radio" id="botao1" name="resposta" value=' + aleatorios[0] + ' />' + array[aleatorios[0]] + "</strong>" + "</td>"  + 
                    "</tr>" +
                    "<tr>" +
                        "<td>" + "<strong>" + '<input type="radio" id="botao2" name="resposta" value=' + aleatorios[1] + ' />' + array[aleatorios[1]] + "</strong>" + "</td>"  + 
                    "</tr>" +
                    "<tr>" +
                        "<td>" + "<strong>" + '<input type="radio" id="botao3" name="resposta" value=' + aleatorios[2] + ' />' + array[aleatorios[2]] + "</strong>" + "</td>"  + 
                    "</tr>" +
                    "<tr>" +
                        "<td>" + "<strong>" + '<input type="radio" id="botao4" name="resposta" value=' + aleatorios[3] + ' />' + array[aleatorios[3]] + "</strong>" + "</td>"  + 
                    "</tr>" +
                    "<button id='botao-esconder'>Enviar resposta</button>";

        $("#tabelaDesafio").html(stringHTML);

        $("#botao-esconder").hide();

        var botoes = document.getElementsByName("resposta");

        $("#tabelaDesafio").click(function(){
            for(let a=0; a < botoes.length; a++){
                if(botoes[a].checked){
                    $("#botao-esconder").show();
                }
            }
        });

        $("#botao-esconder").click(function(){
            for(let a=0; a < botoes.length; a++){
                if(botoes[a].checked){
                    if(botoes[a].value == 3)
                    {
                        stringHTML += "<div>" + "Resposta correta!" + "</div>";
                        $("#tabelaDesafio").html(stringHTML);
                    }
                }
            }
        });

        numerosAleatorios();
        console.log(data);
    },
    error: function(){
        console.log("Erro ao enviar requisição.");
    }
});