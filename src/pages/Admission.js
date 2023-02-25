import React from 'react';
import admissionForm from '../template/AdmissionForm.pdf';

/**
* @author
* @function 
**/

export const Admission = () => {
  return(
    <div>
      {/* This is Admission Page
      <a href={admissionForm} download="woods_admission_form_2023" target='_blank'>
        <button className="btn btn-danger">Download Admission Form</button>
      </a> */}
      <h2>Admission for Nursery to Class 6</h2>
      <h2>Woods Academy, School, Rourkela</h2>
      <p>All Applications for admission are to be applied offline only</p>
      <p>Forms will be available at school counter / <a href={admissionForm} download="woods_admission_form_2023" target='_blank'>
        download from here
      </a> </p>
      <div>
        <h4>Procedure for registration:</h4>
        <ul>
          <li>1.Read the instructions carefully.</li>
          <li>2.Enter your Child’s Name, Date of Birth & Place (Exactly as it is in Birth Certificate) and all other fields including the Aadhaar Number (ALL IN CAPITAL LETTERS).</li>
          <li>3.Register all the details because these entries will go into admission register/ records later.</li>
          <li>4.A printout of the admission form may be submitted at the school office on or before 4th March 2023 by paying ₹150/- by cash.</li>
        </ul>
      </div>
    </div>
   )

 }