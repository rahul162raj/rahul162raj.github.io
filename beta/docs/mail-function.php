<?php
#	$config['base_url'] = 'http://'.$_SERVER['SERVER_NAME']."/";
#	define('BASE_URL', $config['base_url']);

	/*Contact Form*/


	if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
			
			$name =  $_REQUEST['name'];
			$email = $_REQUEST['mail'];;
			$message = $_REQUEST['message'];

			
    		/*$selectedProjects = implode(', ', $_POST['kvcArray']);*/

    		$selectedProjects =  $_REQUEST['hiddenF'];
			

			//user side		
			$booking_mail = '';
			$booking_mail .= '<span style="color:#009aff;display:block;margin-bottom:20px">Dear <b>'.$name.', </b></span>';
			$booking_mail .= '<span style="color:#646464;display:block;margin-bottom:20px">Thanks for Reaching Out!</span>';

			
			$booking_mail .= '<div style="padding:4%;border:1px solid #f2f2f2;background:#f7f7f7;margin-bottom:30px;margin-top:20px;">';
			$booking_mail .= '<span style="font-size:20px">We are thrilled to hear from you. Our team will get back to you soon.</span><br>';;
			$booking_mail .= '</div>';
			$booking_mail .= '<span style="color:#009aff;display:block;margin-bottom:5px">Cheers!</span>';
			$booking_mail .= '<h3 style="color:black;padding:0px;margin:5px;margin-bottom:10px">Swevens Team </h3>';

			//end user side


			//visolve side
			$booking_mail1 = '';
			$booking_mail1 .= '<div style="padding:10px;border:1px solid #ddd;margin-bottom:20px">';
			$booking_mail1 .= '<h2 >Enquiry Details</h2>';
			$booking_mail1 .= '<div style="font-size:22px;color:#646464">';
			$booking_mail1 .= '<span style="display:block;padding-top:30px;"><b>Name &nbsp; : &nbsp; </b><span>'.$name.'</span></span>';
			$booking_mail1 .= '<span style="display:block;padding-top:40px;"><b>Email &nbsp; : &nbsp; </b><span>'.$email.'</span></span>';
			$booking_mail1 .= '<span style="display:block;padding-top:40px;"><b>Message &nbsp; : &nbsp; </b><span>'.$message.'</span></span>';
			$booking_mail1 .= '<span style="display:block;padding-top:40px;"><b>services &nbsp; : &nbsp; </b><span>'.$selectedProjects.'</span></span>';
			$booking_mail1 .= '</div>';
			$booking_mail1 .= '<div style="margin-top:50px;margin-bottom:50px; margin-left:10px;display:flex;">
			<img height="70px" width="70px" src="https://pbs.twimg.com/profile_images/1119049077310640128/jMkCdSAi_400x400.png"/>
			<span style="color:#646464;display:block;margin-left:20px;margin-top:13px">Swevens Immersive Studio</span>
			</div>';
			$booking_mail1 .= '</div>';

			//end visolve side



			$msg = '<table style="border : 0px; border-spacing : 0px; width : 900px; \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif" cellpadding="5"><tr><td style="width : 100%;" colspan="3">';
			$msg .= '<table style="border : 0px; border-spacing : 0px; width : 100%;" cellpadding="5">';
			$msg .= '<tr>';
			$msg .= '<td style="width : 425px; border: 1px solid #DDD;border-right : 3px solid #DDD; Padding : 20px;background:#FDFDFD;" valign="top">';
			/*$msg .= '<h4 style="color:#009AFF;padding-bottom:5px;margin:0px;margin-bottom:10px;text-transform : uppercase;border-bottom:1px solid #DDD;font-size:15px;">Swevens</h4>'*/
			$msg .= '<img height="100px" width="100px" src="https://pbs.twimg.com/profile_images/1119049077310640128/jMkCdSAi_400x400.png"  class="CToWUd">';
			$msg .= '</div>';
			 
			$msg .= '<div style="padding:10px;border:1px solid #f2f2f2;background:#f7f7f7;margin-bottom:10px;margin-top:10px;">';
			$msg .= '<span style="font-size:14px">Swevens Immersive Studio </span><br>';
			$msg .= '<span style="font-size:14px">Ashok, 42nd street, </span><br>';
			$msg .= '<span style="font-size:14px">6th Avenue, Nagar, Chennai,</span><br>';
	                $msg .= '<span style="font-size:14px"> Tamil Nadu - 600083</span>';
			$msg .= '</div>';
			$msg .= '<div style="padding:10px;border:1px solid #f2f2f2;background:#f7f7f7;margin-bottom:10px">';
			$msg .= '<span style="color:#009aff;display:block;margin-bottom:5px;font-size:14px"><b>CALL US &nbsp;: </b></span>';
			$msg .= '<span style="font-size:14px"><a href="tel:+919444092103">+919444092103</a></span><br/>';
			
			$msg .= '</div>';
			$msg .= '<div style="padding:10px;border:1px solid #f2f2f2;background:#f7f7f7;margin-bottom:10px">';
			$msg .= '<span style="color:#009aff;display:block;margin-bottom:5px;font-size:14px"><b>MAIL US &nbsp;: </b></span>';
			$msg .= '<span style="font-size:14px"><a href="mailto:services@visolve.com" target="_blank">contact@swevens.co</a> </span>';
			$msg .= '</div>';
			$msg .= '</td>';
			$msg .= '<td style="width : 425px; border:1px solid #DDD;border-left:0px; padding:20px;background:#FFF;" valign="top">';
			$msg .= $booking_mail;										
			$msg .= '</td>';										
			$msg .= '</tr>';
			$msg .= '</table>';
			$msg .= '</td></tr></table>';
			$subject='Contact details from '.$name;		
			$subject1='Contact Details';
			
			$headers = "";
			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";		
			$headers .= "From: $email" . "\r\n";
			$headers1 = "";		
			$headers1  = 'MIME-Version: 1.0' . "\r\n";		
			$headers1 .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";				
			$headers1 .= "From: contact@swevens.co" . "\r\n";
	                if($email)
	                {
							if(mail('contact@swevens.co', $subject, $booking_mail1, $headers))
							{
													
								mail($email, $subject1, $msg, $headers1);	
								$mailsent = 3;
							
							}		
                     }
	             
	}

?>


