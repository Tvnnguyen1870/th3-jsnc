// xay dung class user

class User {
    constructor(name , username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }

    login(username, password){
        if(username !== this.username || password !== this.password)
            return console.log('login failed');

        console.log('login successful');
    }

    setPassword(oldPassword, newPassword){
        if(oldPassword !== this.password) {
            return  console.log('change password failed');
        }

        const isValidPassword = this.verifyPassword(newPassword);

        if(!isValidPassword) {
            return console.log('password must be at least 6 characters');
        }

        this.password = newPassword;
        console.log('change password is successful');
    }

    verifyPassword(newPassword) {
        if(newPassword.length >= 6)
        return true;
        return false;
    }
}

const myAcount = new User('Nguyen', 'tonguyen', '123456');

// test phone, email
// let tphone = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
//  let temail = /^\w+@[a-zA-Z]{3,}\.com$/i;

class Author extends User {
    constructor(name, email, phone, username, password){
        super(name, email, phone, username, password)
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.username = username; 
        this.password = password;
    }

    setEmail(email) {
        if(this.email !== email || email !== temail){
           return console.log('Please re-enter your email');
        }
        console.log('email successful');
    }

    setPhone(phone) {
        if(this.phone !== phone){
           return console.log('Please re-enter your phone');
        }

        this.phone = phone;
        console.log('phone successful');
    }
    
}

const myAcount1 = new Author('Nguyen','tvn@gmail.com', '0971432940','ToNuyen','12345')

// myAcount1.setEmail('tvn@gmail.com');
// myAcount1.setPhone('0971432940');

console.log(myAcount);
console.log( myAcount1)

// console.log(myAcount1.email)
// console.log(myAcount1.phone)
