function validation()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error-message");
    var text;

    error_message.style.padding = "10px";

    if(name.length < 3)
    {
        text = "Please enter more than 3 characters";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 12)
    {
        text = "Please enter valid email";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.length < 3)
    {
        text = "Please enter more than 3 characters in subject";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length<=20)
    {
        text = "Enter more than 20 characters in message";
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}