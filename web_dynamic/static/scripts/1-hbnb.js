$('document').ready(function () {
    const amenities = [];
    $('input[type=checkbox]').change(function () {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');
        if ($(this).is(':checked')) {
            amenities.push({id: amenityId, name: amenityName});
        } else {
            amenities.splice(amenities.findIndex(item => item.id === amenityId), 1);
        }
        console.log(amenities); // Check the output in the browser console
        $('.amenities h4').text(amenities.map(item => item.name).join(', '));
    });
});
