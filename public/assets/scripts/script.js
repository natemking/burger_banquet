$(() => {
    
    //*** DOM manipulation **//
    //=======================//
    //Toggle list headings views
    if ($('#menu-list li').length === 0) {
        $('#menu-heading').css('visibility', 'hidden');
    }
    if ($('#devoured-list li').length === 0) {
        $('#devoured-heading').css('visibility', 'hidden');
    }

    //*** AJAX calls to send user data to controller ***//
    //==================================================//
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

    //Toggle burger btwn menu and devoured list
    $('.toggle-burger').on('click', function (e){
        e.preventDefault();

        let id = $(this).data('id');
        let devoured = $(this).data('devoured');

        //Toggle devoured value
        devoured = 1 - devoured;

        $.ajax({
            type: 'PUT',
            url: `/api/burgers/${id}/${devoured}`,
        }).then(() => {
          location.reload();
        });
    });

    //Delete burger
    $('.delete-burger').on('click', function (e) { 
        e.preventDefault();

        let id = $(this).data('id');
        
        $.ajax({
            type: 'DELETE',
            url: `/api/burgers/${id}`
        }).then(() =>{
            location.reload();
        });
    });
});