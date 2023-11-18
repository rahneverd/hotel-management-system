let User = function(data) {
  this.data = data;
  this.errors = []
  // user_id = '',
  //   document_number = '',
  //   first_name = '',
  //   last_name = '',
  //   name = '',
  //   email = '',
  //   phone_number = ''
}

User.prototype.cleanData = function() {
  

}

User.prototype.register = function() {
  console.log('register function called - model')
  // Clean the data
  // Validate the data
  // Check data uniqueness from db

}


module.exports = User