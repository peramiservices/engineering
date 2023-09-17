<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $name = $_POST["name"];
   $email = $_POST["email"];
   $contactNumber = $_POST["contact_number"];
   $message = $_POST["message"];

   $to = "peramiservices@gmail.com";
   $subject = "New Message from Website";
   $body = "Name: " . $name . "\n";
   $body .= "Email: " . $email . "\n";
   $body .= "Contact Number: " . $contactNumber . "\n";
   $body .= "Message: " . $message;

   // Set additional headers if needed
   $headers = "From: " . $email . "\r\n";

   // Send the email
   if (mail($to, $subject, $body, $headers)) {
      echo "Message sent successfully.";
   } else {
      echo "Unable to send the message. Please try again later.";
   }
}
?>
