Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    // Meteor.publish('links', function() {
    //     return Links.find();
    // });
}

if (Meteor.isClient) {
    Meteor.subscribe('fetchObjects', 'Links', 'links', localStorage.getItem('token'));
    //Meteor.subscribe('links');
}

// if (Meteor.isServer) {
//   Links.allow({
//     insert: function (userId, doc) {
//       return false;
//     },
//
//     update: function (userId, doc, fieldNames, modifier) {
//       return false;
//     },
//
//     remove: function (userId, doc) {
//       return false;
//     }
//   });
//
//   Links.deny({
//     insert: function (userId, doc) {
//       return true;
//     },
//
//     update: function (userId, doc, fieldNames, modifier) {
//       return true;
//     },
//
//     remove: function (userId, doc) {
//       return true;
//     }
//   });
// }
