<?php
// bot id 456027644
$json = ($_POST['productOrder']);
$productOrder = json_decode($json);
print_r($productOrder);
$jsons = ($_POST['productCart']);
$productOrder = json_decode($jsons);
print_r($productCart);
$token = "2104924397:AAGnPRV8mK89V7PLOMaZpouHuUlppHl0-n8";
$chat_id = "-686161989";
// "chat":{"id":-686161989
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $email = ($_POST['email']);
    $productOrder = $productOrder;
    $productCart = $productCart;
    $arr = array(
        'Name:' => $name,
        'Email:' => $email,
        'My order:' => $productOrder,
        'My cart:' => $productCart
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