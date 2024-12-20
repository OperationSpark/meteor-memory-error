import { Meteor } from "meteor/meteor";

Meteor.startup(async () => {
  Meteor.methods({
    submitForm(form) {
      console.log("Form submitted with data:", form);
    },
  });
});
