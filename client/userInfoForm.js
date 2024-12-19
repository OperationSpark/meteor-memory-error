import { Template } from 'meteor/templating';
import { userInfoSchema } from './schema.js';
import './userInfoForm.html';

Template.userInfoForm.helpers({
  userInfoSchema() {
    return userInfoSchema;
  }
});

Meteor.methods({
  submitForm(doc) {
    // Handle form submission
    console.log("Form submitted with data:", doc);
  }
});