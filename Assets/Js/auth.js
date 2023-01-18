$('#openSignUp').on('click', function(e){
    e.preventDefault();
    $('#loginForm').hide();
    $('#signForm').show();
    $('#verificationForm').hide();
    $('h1').text('Sign Up...');
})

$('#openLogin').on('click',function(e){
    e.preventDefault();
    $('#loginForm').show();
    $('#signForm').hide();
    $('#verificationForm').hide();
    $('h1').text('Log In...');
})

$('#openLoginagain').on('click',function(e){
    e.preventDefault();
    $('#loginForm').show();
    $('#signForm').hide();
    $('#verificationForm').hide();
    $('h1').text('Log In...');
})

$('#openVerification').on('click',function(e){
    e.preventDefault();
    $('#loginForm').hide();
    $('#signForm').hide();
    $('#verificationForm').show();
    $('h1').text('Forgot Password...');

    
    $('#verifyForm').show();
    $('#linksendFailure404').hide();
    $('#openLoginagain').show();
    $('#openverifyAgain').hide();
    $('#linksendFailure500').hide();
    $('#linksendSuccess').hide();
});

$('#openverifyAgain').on('click',function(e){
    e.preventDefault();
    
    $('#loginForm').hide();
    $('#signForm').hide();
    $('#verificationForm').show();
    $('h1').text('Forgot Password...');

    
    $('#verifyForm').show();
    $('#linksendFailure404').hide();
    $('#openLoginagain').show();
    $('#openverifyAgain').hide();
    $('#linksendFailure500').hide();
    $('#linksendSuccess').hide();
});


$(document).ready(function() {
    if($('#error-message').text().length!=0){
        $('#error-message').css('display', 'block');
    }
    $("#forgotForm").on('submit', (function(e) {
      e.preventDefault();
      $('#verficationButton').attr('disabled',true);
      $.ajax({
        url: $(this).attr('action'),
        type: "POST",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        success: function(response) {
            $('#verficationButton').attr('disabled',false);
           if(response.code==200){
            $('#verifyForm').hide();
            $('#linksendSuccess').show();
           }else if(response.code==404){
            $('#verifyForm').hide();
            $('#linksendFailure404').show();
            $('#openLoginagain').hide();
            $('#openverifyAgain').show();
           }else{
            $('#verifyForm').hide();
            $('#linksendFailure500').show();
           }
        }
     });
    }));
  });


/*  $(document).ready(function() {
    $("#loginSection").on('submit', (function(e) {
      e.preventDefault();
      $.ajax({
        url: $(this).attr('action'),
        type: "POST",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        success: function(data) {
            console.log(data);
        },

        error: function(response){
            console.log(response)
        }
     });
    }));
  });

  */

  

$('#signform1Example23 , #form1Example33').on('keyup',function(e){
    if($('#signform1Example23').val()== $('#form1Example33').val()){
        $('#isMatching').html('<b>Password are matching</b>');
        $('#isMatching').css('color','green');
        if($('#signform1Example13').val()!='' && $('#form1Example03').val()!=''){
            $('#signFormSubmit').attr('disabled',false);
        }    
    }else{
        $('#isMatching').html('<b>Password are not matching</b>');
        $('#isMatching').css('color','red');
        $('#signFormSubmit').attr('disabled',true);
        
    }
})  

$('#signform1Example13 , #form1Example03').on('keyup',function(e){
    if($('#signform1Example13').val()!='' && $('#form1Example03').val()!=''){
        if($('#signform1Example23').val()== $('#form1Example33').val()){
            $('#signFormSubmit').attr('disabled',false);
        }
    }
})
