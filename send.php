<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    // if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['carNum'])) {$formData = $_POST['carNum'];}
 
    $to = "site@sitename.com"; 
    $sendfrom   = "support@sitename.ru"; 
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData
    <b>Имя пославшего:</b> $name
    <b>Телефон:</b> $phone";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center>
 
Спасибо за отправку вашего сообщения!
 
</center>';
    }
    else
    {
    echo '<center>
 
<b>Ошибка. Сообщение не отправлено!</b>
 
</center>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}?>

<?php

// $name = $_POST['name'];
// $phone = $_POST['phone'];
// $carNum = $_POST['carNum'];

// $name = htmlspecialchars($name);
// $phone = htmlspecialchars($phone);
// $carNum = htmlspecialchars($carNum);

// $name = urldecode($name);
// $phone = urldecode($phone);
// $carNum = urldecode($carNum);

// $name = trim($name);
// $phone = trim($phone);
// $carNum = trim($carNum);

// ini_set('display_errors','On');
// error_reporting('E_ALL');

// if (mail("p.koshliak@gmail.com", "Заявка с сайта", "Имя: ".$name." Phone: ".$phone.". Номер Авто: ".$carNum ,"From: example@mail.ru \r\n"))
//  {     echo "сообщение успешно отправлено";
// } else {
//     echo "при отправке сообщения возникли ошибки";
// }
?>






