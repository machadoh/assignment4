// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

$(document).ready(function() {
        $('.flexsearch-wrapper').on("input", function(){
                $('#search_div').html("");
		var input = $('.flexsearch-input').val();
		if(input.length > 0){
		    AutoComplete(input);
		}
		else if (input.length == 0){
		    $('#search_div').html("");
		}
	    });
    });

function AutoComplete(input){
    $.ajax({
	    url: 'http://www.mattbowytz.com/simple_api.json?data=all',
		dataType: 'json',
		success: function(data){
		$.each(data.data, function(key, val){
			$.each(val, function(k, v){

				if(v.toUpperCase().search(input.toUpperCase()) > -1){
				    AddListItem(v);
				}
			    });
		    });
	    }
        });
}

function AddListItem(ListItem){
    $('#search_div').append('<li>' + ListItem + '</li>');
}

