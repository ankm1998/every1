// Make connection
var socket = io.connect('http://every1schat-narayanaash.herokuapp.com'); 

// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', function(){
  socket.emit('chat', {
      message: message.value,
      handle: handle.value
  });
    message.value="";
});
message.addEventListener('keydown',function(){
    socket.emit('typing',handle.value);
});

//1sdvbrt
btn.addEventListener('click',function(){
    socket.emit('typing1',handle.value);
});

// Listen for events
socket.on('chat', function(data){
  feedback.innerHTML="";
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
    
});

socket.on('typing',function(data){
  feedback.innerHTML='<p><em>'+data+' is typing a message...</em></p>';
  window.navigator.vibrate(50);
});

//1sdbvrt
socket.on('typing1',function(data){
  window.navigator.vibrate(50);
});
