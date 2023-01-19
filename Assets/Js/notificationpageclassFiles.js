class initiateNotifications{
    constructor(){
        this.initialize();
    }

    initialize(){
        $.ajax({
            url: '/notifications/getTasks',
            type:'GET',
            success: function(response){
                console.log(response);
            }
        })
    }
}