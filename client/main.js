import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { AutoForm } from 'meteor/aldeed:autoform';
import { AutoFormThemeBootstrap5 } from 'meteor/communitypackages:autoform-bootstrap5/dynamic';

import 'meteor/aldeed:autoform/static'
import './main.html';
import './userInfoForm.js';


AutoFormThemeBootstrap5.load()
  .then(() => AutoForm.setDefaultTemplate('bootstrap5'))
  .catch((err) => console.error('Error loading form:', err));


Template.hello.onCreated(function helloOnCreated() {
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    instance.counter.set(instance.counter.get() + 1);
  },
});
