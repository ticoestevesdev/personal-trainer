function verify() {
    var name = document.getElementById("name").value; 
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "") {
        alert("Digite seu nome.");
    } else if(email == "") {
        alert("Digite seu e-mail.");
    } else if(message == "") {
        alert("Digite sua mensagem.");
    } 
}

function hello() {
    alert("\n\nEste é um layout de apresentação.\n\nQuer o seu?\n\nEntre em contato!");
}