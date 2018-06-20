
var admin = require("firebase-admin");

var serviceAccount = require("C:/Learn/Firebase/test-23e0e-firebase-adminsdk-n6b8q-8711057b30.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-23e0e.firebaseio.com"
});
var registrationToken = "BI7JiPN0V8I8aEV3lD3bjS4mRMNN4jNok8RK3NBrFxi-vztyppdFYhRV8Fah3-kuBMJ0Svk-iReR2G-gekhJ0mY";

var payload = {
    data: {
      MyKey1: "Hello"
    }
  };

var options = {
    priority: "high",
    timeToLive: 60*60*24
};
admin.messaging().sendToDevice(registrationToken,payload,options)
    .then(function(responce){
        console.log('Succesfull send');
    })
    .catch(function(responce){
        console.log('Error send');
    })

    /*
var FCM = require('fcm-node');
    var serverKey = 'AAAAgDqOTcs:APA91bF4IdNSxfKzM35orJG1G1D6FT-kPmIuuQr_vf2IUXA9k1bPOs4_j86Gg5MC1Aa0c257eXUNv0qbgMS5XbM46QBsEf-3bzhm5er8PEGfN0WJ4islX5_fpWBXZDUBgwfChC0UrSCigrQaONps75ISRhEXy3lOwA'; //put your server key here
    var fcm = new FCM(serverKey);
 
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: 'BI7JiPN0V8I8aEV3lD3bjS4mRMNN4jNok8RK3NBrFxi-vztyppdFYhRV8Fah3-kuBMJ0Svk-iReR2G-gekhJ0mY', 
        collapse_key: 'football',
        
        notification: {
            title: 'Title of your push notification', 
            body: 'Body of your push notification' 
        },
        
        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    };
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
    */
    