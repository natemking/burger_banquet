$(() => {

    //Toggle list headings views
    if ($('#menu-list li').length === 0) {
        $('#menu-heading').css('visibility', 'hidden');
    }
    if ($('#devoured-list li').length === 0) {
        $('#devoured-heading').css('visibility', 'hidden');
    }
    
    $('#add-burger').on('submit', (e) => {
        e.preventDefault();
        
        $.ajax({
            type: 'POST',
            url: '/api/burgers',
            data: $('#add-burger-text').val().trim()
        }).then(() =>{
            console.log('Added burger');
            location.reload();
        });
    })

        
    
});