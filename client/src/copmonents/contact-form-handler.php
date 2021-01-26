<?php
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// if (isset($_FILES) && (bool) $_FILES) {

//     $allowedExtensions = array("pdf", "doc", "docx", "gif", "jpeg", "jpg", "png", "txt");

//     $files = array();
//     foreach ($_FILES as $name => $file) {
//         $file_name = $file['name'];
//         $temp_name = $file['tmp_name'];
//         $file_type = $file['type'];
//         $path_parts = pathinfo($file_name);
//         $ext = $path_parts['extension'];
//         if (!in_array($ext, $allowedExtensions)) {
//             die("File $file_name has the extensions $ext which is not allowed");
//         }
//         array_push($files, $file);
//     }


//     $to = $_POST['email'];
//     $from = "editorbot341@gmail.com";  //your website email type here
//     $subject = "Projects";
//     $message = $_POST['msg'];
//     $headers = "From: $from";


//     $semi_rand = md5(time());
//     $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";


//     $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";
//     $message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n";
//     $message .= "--{$mime_boundary}\n";

//     // preparing attachments
//     for ($x = 0; $x < count($files); $x++) {
//         $file = fopen($files[$x]['tmp_name'], "rb");
//         $data = fread($file, filesize($files[$x]['tmp_name']));
//         fclose($file);
//         $data = chunk_split(base64_encode($data));
//         $name = $files[$x]['name'];
//         $message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$name\"\n" .
//                 "Content-Disposition: attachment;\n" . " filename=\"$name\"\n" .
//                 "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
//         $message .= "--{$mime_boundary}\n";
//     }
//     // send

//     $ok = mail($to, $subject, $message, $headers);
//     if ($ok) {
//         echo "<p style='tex-align:center'>mail sent to $to!</p>";
//     } else {
//         echo "<p>mail could not be sent!</p>";
//     }
// }








if (isset($_POST['submit'])) {
    //The form has been submitted, prep a nice thank you message
    $output = '<h1>Thank you for your request</h1>';
    //Set the form flag to no display (cheap way!)
    $flags = 'style="display:none;"';

    //Deal with the email
    $to = 'eugene.ishimov@gmail.com';
    $subject = 'Projects';

    $message = strip_tags($_POST['message']);
    $email = strip_tags($_POST['email']);
    $name = strip_tags($_POST['name']);
    $content_email = "Email: ";
    $content_name = "Name: ";
    $content_message = "Message: ";
    $attachment = chunk_split(base64_encode(file_get_contents($_FILES['file']['tmp_name'])));
    $filename = $_FILES['file']['name'];

    $boundary = md5(date('r', time()));

    $headers = "From: editorbot341@gmail.com\r\nReply-To: editorbot341@gmail.com";
    $headers .= "\r\nMIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"_1_$boundary\"";

    $message = "This is a multi-part message in MIME format.

--_1_$boundary
Content-Type: multipart/alternative; boundary=\"_2_$boundary\"

--_2_$boundary
Content-Type: text/plain; charset=\"iso-8859-1\"
Content-Transfer-Encoding: 7bit

$content_email $email
$content_name $name
$content_message $message

--_2_$boundary--
--_1_$boundary
Content-Type: application/octet-stream; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment

$attachment
--_1_$boundary--";

    mail($to, $subject, $message, $headers);
}
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>MailFile</title>
</head>

<body>

    <?php echo $output; ?>

    <form enctype="multipart/form-data" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" <?php echo $flags; ?>>
        <p><label for="message">Message</label> <textarea name="message" id="message" cols="20" rows="8"></textarea></p>
        <p><label for="email">email</label> <textarea name="email" id="email" cols="20" rows="8"></textarea></p>
        <p><label for="file">File</label> <input type="file" name="file" id="file"></p>
        <p><input type="submit" name="submit" id="submit" value="send"></p>
    </form>
</body>

</html>