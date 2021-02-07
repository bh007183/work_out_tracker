



    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);




$(".button").on("click", function(event){
    event.preventDefault()
   
    console.log("click")
    
    const stats = {
        name: $("#name").val(),
        type:$("#type").val(),
        weight: $("#weight").val(),
        sets: $("#sets").val(),
        reps:$("#reps").val(),
        duration: $("#duration").val(),
        distance: $("#distance").val()
    }
    $.ajax({
        url: "/api/post",
        method: "POST",
        data: stats
    }).then(res=>{

        window.location.href = ("/test.html")
       
    })
})

$.ajax({
    url: "/test/all",
    method: "GET",
    
}).then(res=>{
    
    for(let i = 0; i < res.length; i++){
          
                $('#here').append($("<div>").addClass("card").append(
                    `            <div class="row">
                    <div class="one col s6">
                      ${res[i].name}
                    </div>
                    <div class="two col s6">
                    ${res[i].type}
                    </div>
                  </div>
                  <div class="row">
                    <div class="three col s6">
                    ${res[i].weight}
                    </div>
                    <div class="four col s3">
                    ${res[i].reps}
                    </div>
                    <div class="five col s3">
                    ${res[i].sets}
                    </div>
                  </div>
                  <div class="row">
                    <div class="six col s6">
                    ${res[i].distance}
                    </div>
                    <div class="seven col s6">
                    ${res[i].duration}
                    </div>
                    <button class="delete" data-id="${res[i].id}">Delete</button>
                    <button class="edit modal-trigger" href="#modal1" data-id="${res[i].id}">Edit</button>
                   
                 `
            
                ))
                }


    $(".delete").on("click", function(event){
        console.log(event.target)
    console.log("click")
        $.ajax({
            url: "api/delete/" + $(event.target).data("id"),
            method: "DELETE"
    
        
        }).then(res=>{
            location.reload()
        })
    
    
    })
    $(".edit").on("click", function(event){
        
        $.ajax({
            url: "get/" + $(event.target).data("id"),
            method: "get"
        }).then(res=>{
            // window.location.href = ("index.html")
            console.log(res)
        $("#name").val(res.name),
        $("#type").val(res.type),
        $("#weight").val(res.weight),
        $("#sets").val(res.sets),
        $("#reps").val(res.reps),
        $("#duration").val(res.duration),
        $("#distance").val(res.distance)
        

        })
      
        
        

        
        console.log(event.target)
    // console.log("click")
    //     $.ajax({
    //         url: "api/delete/" + $(event.target).data("id"),
    //         method: "PUT"
    
        
    //     }).then(res=>{
    //         location.reload()
    //     })
    
    
    })
               

 
   
})






    


