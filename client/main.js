import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import 'meteor/aldeed:autoform/static'
import './main.html';
import './userInfoForm.js';


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
