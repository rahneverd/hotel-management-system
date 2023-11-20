let User = function(data) {
  this.data = data;
  this.errors = []
  // data = {
    // user_id = '',
    //  document_number = '',
    //  first_name = '',
    //   last_name = '',
    //   name = '',
    //   email = '',
    //   phone_number = ''
    //   user_name = ''
    //   password = ''
  // }
  
}

User.prototype.checkSchema = function() {
  
}

User.prototype.cleanUp = function() {
  for (let key of Object.keys(this.data)) {
    if (typeof(this.data[key]) != "string") {this.data[key] = ""}
    this.data[key] = key === 'password' ? this.data[key] : this.data[key].trim()
  }
}

User.prototype.validate = function() {
  return new Promise(async(resolve, reject) => {
    for (let key of Object.keys(this.data)) {
      if (this.data[key] == "") {this.errors.push(`You must provide a ${key}`)}
      if (this.errors.length) {reject()}
    }
    resolve()
    // if (this.data.username == "") {this.errors.push("You must provide a username.")}
    // if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("Username can only contain letters and numbers.")}
    // if (!validator.isEmail(this.data.email)) {this.errors.push("You must provide a valid email address.")}
    // if (this.data.password == "") {this.errors.push("You must provide a password.")}
    // if (this.data.password.length > 0 && this.data.password.length < 12) {this.errors.push("Password must be at least 12 characters.")}
    // if (this.data.password.length > 50) {this.errors.push("Password cannot exceed 50 characters.")}
    // if (this.data.username.length > 0 && this.data.username.length < 3) {this.errors.push("Username must be at least 3 characters.")}
    // if (this.data.username.length > 30) {this.errors.push("Username cannot exceed 30 characters.")}
  })
}

User.prototype.register = function() {
  return new Promise(async (resolve, reject) => {
    try {
    this.checkSchema()
    this.cleanUp()
    await this.validate()
    resolve()
    } catch (error) {
      reject()
    }
  })
  // console.log('register function called - model')
  // Clean the data
  // Validate the data
  // Check data uniqueness from db

}


module.exports = User