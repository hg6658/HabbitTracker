class initiateNotifications{
    constructor(){
        this.initialize();
    }

    initialize(){
        $.ajax({
            url: '/notifications/getTasks',
            type:'GET',
            success: function(response){
                for(let task of response.data[0].tasks){
                    new initiateNotification(task);
                }
            }
        })
    }
}

class initiateNotification{
    constructor(task){
        this.task = task;
        this.initialize();
    }

    initialize(){
        let self= this;
        let [hours,minutes] = self.task.timeRemind.split(':');
        let task = self.task;
        let currentTime = new Date().getTime();
        let futureTime = new Date(Date.now()).setHours(hours,minutes,0);
        let diffTimes = futureTime-currentTime;
        diffTimes = diffTimes>0 ? diffTimes : 0;
        setTimeout(function(){
            self.createNotification(task);
        },diffTimes);
    }

    createNotification(task){
        $('#noNotifications').remove();
        alert('You have a notifications check your notifications');
        $('#notificationsBody').append(`<div class="card" id=${task._id} style="max-width:800px; margin: 20px;">
        <div class="card-header" style="background: #28a745; color: white; font-weight: bold;">
          ${task.habbitName}
        </div>
        <div class="card-body">
          <h3 class="card-title">You need to : ${task.habbitName} at ${task.timeRemind}</h3>
          <p class="card-text">${task.description}</p>
          <button href="#" class="btn btn-success">Clear It now</button>
        </div>
      </div>`);
       $(`#${task._id}`).find('button').on('click',function(e){
        $(`#${task._id}`).remove();
       })
    }

}