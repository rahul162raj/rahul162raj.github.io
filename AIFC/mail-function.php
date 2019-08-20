<?php
#	$config['base_url'] = 'http://'.$_SERVER['SERVER_NAME']."/";
#	define('BASE_URL', $config['base_url']);

	/*Contact Form*/
	if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
			
			$name =  $_REQUEST['name'];
			$email = $_REQUEST['email'];;
			$phone = $_REQUEST['phone'];

    			/*$designation=$_POST["designation"];
    			$country=$_POST["country"];
    			$clinic_name=$_POST["clinic_name"];
    			$curl=$_POST["company_url"];    
    			$speciality=$_POST["speciality"];
    			$patients=$_POST["patients"];
    			$provider=$_POST["provider"];
    			$reference=$_POST["how"];
    			$info=$_POST["add_info"];
    			$selectedProjects  = 'None';
    			if(isset($_POST['projects']) && is_array($_POST['projects']) && count($_POST['projects']) > 0){
        		$selectedProjects = implode(', ', $_POST['projects']);
    			}*/

			//user side		
			$booking_mail = '';
			$booking_mail .= '<span style="color:#009aff;display:block;margin-bottom:20px">Dear <b>'.$name.', </b></span>';
			$booking_mail .= '<span style="color:#646464;display:block;margin-bottom:20px">Thanks for Reaching Out!</span>';

			/*$booking_mail .= '<div style="padding:10px;border:1px solid #ddd;background:#f8f8f8;margin-bottom:20px">';
			$booking_mail .= '<h4 style="font-weight:500;color:#f8b506;background-color:#3f3f3f;margin:0px;padding:10px;font-size:15px;margin-bottom:15px">Enquiry Details</h4>';
			$booking_mail .= '<div style="font-size:14px;color:#646464">';
			$booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Name : </b><span>'.$name.'</span></span>';
			$booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Email : </b><span>'.$email.'</span></span>';
			$booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Mobile : </b><span>'.$phone.'</span></span>';
			$booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Designation: </b><span>'.$designation.'</span></span>';
                        $booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Country : </b><span>'.$country.'</span></span>';
                        $booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Clinic Name: </b><span>'.$clinic_name.'</span></span>';
                   if($curl)
                   {
                        $booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Company Website : </b><span>'.$curl.'</span></span>';
                   }
                   if($reference)
                   {
                        $booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Reference : </b><span>'.$reference.'</span></span>';
                   }
                   if($info)
                   {
                        $booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Additional Information : </b><span>'.$info.'</span></span>';
                   }
                        $booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Speciality: </b><span>'.$speciality.'</span></span>';
                        $booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>No of Patients : </b><span>'.$patients.'</span></span>';
                        $booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>No of Provider: </b><span>'.$provider.'</span></span>';
                        $booking_mail .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Value added services :</b><span>'.$selectedProjects.'</span></span>';
			$booking_mail .= '<br>';
			$booking_mail .= '</div>';
			$booking_mail .= '</div>';*/
			
			$booking_mail .= '<div style="padding:10px;border:1px solid #f2f2f2;background:#f7f7f7;margin-bottom:10px">';
			$booking_mail .= '<span style="font-size:14px">We are thrilled to hear from you. Our team will get back to you soon.</span><br>';;
			$booking_mail .= '</div>';
			$booking_mail .= '<span style="color:#009aff;display:block;margin-bottom:5px">Cheers!</span>';
			$booking_mail .= '<h3 style="color:#ff6900;padding:0px;margin:0px;margin-bottom:10px">Visolve Team </h3>';

			//end user side


			//visolve side
			$booking_mail1 = '';
			$booking_mail1 .= '<span style="color:#009aff;display:block;margin-bottom:20px">Hosting and Deployment</span><br>';
			//$booking_mail1 .= '<span style="color:#646464;display:block;margin-bottom:20px">Thanks for Reaching Out!</span>';
			$booking_mail1 .= '<div style="padding:10px;border:1px solid #ddd;background:#f8f8f8;margin-bottom:20px">';
			$booking_mail1 .= '<h4 style="font-weight:500;color:#f8b506;background-color:#3f3f3f;margin:0px;padding:10px;font-size:15px;margin-bottom:15px">Enquiry Details</h4>';
			$booking_mail1 .= '<div style="font-size:14px;color:#646464">';
			$booking_mail1 .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Name : </b><span>'.$name.'</span></span>';
			$booking_mail1 .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Email : </b><span>'.$email.'</span></span>';
			$booking_mail1 .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Mobile : </b><span>'.$phone.'</span></span>';
			/*$booking_mail1 .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Designation: </b><span>'.$designation.'</span></span>';
                        $booking_mail1 .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Country : </b><span>'.$country.'</span></span>';
                        $booking_mail1 .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Clinic Name: </b><span>'.$clinic_name.'</span></span>';
                   if($curl)
                   {
                        $booking_mail1 .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Company Website : </b><span>'.$curl.'</span></span>';
                   }
                        $booking_mail1 .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Speciality: </b><span>'.$speciality.'</span></span>';
                        $booking_mail1 .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>No of Patients : </b><span>'.$patients.'</span></span>';
                        $booking_mail1 .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>No of Provider: </b><span>'.$provider.'</span></span>';
                        $booking_mail1 .= '<span style="display:block;padding-top:10px;border-bottom:1px solid #ddd"><b>Value added services </b><span>'.$selectedProjects.'</span></span>';*/
			$booking_mail1 .= '<br>';
			$booking_mail1 .= '</div>';
			$booking_mail1 .= '</div>';
			//$booking_mail1 .= '<div style="padding:10px;border:1px solid #f2f2f2;background:#f7f7f7;margin-bottom:10px">';
			//$booking_mail1 .= '<span style="font-size:14px">We are thrilled to hear from you. Our team will get back to you soon.</span><br>';;
			//$booking_mail1 .= '</div>';
			//$booking_mail1 .= '<span style="color:#009aff;display:block;margin-bottom:5px">Cheers!</span>';
			//$booking_mail1 .= '<h3 style="color:#ff6900;padding:0px;margin:0px;margin-bottom:10px">Visolve Team </h3>';

			//end visolve side



			$msg = '<table style="border : 0px; border-spacing : 0px; width : 900px; \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif" cellpadding="5"><tr><td style="width : 100%;border : 1px solid #FFA400;" colspan="3">';
			$msg .= '<table style="border : 0px; border-spacing : 0px; width : 100%;" cellpadding="5">';
			$msg .= '<tr>';
			$msg .= '<td style="width : 425px; border: 1px solid #DDD;border-right : 3px solid #DDD; Padding : 20px;background:#FDFDFD;" valign="top">';
			$msg .= '<h4 style="color:#009AFF;padding-bottom:5px;margin:0px;margin-bottom:10px;text-transform : uppercase;border-bottom:1px solid #DDD;font-size:15px;">Visolve</h4>';
			$msg .= '<img src="https://www.visolve.com/uploads/images/logo.png"  class="CToWUd">';
			$msg .= '</div>';
			$msg .= '<div style="padding:10px;border:1px solid #f2f2f2;background:#f7f7f7;margin-bottom:10px">';
			$msg .= '<span style="font-size:14px">ViSolve Inc </span><br>';
			$msg .= '<span style="font-size:14px">6559, Springpath Lane, </span><br>';
			$msg .= '<span style="font-size:14px">San Jose,California - 95120.</span><br>';
	                $msg .= '<span style="font-size:14px">USA</span>';
			$msg .= '</div>';
			$msg .= '<div style="padding:10px;border:1px solid #f2f2f2;background:#f7f7f7;margin-bottom:10px">';
			$msg .= '<span style="color:#009aff;display:block;margin-bottom:5px;font-size:14px"><b>CALL US &nbsp;: </b></span>';
			$msg .= '<span style="font-size:14px"><a href="tel:+1-408-850-2243">+1-408-850-2243</a></span><br/>';
			
			$msg .= '</div>';
			$msg .= '<div style="padding:10px;border:1px solid #f2f2f2;background:#f7f7f7;margin-bottom:10px">';
			$msg .= '<span style="color:#009aff;display:block;margin-bottom:5px;font-size:14px"><b>CONTACT BY WEB &nbsp;: </b></span>';
			$msg .= '<span style="font-size:14px"><a href="mailto:services@visolve.com" target="_blank">services@visolve.com</a> </span>';
			$msg .= '</div>';
			$msg .= '</td>';
			$msg .= '<td style="width : 425px; border:1px solid #DDD;border-left:0px; padding:20px;background:#FFF;" valign="top">';
			$msg .= $booking_mail;										
			$msg .= '</td>';										
			$msg .= '</tr>';
			$msg .= '</table>';
			$msg .= '</td></tr></table>';
			$subject='Visolve Cloud Hosting from '.$name;		
			$subject1='Visolve Cloud Hosting Contact Details';
			
			$headers = "";
			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";		
			$headers .= "From: $email" . "\r\n";
			$headers1 = "";		
			$headers1  = 'MIME-Version: 1.0' . "\r\n";		
			$headers1 .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";				
			$headers1 .= "From: rahulrajcse07@gmail.com" . "\r\n";
	                if($email)
	                {
							if(mail('rahulrajcse07@gmail.com', $subject, $booking_mail1, $headers))
							{
													
								mail($email, $subject1, $msg, $headers1);	
								$mailsent = 3;
							
							}			
                     }
	             
	}

?>
