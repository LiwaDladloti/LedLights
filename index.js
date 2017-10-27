var five = require("johnny-five");

// Create an instance of the Board class - referring to the Arduino Micro Controller 'board'
var board = new five.Board();

board.on('ready', function(){
        
    var pin = new five.Pin(7);
    var led = new five.Led(7);
    var blinkInterval;
    var counter = 0;
    
    var ledLight = function(){
        this.on = function(){
            led.on();
        }
        
        this.blink = function(){
            led.blink()
            
            blinkInterval = setInterval(function(){
                setTimeout(function(){
                    led.blink()
                }, 2000)
            })
        }
        
        this.off = function(){
            led.off()
            setTimeout(function(){
                clearInterval(blinkInterval)
            })
        }
        

    }
    
    var on_count = function(){
        this.count = function(){
            if(led.on()){
                counter++;
            }
        console.log(counter)
        }
    }
    
    var light = new ledLight(7);
    var counts = new on_count(7);
    
    light.on();
    light.off();
    light.blink();
    counts.count();
});


