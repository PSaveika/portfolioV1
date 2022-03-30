<?php

header('Content-Type: text/html; charset=utf-8');

// Email recipient
$EmailTo = "povilassaveika@gmail.com";

$errors = "";

// Name
if (empty($_POST["name"])) {
    $errors = "Name is required ";
} else {
    $name = $_POST["name"];
}

// Email
if (empty($_POST["email"])) {
    $errors .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// Subject
if (empty($_POST["subject"])) {
    $errors = "Subject is required ";
} else {
    $Subject = $_POST["subject"];
}

// Message
if (empty($_POST["message"])) {
    $errors .= "Message is required ";
} else {
    $message = $_POST["message"];
}

// Prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

$Headers = 'Content-Type: text/plain; charset=utf-8' . "\r\n";
$Headers .= 'Content-Transfer-Encoding: base64' . "\r\n";
$Headers .= "From:".$email . "\r\n";

// Send email
$success_message = mail($EmailTo, '=?UTF-8?B?' . base64_encode($Subject) . '?=' , base64_encode($Body), $Headers);

// Redirect to success page
if ($success_message && $errors == ""){
    echo 
    '<style>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html, body {
        height: 100%;
        min-width: 300px;
        max-width: 2600px;
        overflow: auto;
        background-color: #121212;
    }
    body {
        line-height: 1.6;
        margin: 0 auto;
        padding: 0 40px;
    }
    </style>
        <div style=" text-align: center;">
            <h3 style="color: #ffffff; padding-top: 100px;">Žinutė buvo išsiųsta sėkmingai!</h3>
            <h4 style="color: #ffffff; padding-top: 30px;">Netrukus būsite grąžinti atgal į puslapį</h4>
        </div>
    ';
    header("refresh: 5; ../contacts.html");
}
else{
    echo $errors;
}
?>
