import React from 'react';
import admissionForm from '../template/AdmissionForm.pdf';

/**
* @author
* @function 
**/

export const Admission = () => {
  return(
    <div>
      This is Admission Page
      <a href={admissionForm} download="woods_admission_form_2023" target='_blank'>
        <button className="btn btn-danger">Download Admission Form</button>
      </a>
    </div>
   )

 }