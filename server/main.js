import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'

import { Messages } from '../imports/api/messages'

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods ({
  'messages.insert'(text) {
    check(text, String);
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Messages.insert({
      text,
      owner: Meteor.userId(),
      createdAt: new Date(),
      author: Meteor.user().username,
    });
  }
})
