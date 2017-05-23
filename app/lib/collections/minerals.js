Minerals = new Mongo.Collection('minerals');


if (Meteor.isClient) {
    Meteor.subscribe('fetchObjects', 'Minerals', 'minerals', localStorage.getItem('token'));
    //Meteor.subscribe('minerals');
}

if (Meteor.isServer) {
    // Meteor.publish('minerals', function() {
    //     return Minerals.find();
    // });
}

// if (Meteor.isServer) {
//   Minerals.allow({
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
//   Minerals.deny({
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
