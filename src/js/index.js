let people = {};
const tripulation = [];
const reject = [];
const button  = document.getElementById('register');

//recebe os dados do formularios e passa eles para o objeto people e depois adiciona em um array com base na health do tripulante
button.addEventListener('click', function(event){
    event.preventDefault();
    const number = (a,b) => {return Math.floor(Math.random() * (a - b + 1 )) + a};

    let name = document.getElementById('name').value;
    let funcao = document.getElementById('funcao').value;
    let age = document.getElementById('age').value;
    let id = number(300, 0);

    
    people.name = name;
    people.function = funcao;
    people.age = age;
    people.id = id;

    age >=50 ? reject.push(people) && console.table(reject) : tripulation.push(people) && console.table(tripulation);

    people = {};
    const form = document.querySelector('form');
    form.reset();

});

//atraves do nome o loop percorre o array tripulation e armazena o indice correspondente
//na variavel index e apos isso utilaza o metodo splice para fazer a remoçao do objeto que representa o tripulante

function deleted(){
    const deletedArea = document.getElementById('delete');
    const deleted = `
    <label for="">Remover: </label>
    <input type="text" name="userToRemove" id="NameToRemove">
    <button class="activedButton" onclick="removed()">Remover</button>`;

    deletedArea.innerHTML = deleted;

}


function removed(){
    const userRemove = document.getElementById('NameToRemove').value;
    let idToRemove = 0;


    if(confirm('Deseja confirmar?')){

        for (let i = 0; i < tripulation.length; i++) {

            if(tripulation[i].name === userRemove){
                idToRemove = tripulation[i].id;
                document.getElementById(idToRemove).remove();
                tripulation.splice(i, 1);

                console.table(tripulation);



            }else{
                alert('user not found');
            }
        }
    }

};

function exibir(){
    const tripulateList = document.getElementById('tripulateList');

    let name = ''
    let funcao = ''

    for(let i = 0; i < tripulation.length; i++){
        const div = document.createElement('div')
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        div.id = tripulation[i].id;
        name = tripulation[i].name
        funcao = tripulation[i].function

        ul.append(name);
        li.append(funcao);
        div.append(ul, li);

        tripulateList.append(div)

       name = ''
       funcao = ''
       
    }

}


//essa funcap cria os forms necessarios para fazer a busca de um tripulante para repescagem
function reescalar() {
    const rescalingArea = document.getElementById('rescalingArea');
    const rescaling = `
    <label for="">Repescagem: </label>
    <input type="text" id="reescalar">
    <button class="activedButton" onclick="rescalingfnc()">Repescagem</button>
    `;

    rescalingArea.innerHTML = rescaling;

  

}


//atraves do nome o loop percorre o array reject e armazena o indice correspondente
//atraves do metodo find ele busca no array o usuario rejeito e armazena em foundUser, caso encontre o usuario e da um push em tripulation
function rescalingfnc(){
    const nameToReceive = document.getElementById('reescalar').value;

    if (confirm('Deseja continuar?')) {
        const foundUser = reject.find(user => user.name === nameToReceive);

        if (foundUser) {
            tripulation.push(foundUser);
            console.log('Usuário encontrado!');
        } else {
            console.log('Usuário não encontrado');
            alert('Usuário não encontrado');
        }

        console.table(tripulation);
    }
}


