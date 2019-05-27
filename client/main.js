import { Template } from "meteor/templating";
import { Resolutions } from "../imports/api/resolution";
import { ReactiveDict } from "meteor/reactive-dict";
import { ReactiveVar } from "meteor/reactive-var";

import "./main.html";
Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});

Template.body.helpers({
  resolutions: function() {
    const instance = Template.instance();
    console.log(Resolutions.find({}).fetch());
    if (instance.state.get("hideFinished")) {
      return Resolutions.find({ checked: { $ne: true } });
    } else {
      return Resolutions.find({});
    }
  },
  hideFinished: function() {
    const instance = Template.instance();
    return instance.state.get("hideFinished");
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
  },
  "change .hide-finished input": function(event, instance) {
    console.log(event.target.checked);
    instance.state.set("hideFinished", event.target.checked);
  }
});

Template.resolution.events({
  "change .toggle-checked": function() {
    Resolutions.update(this._id, { $set: { checked: !this.checked } });
  },
  "click .delete": function() {
    Resolutions.remove(this._id);
  }
});
