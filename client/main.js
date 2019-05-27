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
