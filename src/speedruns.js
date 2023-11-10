import $ from 'jquery';

const profileUrl = 'https://www.speedrun.com/api/v1/users/8e9dproj'

$(function () {
    console.log("jQuery document ready!");

    $.ajax({
        url: profileUrl,
        method: 'GET',
        success: function (response) {
            //const parsedData = JSON.parse(response);
            const data = response.data;
            console.log(data);
        },
        error: function (xhr, status, error) {
            // Handle any errors
        }
    });
});
