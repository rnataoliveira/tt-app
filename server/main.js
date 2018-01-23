import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/check'

import Messages from '../imports/api/messages'

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods ({
  'messages.insert': function (text) {
    check(text, String);
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Messages.insert({
      text,
      owner: this.userId,
      createdAt: new Date(),
      author: this.user().findOne(this.userId).username,
    });
  }
})
