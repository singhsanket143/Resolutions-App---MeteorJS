import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

import "./main.html";

Template.body.helpers({
  resolutions: [
    { title: "My #1 resoultion" },
    { title: "My #2 resoultion" },
    { title: "My #3 resoultion" },
    { title: "My #4 resoultion" }
  ]
});
