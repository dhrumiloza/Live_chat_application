const socket = io('http://localhost:8000');
const form = document.getElementById('send-contaner');
const messageinput = document.getElementById('messageinp');
const messagecontaner = document.querySelector('.contaner');

const append = (message,position)=>
{
    const messageEliment = document.createElement('div')
    messageEliment.innerText=message;
    messageEliment.classList.add('message');
    messageEliment.classList.add(position);
    messagecontaner.append('messageEliment');
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageinput.value;
    append(`you: ${message}`, 'right');
    socket.emit('send',message);
    messageinput.value= '';
})

const nm = prompt("Enter You Name to Join");
socket.emit('new-user-joined', nm);

socket.on('user-joined', nm =>{
    append(`${nm} joined the chat`,'right')
})
    
    socket.on('resive', data =>{ 
        append(`${data.}:${data.message}`,'left')
})