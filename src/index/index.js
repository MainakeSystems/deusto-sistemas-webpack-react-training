console.log("Index Page!!!");

let loginContent;

$('#login-button').click(function() {
    loginContent = $('#login-textbox').val();
    console.log("DATA: ", $('#login-textbox').val());
    alert("Login: "+ loginContent);
});

