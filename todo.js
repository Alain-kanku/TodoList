let input, bouton,erreur, list
let taches=[];

input= document.querySelector("#inputTache");
bouton= document.querySelector("#btn");

bouton.addEventListener('click',addTask)


function addTask() {
    if(input.value!==''){
        taches.push({
            task: input.value,
            completed: false
        });
        let li= document.createElement('li')
        li.innerHTML=input.value;
        list.appendChild(li);

        input.value='';
        erreur.innerHTML='';
    }else{
        erreur.innerHTML='veillez saisir une tache';
    }
}

function Show() {
    list.innerHTML='';
    for (let i = 0; i < taches.length; i++) {
        let li= document.createElement('li');
        list.innerHTML= `<p><span>${taches[i].task}</span><button onclick=supprimer(this, ${i})><i ></i></button></p>`
        //+'-'+'-'+taches[i].completed ? 'terminer': 'a faire'
        list.appendChild(li)
}
        
    }

let btnDelete= document.querySelector('text-danger')


function supprimer(index) {
    taches.splice(index, 1)
    Show()
  }
