var socket = io();

$('form').submit(function(){
  socket.emit('chat message', $('#chat-input').val());
  $('#chat-input').val('');
  return false;
});
socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});
