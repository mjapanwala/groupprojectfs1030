import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Allergy from './components/allergy';
import Billing from './components/billing';
import Login from './components/login';
import Record from './components/patient_record';
import Immunization from './components/immunization'
import Notes from './components/notes'
import Radiology from './components/radiology'
import Revisions from './components/revision'
import Search from './components/search'

const Router = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Route path="/" exact component={Login} />
        <Route path="/allergy" exact component={Allergy} />
        <Route path="/billing" exact component={Billing} />
        <Route path="/record" exact component={Record} />
        <Route path="/immunization" exact component={Immunization} />
        <Route path="/notes" exact component={Notes} />
        <Route path="/radiology" exact component={Radiology} />
        <Route path="/revisions" exact component={Revisions} />
        <Route path="/search" exact component={Search} />
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default Router;
