
var _deviceAddress=0x5a;
var _i2cPort;

onload = function() {
  /*$.get('http://localhost:1337', data => {
    console.log(data);
  });*/
    function Sleep(millisec) {
    var start = new Date();
    while(new Date() - start < millisec);
  }

  navigator.requestI2CAccess().then(
    function(i2cAccess) {
      _i2cPort = i2cAccess.ports.get(0);
      
      
      GroveTouch.init(_i2cPort,_deviceAddress).then(function(){
        setInterval(function(){
          // Get Sensor Data
          GroveTouch.read(_i2cPort,_deviceAddress).then(ch => {
            console.log(ch);
            var senddata = "check";
            if(ch.length >= 1){
              if(ch[0]){
                senddata = "help";
              }
            }
            // Send HTTP Request
            $.ajax({
              url: 'http://192.168.43.78:1337',
              error: function(jqXHR, text, error) {
                console.log(error);
              },
              success: function(data, satus, jqXHR) {
                console.log(satus + "\n");
              },
              data: senddata
            }).done(data => {
              console.log(data);
           });
          });
        },1000);
      });
      
    },
    function(error) {
      console.log(error.message);
    }
    
  );
}

