function sendEmail(){
  Email.send({
      Host : "smtp.gmail.com",
      Username : "alyssadlee@gmail.com",
      Password : "lcjrfruaqmkdfvhr",
      To : 'alyssadlee@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New Contact Form Enquiry",
      Body : "Name: " + document.getElementById("name").value
          + "<br> Email: " + document.getElementById("email").value 
          + "<br> Message: " + document.getElementById("message").value
  }).then((res) => console.log(res));
}