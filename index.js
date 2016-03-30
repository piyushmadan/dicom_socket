var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

var clients = 0;


io.on('connection', function(socket){

  console.log('a user connected');

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });


  socket.on('buttonPressed', function(evt){
    console.log('button #: ' + evt.buttonNumber + ' by webSocketId'+ evt.webSocketId);

    socket.broadcast.emit('emulateButton',evt);

  });

    socket.on('loadStudy', function(evt){
    console.log('load Study from #: ' + evt.webSocketId);

    socket.broadcast.emit('loadStudy',evt);

  });

    socket.on('emulateMouseEvent', function(evt){
    console.log('load mouseEvent from #: ' + evt.webSocketId);

    socket.broadcast.emit('emulateMouseEvent',evt);

  });


    socket.on('drawTextBox', function(evt){
    console.log('got drawTextBox event from #: ' + evt.webSocketId);

    socket.broadcast.emit('drawTextBox',evt);

  });    

    socket.on('drawArrow', function(evt){
        
    console.log('got drawArrow event from #: ' + evt.webSocketId);

    socket.broadcast.emit('drawArrow',evt);

  });   

    socket.on('drawHandles', function(evt){
        
    console.log('got drawHandles event from #: ' + evt.webSocketId);

    socket.broadcast.emit('drawHandles',evt);

  });   


    socket.on('drawEllipse', function(evt){
        
    console.log('got drawEllipse event from #: ' + evt.webSocketId);

    socket.broadcast.emit('drawEllipse',evt);

  });       

    socket.on('drawRect', function(evt){
        
    console.log('got drawRect event from #: ' + evt.webSocketId);

    socket.broadcast.emit('drawRect',evt);

  });       

    socket.on('drawLine', function(evt){
        
    console.log('got drawLine event from #: ' + evt.webSocketId);

    socket.broadcast.emit('drawLine',evt);

  });       




    socket.on('wwwc', function(evt){
        
    console.log('got wwwc event from #: ' + evt.webSocketId);

    socket.broadcast.emit('wwwc',evt);

  });   


    socket.on('zoom', function(evt){
        
    console.log('got zoom event from #: ' + evt.webSocketId);

    socket.broadcast.emit('zoom',evt);

  });   




  ++clients;
    console.log("new client... total clients" + clients);

  socket.emit('users_count', clients);    
  socket.on('disconnect', function () {
    --clients;
    console.log("client disconnected")
    console.log("clients" + clients);
	socket.emit('users_count', clients);    

  });


});

io.on('buttonPressed', function(i){
    console.log(' outside connection button #: ' + i);
  })

http.listen(3000, function(){
  console.log('listening on *:3000');
});

