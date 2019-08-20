
        
      $( document ).ready(function() {  

        	function loadPage(href)
            {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", href, false);
                xmlhttp.send();
                return xmlhttp.responseText;
            }

          document.getElementById('header-file').innerHTML = 
                      loadPage('header.html');

        });

    