Articles = new Mongo.Collection('articles');

if (Meteor.isClient) {
    //Meteor.subscribe('articles');
    Meteor.subscribe('fetchObjects', 'Articles', 'articles', localStorage.getItem('token'));
}

if (Meteor.isServer) {

    //Meteor.publish('articles', Articles);
}

//   // Articles.allow({
//   //   insert: function (userId, doc) {
//   //     return true;
//   //   },
//   //
//   //   update: function (userId, doc, fieldNames, modifier) {
//   //     return true;
//   //   },
//   //
//   //   remove: function (userId, doc) {
//   //     return true;
//   //   }
//   // });
//   //
//   // Articles.deny({
//   //   insert: function (userId, doc) {
//   //     return false;
//   //   },
//   //
//   //   update: function (userId, doc, fieldNames, modifier) {
//   //     return false;
//   //   },
//   //
//   //   remove: function (userId, doc) {
//   //     return false;
//   //   }
//   // });
// }
