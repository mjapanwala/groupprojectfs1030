const app = require('express')();
const fs = require('fs')
const connection = require('./database')

app.get('/patients', (req, res) => {
  connection.query('Select * from Patients', (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Returned ${result.length} entries from the DB`);
    return res.status(200).send(result)
  })
})

app.post('/patients', (req, res) => {
  connection.query(`INSERT INTO Patients (first_name, last_name, email, gender, dob, phone, mpn, age, address, medical_id) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.gender}', '${req.body.dob}', '${req.body.phone}', '${req.body.mpn}', '${req.body.age}', '${req.body.address}', '${req.body.medical_id}')`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Successfully created a patient record for ${req.body.first_name} ${req.body.last_name} with Patient ID: ${req.body.medical_id}`);
    return res.status(200).send('success')
  })
})


app.put('/patients/:medical_id', (req, res) => {
  connection.query(`Update Patients SET first_name='${req.body.first_name}', last_name='${req.body.last_name}', email="${req.body.email}", gender="${req.body.gender}", dob="${req.body.dob}", phone="${req.body.phone}", mpn="${req.body.mpn}", age="${req.body.age}", address="${req.body.address}" WHERE medical_id="${req.params.medical_id}"`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Successfully updated a patient record for ${req.body.first_name} ${req.body.last_name} with Patient ID: ${req.params.medical_id}`);
    return res.status(200).send('success')
  })
})

app.delete('/patients/:medical_id', (req, res) => {
  connection.query(`DELETE FROM Patients WHERE medical_id="${req.params.medical_id}"`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Successfully deleted a patient record with Patient ID: ${req.params.medical_id}`);
    return res.status(200).send('success')
  })
})

app.get('/patients/:medical_id', (req, res) => {
  connection.query(`Select * from Patients WHERE medical_id="${req.params.medical_id}"`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    if (result.length > 0){
      console.log(`Returned ${result.length} entries from the DB`);
      return res.status(200).send(result[0])
    }
    console.log('No records found')
    return res.status(404).send('not found')
  })
})

app.post('/auth/login', (req, res) => {
  console.log(req.body)
  connection.query(`Select * from Admins WHERE username="${req.body.username}" AND password="${req.body.password}"`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    if (result.length > 0){
      console.log(`Returned ${result.length} entries from the DB`);
      //req.session.user = result[0];
      return res.status(200).send(result[0])
    }
    console.log('No records found')
    return res.status(401).send('unauthorized')
  })
})

app.get('/allergies', (req, res) => {
  connection.query('Select * from Allergies', (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Returned ${result.length} entries from the DB`);
    return res.status(200).send(result)
  })
})

app.get('/allergies/:medical_id', (req, res) => {
  connection.query(`Select * from Allergies WHERE patient_medical_id="${req.params.medical_id}"`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    if (result.length > 0){
      console.log(`Returned ${result.length} entries from the DB`);
      return res.status(200).send(result[0])
    }
    console.log('No records found')
    return res.status(404).send('not found')
  })
})

app.post('/allergies', (req, res) => {
  connection.query(`INSERT INTO Allergies (dietary_restrictions, allergies, food_substitution, food_equipment, patient_medical_id) VALUES ('${req.body.dietary_restrictions}', '${req.body.allergies}', '${req.body.food_substitution}', '${req.body.food_equipment}', '${req.body.patient_medical_id}')`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Successfully created an Allergy record for patient with Patient ID: ${req.body.patient_medical_id}`);
    return res.status(200).send('success')
  })
})


app.put('/allergies/:medical_id', (req, res) => {
  connection.query(`Update Allergies SET dietary_restrictions='${req.body.dietary_restrictions}', allergies='${req.body.allergies}', food_substitution="${req.body.food_substitution}", food_equipment="${req.body.food_equipment}" WHERE patient_medical_id="${req.params.medical_id}"`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Successfully updated an Allergy record for patient with Patient ID: ${req.params.medical_id}`);
    return res.status(200).send('success')
  })
})

app.delete('/allergies/:medical_id', (req, res) => {
  connection.query(`DELETE FROM Allergies WHERE patient_medical_id="${req.params.medical_id}"`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Successfully deleted an Allergy record with Patient ID: ${req.params.medical_id}`);
    return res.status(200).send('success')
  })
})

app.get('/billing', (req, res) => {
  connection.query('Select * from Billing', (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Returned ${result.length} entries from the DB`);
    return res.status(200).send(result)
  })
})

app.get('/billing/:medical_id', (req, res) => {
  connection.query(`Select * from Billing WHERE patient_medical_id="${req.params.medical_id}"`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    if (result.length > 0){
      console.log(`Returned ${result.length} entries from the DB`);
      return res.status(200).send(result[0])
    }
    console.log('No records found')
    return res.status(404).send('not found')
  })
})

app.post('/billing', (req, res) => {
  connection.query(`INSERT INTO Billing (full_name, email, address, city, province, postal_code, card_name, card_number, exp_month, exp_year, cvv, patient_medical_id) VALUES ('${req.body.full_name}', '${req.body.email}', '${req.body.address}', '${req.body.city}', '${req.body.province}', '${req.body.postal_code}', '${req.body.card_name}', ${req.body.card_number}, '${req.body.exp_month}', ${req.body.exp_year}, ${req.body.cvv}, '${req.body.patient_medical_id}')`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Successfully created a Billing record for patient with Patient ID: ${req.body.patient_medical_id}`);
    return res.status(200).send('success')
  })
})


app.put('/billing/:medical_id', (req, res) => {
  connection.query(`Update Billing SET full_name='${req.body.full_name}', email='${req.body.email}', address="${req.body.address}", city="${req.body.city}", province="${req.body.province}", postal_code="${req.body.postal_code}", card_name="${req.body.card_name}", card_number=${req.body.card_number}, exp_month="${req.body.exp_month}", exp_year=${req.body.exp_year}, cvv=${req.body.cvv} WHERE patient_medical_id="${req.params.medical_id}"`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Successfully updated a Billing record for patient with Patient ID: ${req.params.medical_id}`);
    return res.status(200).send('success')
  })
})

app.delete('/billing/:medical_id', (req, res) => {
  connection.query(`DELETE FROM Billing WHERE patient_medical_id="${req.params.medical_id}"`, (err, result) => {
    if (err){
      console.log(err);
      return res.status(400).send('Bad Request')
    }
    console.log(`Successfully deleted a Billing record with Patient ID: ${req.params.medical_id}`);
    return res.status(200).send('success')
  })
})

module.exports = app;
