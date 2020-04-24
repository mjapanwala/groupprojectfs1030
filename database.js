const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port     : '3300',
  password : ''
});

connection.query('CREATE Database IF NOT EXISTS muhammad_group;', (err) => {
  if (err) throw err;
  console.log('Default database created.');
  connection.query("USE muhammad_group", (err) => {
    if (err) throw err;
    console.log('database in use: muhammad_group')


    // Create Patients table

    connection.query('CREATE TABLE IF NOT EXISTS Patients (_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, first_name varchar(255), last_name varchar(255), email varchar(255), gender varchar(255), dob varchar(255), phone varchar(255), mpn varchar(255), age varchar(255), address varchar(255), medical_id varchar(255));', (err) => {
      if (err) throw err;
      console.log('"Patients" TABLE created.');
    });

    connection.query("SELECT * FROM Patients", (err, result) => {
      if (err) throw err;
      //console.log(result);
      if (result.length > 0){
        console.log(`Existing patient records found in the DB: ${result.length}`)
        return;
      } else {
        connection.query("INSERT INTO Patients (first_name, last_name, email, gender, dob, phone, mpn, age, address, medical_id) VALUES ('Tarun', 'Sharma', 'osgood@whatsapp.com', 'Male', '08/14/1994', '905-443-2222', '1246864565532', '44', '95 Crayola Cres', '123456')", (err) => {
          if (err) throw err;
          console.log('initial patient record inserted for: Tarun Sharma')
        })
      }
    })


    // Create Doctor / Admin table

    connection.query('CREATE TABLE IF NOT EXISTS Admins (_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, first_name varchar(255), last_name varchar(255), email varchar(255), username varchar(255), password varchar(255));', (err) => {
      if (err) throw err;
      console.log('"Admins" TABLE created.');
    });

    connection.query("SELECT * FROM Admins", (err, result) => {
      if (err) throw err;
      //console.log(result);
      if (result.length > 0){
        console.log(`Existing admin records found in the DB: ${result.length}`)
        return;
      } else {
        connection.query("INSERT INTO Admins (first_name, last_name, email, username, password) VALUES ('Muhammad', 'Japanwala', 'muhammad.japanwala@hotmail.com', 'muhammad', 'muhammad123$')", (err) => {
          if (err) throw err;
          console.log('initial admin record inserted for: Muhammad Japanwala')
        })
      }
    })

    // Create Allergies table

    connection.query('CREATE TABLE IF NOT EXISTS Allergies (_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, dietary_restrictions varchar(255), allergies varchar(255), food_substitution varchar(255), food_equipment varchar(255), patient_medical_id varchar(255));', (err) => {
      if (err) throw err;
      console.log('"Allergies" TABLE created.');
    });

    connection.query("SELECT * FROM Allergies WHERE patient_medical_id=123456", (err, result) => {
      if (err) throw err;
      //console.log(result);
      if (result.length > 0){
        console.log(`Existing allergy records found in the DB for Tarun Sharma: ${result.length}`)
        return;
      } else {
        connection.query("INSERT INTO Allergies (dietary_restrictions, allergies, food_substitution, food_equipment, patient_medical_id) VALUES ('None', 'Honey, tomato seeds', 'None', 'None', '123456')", (err) => {
          if (err) throw err;
          console.log('initial allergy record inserted for: Tarum Sharma')
        })
      }
    })

    // Create Billing table

    connection.query('CREATE TABLE IF NOT EXISTS Billing (_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, full_name varchar(255), email varchar(255), address varchar(255), city varchar(255), province varchar(255), postal_code varchar(255), card_name varchar(255), card_number bigint, exp_month varchar(255), exp_year int, cvv int, patient_medical_id varchar(255));', (err) => {
      if (err) throw err;
      console.log('"Billing" TABLE created.');
    });

    connection.query("SELECT * FROM Billing WHERE patient_medical_id=123456", (err, result) => {
      if (err) throw err;
      //console.log(result);
      if (result.length > 0){
        console.log(`Existing billing records found in the DB for Tarun Sharma: ${result.length}`)
        return;
      } else {
        connection.query("INSERT INTO Billing (full_name, email, address, city, province, postal_code, card_name, card_number, exp_month, exp_year, cvv, patient_medical_id) VALUES ('Tarum Sharma', 'osgood@whatsapp.com', '95 Crayola Cres', 'Toronto', 'Ontario', 'M2X 9JF', 'Tarun Sharma', 1111222233334444, 'September', 2025, 456, '123456')", (err) => {
          if (err) throw err;
          console.log('initial billing record inserted for: Tarum Sharma')
        })
      }
    })


  })

});

// Setup connection



module.exports = connection;
