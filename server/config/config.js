require("dotenv").config();

module.exports = {
  "development": {
    "username": "root",
    "password": "Madeline55!",
    "database": "tutorbuzz",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "tutorbuzz",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
