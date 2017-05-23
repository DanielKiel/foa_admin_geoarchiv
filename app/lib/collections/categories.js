Categories = new Mongo.Collection('categories');


if (Meteor.isClient) {
    Meteor.subscribe('fetchObjects', 'Categories', 'categories', localStorage.getItem('token'));
    //Meteor.subscribe('categories');
}

if (Meteor.isServer) {
    // Meteor.publish('categories', function() {
    //     return Categories.find();
    // });
}

// if (Meteor.isServer) {
//   Categories.allow({
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
//   Categories.deny({
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
