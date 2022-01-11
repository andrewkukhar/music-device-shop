<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->setFrom('ordered@music-device.store', 'Order');
	$mail->addAddress('andrey.rise@gmail.com');
	$mail->Subject = 'Hi! This is order';

	$body = '<h1>Встречайте супер письмо!</h1>';	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['productOrder']))){
		$body.='<p><strong>Order:</strong> '.$_POST['productOrder'].'</p>';
	}
	if(trim(!empty($_POST['productCart']))){
		$body.='<p><strong>Cart:</strong> '.$_POST['productCart'].'</p>';
	}
	
	$mail->Body = $body;
	if (!$mail->send()) {
		$message = 'Error';
	} else {
		$message = 'Good Luck!';
	}
	$response = ['message' => $message];
	header('Content-type: application/json');
	echo json_encode($response);
?>