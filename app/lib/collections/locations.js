Locations = new Mongo.Collection('locations');

if (Meteor.isServer) {
    // Meteor.publish('locations', function() {
    //     return Locations.find();
    // });
}

if (Meteor.isClient) {
    Meteor.subscribe('fetchObjects', 'Locations', 'locations', localStorage.getItem('token'));
    //Meteor.subscribe('locations');
}

// if (Meteor.isServer) {
//   Locations.allow({
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
//   Locations.deny({
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
