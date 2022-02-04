const bcrypt = require("bcrypt");
const { genSalt, hash, compare } = bcrypt;

module.exports = {
  hashPassword: (plainPassword) => {
    return new Promise((resolve, reject) => {
      genSalt(12, (err, salt) => {
        if (err) {
          reject(err);
        }
        hash(plainPassword, salt, (err, hashedPassword) => {
          if (err) {
            reject(err);
          }
          resolve(hashedPassword);
        });
      });
    });
  },

  comparePassword: (plainPassword, hashedPassword) => {
    return compare(plainPassword, hashedPassword); //evalues to true if they matches else false
  },
};
