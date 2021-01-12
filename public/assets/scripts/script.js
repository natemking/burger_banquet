$(() => {

    //Toggle list headings views
    if ($('#menu-list li').length === 0) {
        $('#menu-heading').css('visibility', 'hidden');
    }
    if ($('#devoured-list li').length === 0) {
        $('#devoured-heading').css('visibility', 'hidden');
    }

    //Add a burger
    $('#add-burger').on('submit', function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'api/burgers',
            data: {burger: $('#add-burger-text').val().trim()}
        }).then(() =>{
            location.reload();
        });
    });

    //Toggle from menu
    $('.toggle-burger').on('click', function (e){
        e.preventDefault();
        let id = $(this).data('id');
        let devoured = $(this).data('devoured');
        //Toggle devoured 
        devoured = 1 - devoured;
       
        $.ajax({
            type: 'PUT',
            url: `/api/burgers/${id}/${devoured}`,
        }).then(() => {
          location.reload();
        });
    });

    $('.delete-burger').on('click', function (e) { 
        e.preventDefault();
        let id = $(this).data('id');

        $.ajax({
            type: 'DELETE',
            url: `/api/burgers/${id}`
        }).then(() =>{
            location.reload();
        })
    })

    
});