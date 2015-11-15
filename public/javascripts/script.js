var socket = io();
var currentRoomId = "";

// var myId = Math.random().toString(36).slice(2);
socket.emit('join');

$('form').submit(function() {
    if ($('#chat-input').val() !== "") {
        socket.emit('chat message', {
            "message": $('#chat-input').val(),
            "currentRoomId": currentRoomId
        });
        $('#chat-input').val('');
    }
    return false;
});

socket.on('system message', function(msg) {
    $('#messages').append($("<li class='systemMessage'>").text("System: " + msg));
});

socket.on('chat message', function(msg) {
    $('#messages').append($("<li class='theirMessage'>").text("Them: " + msg));
});

socket.on('my message', function(msg) {
    $('#messages').append($("<li class='myMessage'>").text("You: " + msg));
});

socket.on('giveRoomIdToClient', function(msg) {
    currentRoomId = msg;
    console.log("currentRoomId", currentRoomId);
});
