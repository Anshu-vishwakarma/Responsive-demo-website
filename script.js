function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var mailtoLink = 'mailto:sonusahu3715@gmail.com?subject=' + encodeURIComponent('New contact request from ' + name) +
                     '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
    window.location.href = mailtoLink;
  }
  
//   $(document).ready(function() {
//     $("form").submit(function(e) {
//       e.preventDefault();
//       var name = $("#name").val();
//       var email = $("#email").val();
//       var subject = $("#subject").val();
//       var message = $("#message").val();

//       // Send form data to the server using an AJAX request
//       $.ajax({
//         type: "POST",
//         url: "/send_email",
//         data: {
//           name: name,
//           email: email,
//           subject: subject,
//           message: message
//         },
//         success: function(data) {
//           // Handle success response from server
//           alert("Your message has been sent!");
//         },
//         error: function(xhr, status, error) {
//           // Handle error response from server
//           alert("An error occurred while sending your message.");
//         }
//       });
//     });
//   });


// // const form = document.getElementById('contact-form');
// // const nameInput = document.getElementById('name');
// // const emailInput = document.getElementById('email');
// // const messageInput = document.getElementById('message');

// // form.addEventListener('submit', function(event) {
// //   event.preventDefault();
// //   sendEmail();
// // });

// // function sendEmail() {
// //   const name = nameInput.value;
// //   const email = emailInput.value;
// //   const message = messageInput.value;

// //   Email.send({
// //     SecureToken : "your_secure_token_here",
// //     To : "sonusahu3715@gmail.com",
// //     From : email,
// //     Subject : "New Contact Form Submission",
// //     Body : `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
// //   }).then(
// //     message => alert("Message sent successfully")
// //   );
// // }
