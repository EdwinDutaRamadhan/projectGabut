var adminUsername, adminPassword, opportunity = 3;
var usernameEdwin = "edwin", passwordEdwin = "edwin123";
let confirmation;

function loginPass(){
    adminUsername = document.getElementById("usernameTextBox").value;
    adminPassword = document.getElementById("passwordTextBox").value;
    console.log("Username = " + adminUsername);
    console.log("Password = " + adminPassword);
    if(adminUsername == usernameEdwin && adminPassword == passwordEdwin){
        alert("Login Berhasil!")
        window.open("https://www.facebook.com/"); 
    }else{
        opportunity--;
        if(opportunity < 1){
            confirmation = confirm("Kesempatan anda habis!\n\nIngin coba lagi?");
            if (confirmation == true) {
                location.reload();
                console.log("konfirmasi " + confirmation);
              } else {
                window.open("https://www.ruangguru.com/hs-fs/hubfs/thank%20you.jpg?width=600&name=thank%20you.jpg");
              }
        }else{
        alert("Username atau password anda salah\n\nAnda memiliki " + opportunity + " kesempatan lagi");
        console.log("Kesempatan = " + opportunity);
        }
    }
}