var socket = io();
var currentRoomId = "";

// var myId = Math.random().toString(36).slice(2);
socket.emit('join');

$('form').submit(function() {
    if ($('#chat-input').val() !== "") {
        socket.emit('chat message', {
            "message":$('#chat-input').val(),
            "currentRoomId": currentRoomId
        });
        $('#chat-input').val('');
    }
    return false;
});

socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
});

socket.on('giveRoomIdToClient', function(msg) {
    currentRoomId = msg;
    console.log("currentRoomId", currentRoomId);
});
