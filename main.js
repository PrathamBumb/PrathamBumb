let blueToothRXCharacteristic;//this is a blu
let blueToothTXCharacteristic;//this is a blu

let myBLE;
let isConnected = false;

myBLE = new p5ble();


function connectToBle() {
    // Connect to a device by passing the service UUID
    myBLE.connect("a5f125c0-7cec-4334-9214-58cffb8706c0", gotCharacteristics);
  }
  
  function disconnectToBle() {
    // Disonnect to the device
    myBLE.disconnect();
    // Check if myBLE is connected
    isConnected = myBLE.isConnected();
  }
  
  function onDisconnected() {
    console.log('Device got disconnected.');
    isConnected = false;
  }
  
  // A function that will be called once got characteristics
  function gotCharacteristics(error, characteristics) {
    console.log('looking for characteristics');
    if (error) { 
      console.log('error: ', error);
    }
    console.log('characteristics: ', characteristics);
  
    console.log(characteristics.length);
    if (characteristics.length != 2) {
      return;
    }
  
  
    for (let i=0; i<2; i++) {
      if (characteristics[i].uuid == 'a5f125c1-7cec-4334-9214-58cffb8706c0') {
        blueToothTXCharacteristic = characteristics[i];
      }
      if (characteristics[i].uuid == 'a5f125c2-7cec-4334-9214-58cffb8706c0') {
        blueToothRXCharacteristic = characteristics[i];
      }
    }
  
    myBLE.startNotifications(blueToothRXCharacteristic, gotValue, 'string');
    isConnected = myBLE.isConnected();
    if (isConnected) {
        sendData("#param,");
      }
    
    //showAllParam();
  
    // Add a event handler when the device is disconnected
    myBLE.onDisconnected(onDisconnected);
  }


  if (isConnected) {
  console.log('Connected!');
  
   
  } else {
    
    console.log('Disconnected!')
    
  }

  function gotValue(value) {

     var str = value;
     var res = str.split(",");
     if(res[0] == "person_1_no"){
        document.getElementById("person_1_no").value = res[1];
     }
     if(res[0] == "person_2_no"){
        document.getElementById("person_2_no").value = res[1];
     }
     if(res[0] == "person_3_no"){
        document.getElementById("person_3_no").value = res[1];
     }
     if(res[0] == "person_4_no"){
        document.getElementById("person_4_no").value = res[1];
     }
     if(res[0] == "person_5_no"){
        document.getElementById("person_5_no").value = res[1];
     }
     if(res[0] == "person_6_no"){
        document.getElementById("person_6_no").value = res[1];
     }
     if(res[0] == "person_7_no"){
        document.getElementById("person_7_no").value = res[1];
     }
     if(res[0] == "person_8_no"){
        document.getElementById("person_8_no").value = res[1];
     }
     if(res[0] == "person_9_no"){
        document.getElementById("person_9_no").value = res[1];
     }
     if(res[0] == "person_10_no"){
        document.getElementById("person_10_no").value = res[1];
     }



     if(res[0] == "reg_1_low"){
        document.getElementById("reg_1_low").value = res[1];
     }

     if(res[0] == "reg_1_high"){
        document.getElementById("reg_1_high").value = res[1];
     }


     if(res[0] == "reg_2_low"){
        document.getElementById("reg_2_low").value = res[1];
     }

     if(res[0] == "reg_2_high"){
        document.getElementById("reg_2_high").value = res[1];
     }


     if(res[0] == "reg_3_low"){
        document.getElementById("reg_3_low").value = res[1];
     }

     if(res[0] == "reg_3_high"){
        document.getElementById("reg_3_high").value = res[1];
     }

     if(res[0] == "reg_4_low"){
        document.getElementById("reg_4_low").value = res[1];
     }

     if(res[0] == "reg_4_high"){
        document.getElementById("reg_4_high").value = res[1];
     }
     


     if(res[0] == "reg_5_low"){
        document.getElementById("reg_5_low").value = res[1];
     }

     if(res[0] == "reg_5_high"){
        document.getElementById("reg_5_high").value = res[1];
     }
     
     

     if(res[0] == "reg_6_low"){
        document.getElementById("reg_6_low").value = res[1];
     }

     if(res[0] == "reg_6_high"){
        document.getElementById("reg_6_high").value = res[1];
     }
     


     if(res[0] == "reg_7_low"){
        document.getElementById("reg_7_low").value = res[1];
     }

     if(res[0] == "reg_7_high"){
        document.getElementById("reg_7_high").value = res[1];
     }
     

     if(res[0] == "reg_8_low"){
        document.getElementById("reg_8_low").value = res[1];
     }

     if(res[0] == "reg_8_high"){
        document.getElementById("reg_8_high").value = res[1];
     }
     

     if(res[0] == "reg_9_low"){
        document.getElementById("reg_9_low").value = res[1];
     }

     if(res[0] == "reg_9_high"){
        document.getElementById("reg_9_high").value = res[1];
     }
     

     if(res[0] == "reg_10_low"){
        document.getElementById("reg_10_low").value = res[1];
     }

     if(res[0] == "reg_10_high"){
        document.getElementById("reg_10_high").value = res[1];
     }
     

     



    
    
    }



function sendData(data) {
    const inputValue = data;
    if (!("TextEncoder" in window)) {
      console.log("Sorry, this browser does not support TextEncoder...");
    }
    var enc = new TextEncoder(); // always utf-8
    blueToothTXCharacteristic.writeValue(enc.encode(inputValue));
  }
  




  function reg_1_save(){
     
      var a = document.getElementById("reg_1_high").value;
      var b = document.getElementById("reg_1_low").value;
      console.log(a + b);
    sendData("#reg1,"+a + "," + b)
  }

  function reg_2_save(){
     
    var a = document.getElementById("reg_2_high").value;
    var b = document.getElementById("reg_2_low").value;
    console.log(a + b);
  sendData("#reg2,"+a + "," + b)
}

function reg_3_save(){
     
    var a = document.getElementById("reg_3_high").value;
    var b = document.getElementById("reg_3_low").value;
    console.log(a + b);
  sendData("#reg3,"+a + "," + b)
}

function reg_4_save(){
     
    var a = document.getElementById("reg_4_high").value;
    var b = document.getElementById("reg_4_low").value;
    console.log(a + b);
  sendData("#reg4,"+a + "," + b)
}

function reg_5_save(){
     
    var a = document.getElementById("reg_5_high").value;
    var b = document.getElementById("reg_5_low").value;
    console.log(a + b);
  sendData("#reg5,"+a + "," + b)
}


function reg_6_save(){
     
    var a = document.getElementById("reg_6_high").value;
    var b = document.getElementById("reg_6_low").value;
    console.log(a + b);
  sendData("#reg6,"+a + "," + b)
}

function reg_7_save(){
     
    var a = document.getElementById("reg_7_high").value;
    var b = document.getElementById("reg_7_low").value;
    console.log(a + b);
  sendData("#reg7,"+a + "," + b)
}

function reg_8_save(){
     
    var a = document.getElementById("reg_8_high").value;
    var b = document.getElementById("reg_8_low").value;
    console.log(a + b);
  sendData("#reg8,"+a + "," + b)
}

function reg_9_save(){
     
    var a = document.getElementById("reg_9_high").value;
    var b = document.getElementById("reg_9_low").value;
    console.log(a + b);
  sendData("#reg9,"+a + "," + b)
}

function reg_10_save(){
     
    var a = document.getElementById("reg_10_high").value;
    var b = document.getElementById("reg_10_low").value;
    console.log(a + b);
  sendData("#reg10,"+a + "," + b)
}

  function ph_1_save(){
      var a = document.getElementById("person_1_no").value;
      console.log(a);
    sendData("#Ph01,"+a);
  }

  function ph_2_save(){
      var a = document.getElementById("person_2_no").value;
      console.log(a);
    sendData("#Ph02,"+a);
  }

  function ph_3_save(){
    var a = document.getElementById("person_3_no").value;
    console.log(a);
  sendData("#Ph03,"+a);
}

function ph_4_save(){
    var a = document.getElementById("person_4_no").value;
    console.log(a);
  sendData("#Ph04,"+a);
}

function ph_5_save(){
    var a = document.getElementById("person_5_no").value;
    console.log(a);
  sendData("#Ph05,"+a);
}

function ph_6_save(){
    var a = document.getElementById("person_6_no").value;
    console.log(a);
  sendData("#Ph06,"+a);
}

function ph_7_save(){
    var a = document.getElementById("person_7_no").value;
    console.log(a);
  sendData("#Ph07,"+a);
}

function ph_8_save(){
    var a = document.getElementById("person_8_no").value;
    console.log(a);
  sendData("#Ph08,"+a);
}

function ph_9_save(){
    var a = document.getElementById("person_9_no").value;
    console.log(a);
  sendData("#Ph09,"+a);
}

function ph_10_save(){
    var a = document.getElementById("person_10_no").value;
    console.log(a);
  sendData("#Ph10,"+a);
}

