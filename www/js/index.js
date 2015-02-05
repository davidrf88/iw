$(document).ready(function(){
  $('.bxslider').bxSlider();
});

function photo()
{

navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
   alert(imageData);
  var image = document.getElementById('CapturedImg');
    image.src = "data:image/jpeg;base64," + imageData;
   
      $(".imgLiquidFill").imgLiquid({
        fill: true,
        horizontalAlign: "center",
        verticalAlign: "top"
    });



}

function onFail(message) {
   // alert('Failed because: ' + message);
}



}
function sharing()
{
var image = document.getElementById('CapturedImg');
    

  window.plugins.socialsharing.share(null, 'Imagen test', image.src, null);

}

function Contacts()
{
function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
   var ulist = $("#listCon")
     for (var i=0; i<contacts.length; i++) 
    {

ulist.append("<li>"+contacts[i].name.givenName+"</li>");
      
    }

};

function onError(contactError) {
    alert('onError!');
};

// find all contacts with 'Bob' in any name field
var options      = new ContactFindOptions();
options.filter   = "";
options.multiple = true;
options.desiredFields = ["name"];
var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
navigator.contacts.find(fields, onSuccess, onError, options);

}