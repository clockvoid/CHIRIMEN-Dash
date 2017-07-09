
onload = function() {
  /*$.get('http://localhost:1337', data => {
    console.log(data);
  });*/
  $.ajax({
    url: 'http://192.168.43.78:1337',
    error: function(jqXHR, text, error) {
      console.log(error);
    },
	  success: function(data, satus, jqXHR) {
	    console.log(satus + "\n");
	  }
  }).done(data => {
    console.log(data);
 });
}

