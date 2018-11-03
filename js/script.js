// Init App
var myApp = new Framework7({
    modalTitle: 'F7 App',
    // Enable Material theme
    material: true
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
});

$$(document).on('click', '.exit', function(){
    myApp.confirm('Anda yakin ingin keluar?', 'Informasi', function(){
        navigator.app.exitApp();
    });
});

///// GEOLOCATION \\\\
document.addEventListener("deviceready", onDeviceready, false);
function onDeviceReady(){
    var onSuccess = function(position){
        alert('Latitude:'+ position.coords.latitude + '\n' + 'Longitude:' + position.coords.longitude + '\n');
    };

    function onError(error){
        alert('code:' + error.code + '\n' + 'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}