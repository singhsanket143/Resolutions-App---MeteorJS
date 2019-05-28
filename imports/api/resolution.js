import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

export const Resolutions = new Mongo.Collection("resolutions");

Meteor.methods({
  "resolution.insert"(text) {
    check(text, String);
    if (!Meteor.userId()) {
      throw new Meteor.Error("Not-Authorized");
    }
    Resolutions.insert({
      title: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  "resolution.remove"(id) {
    check(id, String);
    Resolutions.remove(id);
  },
  "resolution.setChecked"(id, setChecked) {
    check(id, String);
    check(setChecked, Boolean);
    Resolutions.update(id, { $set: { checked: setChecked } });
  }
});
