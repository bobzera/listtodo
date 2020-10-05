const name = document.querySelector(".name")
const minutes = document.querySelector(".minutes")
const btn = document.querySelector(".btn-add")

const list = document.querySelector(".list")


btn.addEventListener("click", function(){

    addTask()
   
}); 


function addTask(){
    
        let liItems = document.createElement('li');

        let spanOne = document.createElement('span');
        let spanTwo = document.createElement('span');

        let soText = document.createTextNode('Done!');
        let stText = document.createTextNode('Delete');

        spanOne.appendChild(soText);
        spanTwo.appendChild(stText);

        spanOne.setAttribute('class', 'btn-done');
        spanTwo.setAttribute('class', 'btn-delete');

        liItems.textContent = name.value + " " + minutes.value + " ";

        
        liItems.appendChild(spanOne);
        liItems.appendChild(spanTwo);

        list.appendChild(liItems);

        document.querySelector('.name').value = '';
        document.querySelector('.minutes').value = '';

        spanOne.addEventListener('click', () => {

            liItems.style.background = 'rgb(24, 189, 24)'; 
            liItems.style.color = 'white'; 
         });
 
         spanTwo.addEventListener('click', () => {
 
            liItems.remove();

          });

}

