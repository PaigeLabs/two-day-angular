var User = function user(email, password){
  this.email = email;
  this.password = password;
};

user.prototype.login = function login(){
  console.log(this.email + ':' + this.password);
}

var newUser = new User('e@mail.com', 'p@ssw0rd');

newUser.login();
