<?php
// bot id 456027644
$token = "2104924397:AAGnPRV8mK89V7PLOMaZpouHuUlppHl0-n8";
$chat_id = "-686161989";
// "chat":{"id":-686161989
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $email = ($_POST['email']);
    $productModel = ($_POST['productModel']);
    $productPrice = ($_POST['productPrice']);
    $productQuantity = ($_POST['productQuantity']);
    $totalSum = ($_POST['totalSum']);

    $arr = array(
        'Name:' => $name,
        'Email:' => $email,
        'Model:' => $productModel,
        'Price:' => $productPrice,
        'Quantity:' => $productQuantity,
        'Total Sum:' => $totalSum,
    );
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    if ($sendToTelegram) {
        echo "Thank You! You order received. Coming soon call back you.";
    }
    else {
        echo "Sorry. Something wrong.";
    }
}
?>