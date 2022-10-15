let namastebtn = document.querySelector('button');
namastebtn.addEventListener('click',inputMsg);

function inputMsg(){
    let name=prompt('Enter Your Name');
    namastebtn.textContent = 'Welcome '+name;
}