
        
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

        $(document).on("click", ".menu-btn", function() {

                if($(this).is(":checked")){

                    $('.headers').css("background-color", "transparent");

                    var filterVal = 'blur(40px)';

                    $('.blur-content')
                      .css('filter',filterVal)
                      .css('webkitFilter',filterVal)
                      .css('mozFilter',filterVal)
                      .css('oFilter',filterVal)
                      .css('msFilter',filterVal);



                   /* $('.blur-content').css('opacity', '.8');*/
                

                    $("#nav-footer").addClass("mob-nav-item");

                    $('body').css('overflowY', 'hidden');




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

       

                      /*$('.blur-content').css('opacity', '1');*/


                       $("#nav-footer").removeClass("mob-nav-item");
                       

                       $('body').css('overflowY', 'visible');


                }

            });



        $(document).on("click", "#details-button", function() 
        {

          $(this).removeClass('send-btn-css');
          $(this).addClass('success-btn-css');

          $(this).html("<i class='fa fa-check' aria-hidden='true' style='font-size:14px;'></i>");

        });