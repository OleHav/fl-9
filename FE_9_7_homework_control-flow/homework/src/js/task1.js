let login = prompt(`Enter your login, please`);
if (login === `User`) {
    let password = prompt(`Enter your password, please`);
        if (password === `SuperUser`) {
            alert(new Date().getHours() < 20 ? `Good day!` : `Good evening!`);
        } else if (password === `` || password === null) {
            alert(`Canceled`);
        } else {
            alert(`Wrong password`);
        }
} else if(login === `` || login === null) {
    alert(`Canceled`);
} else if (login.length < 4) {
    alert(`I don't know any users having name length less than 4 symbols`);
} else {
    alert(`I don't know you`);
}