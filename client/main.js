import { Template } from "meteor/templating";
import { Resolutions } from "../imports/api/resolution";
import { ReactiveVar } from "meteor/reactive-var";

import "./main.html";

Template.body.helpers({
  resolutions: function() {
    console.log(Resolutions.find({}).fetch());
    return Resolutions.find({});
  }
});

Template.body.events({
  "submit .new-resolution": function(event) {
    var title = event.target.title.value;
    Resolutions.insert({
      title: title,
      createdAt: new Date()
    });
    event.target.title.value = "";
    return false;
  }
});
