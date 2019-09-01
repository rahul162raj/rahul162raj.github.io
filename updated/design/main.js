
        
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


          /*document.getElementById('header-file').innerHTML = 
                      loadPage('header_bootstrap.html');      */   
        });

        $(document).on("click", ".menu-btn", function() {

                if($(this).is(":checked")){

                    $('.headers').css("background-color", "transparent");

                    var filterVal = 'blur(20px)';

                    $('.blur-content')
                      .css('filter',filterVal)
                      .css('webkitFilter',filterVal)
                      .css('mozFilter',filterVal)
                      .css('oFilter',filterVal)
                      .css('msFilter',filterVal);

                    /*$('.bg-img')
                      .css('filter',filterVal)
                      .css('webkitFilter',filterVal)
                      .css('mozFilter',filterVal)
                      .css('oFilter',filterVal)
                      .css('msFilter',filterVal);*/

                    $('.blur-content').css('opacity', '.5');
                    /*$('.bg-img').css('opacity', '.5');*/




                }

                else if($(this).is(":not(:checked)")){

                    $('.headers').css("background-color", "white");

                     var filterVal = 'blur(0px)';

                    $('.blur-content')
                      .css('filter',filterVal)
                      .css('webkitFilter',filterVal)
                      .css('mozFilter',filterVal)
                      .css('oFilter',filterVal)
                      .css('msFilter',filterVal);

                    /*$('.bg-img')
                      .css('filter',filterVal)
                      .css('webkitFilter',filterVal)
                      .css('mozFilter',filterVal)
                      .css('oFilter',filterVal)
                      .css('msFilter',filterVal);*/

                      $('.blur-content').css('opacity', '1');
                      /*$('.bg-img').css('opacity', '1');*/

                }

            });