Galleries = new Mongo.Collection('galleries');

if (Meteor.isServer) {
    // Meteor.publish('galleries', function() {
    //     return Galleries.find();
    // });
}

if (Meteor.isClient) {
    Meteor.subscribe('fetchObjects', 'Galleries', 'galleries', localStorage.getItem('token'));
    //Meteor.subscribe('galleries');
}

// if (Meteor.isServer) {
//   Galleries.allow({
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
//   Galleries.deny({
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
