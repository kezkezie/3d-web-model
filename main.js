// get modal element
var modal = document.getElementById('simpleModal');

var modal2 = document.getElementById('simpleModal2');
// get open modal button
var modalBtn = document.getElementById('modalBtn');

var modal2Btn = document.getElementById('modal2Btn');
// get close  button
var closeBtn = document.getElementById(`cbtn`);
var closeBtn2 = document.getElementById(`cbtn2`);


//listen for open click
modalBtn.addEventListener('click', openModal);
//listen for open click
modal2Btn.addEventListener('click', openModal2);

//listen for close click
closeBtn.addEventListener('click', closeModal);
//listen for close click
closeBtn2.addEventListener('click', closeModal2);

// listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal\

function openModal(){
    console.log(123);
    modal.style.display = 'block';
   
}

function openModal2(){
    console.log(123);
    modal2.style.display = 'block';
   
}
// Function to close modal
function closeModal(){
    modal.style.display = 'none';
   
}
// Function to close modal
function closeModal2(){
    modal2.style.display = 'none';
   
}

// Function to close modal if outside click

function outsideClick(e){
    // console.log(123);
    if (e.target == modal ){
        modal.style.display = 'none';
    }
}
