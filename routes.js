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

// Post new app.post('/')
// Edit existing app.put('/:id')
// Delete existing app.delete('/:id')

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

// app.post('/inquiries', (req, res) => {
//
//     if (req.body){
//         connection.query(`INSERT INTO Inquiries (First_Name, Last_Name, Email, Message) VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', "${req.body.message}")`, function (error, results, fields) {
//           if (error){
//             console.log(error);
//             return res.status(400).send('Bad Request')
//           }
//           console.log('Successfully inserted new record into Inquiry table');
//           return res.status(200).send('success')
//         });
//     } else {
//         res.status(400).send('Bad Request')
//     }
// })
//
// app.put('/inquiries', (req, res) => {
//
//     if (req.body){
//         connection.query(`UPDATE Inquiries SET Status='Read' Where id=${req.body.message_id}`, (err) => {
//           if (err){
//             console.log(err);
//             return res.status(400).send('Bad Request')
//           }
//           console.log(`Successfully updated a record with an ID ${req.body.message_id}`);
//           return res.status(200).send('success')
//         });
//     } else {
//         res.status(400).send('Bad Request')
//     }
// })
//
// app.delete('/inquiries', (req, res) => {
//
//     if (req.body){
//         connection.query(`DELETE FROM Inquiries Where id=${req.body.message_id}`, (err) => {
//           if (err){
//             console.log(err);
//             return res.status(400).send('Bad Request')
//           }
//           console.log(`Successfully deleted a record with an ID ${req.body.message_id}`);
//           return res.status(200).send('success')
//         });
//     } else {
//         res.status(400).send('Bad Request')
//     }
// })
//
// app.get('/skills', (req, res) => {
//   connection.query('Select * from Skills Where id=1', (err, result) => {
//     if (err){
//       console.log(err);
//       return res.status(400).send('Bad Request')
//     }
//     console.log(`Returned ${result.length} entries from the DB`);
//     return res.status(200).send(result[0])
//   })
// })
//
// app.put('/skills', (req, res) => {
//
//     if (req.body){
//         connection.query(`UPDATE Skills SET html=${req.body.html}, css=${req.body.css}, js=${req.body.js} Where id=1`, (err) => {
//           if (err){
//             console.log(err);
//             return res.status(400).send('Bad Request')
//           }
//           console.log(`Successfully updated default skills record`);
//           return res.status(200).send('success')
//         });
//     } else {
//         res.status(400).send('Bad Request')
//     }
// })

module.exports = app;
