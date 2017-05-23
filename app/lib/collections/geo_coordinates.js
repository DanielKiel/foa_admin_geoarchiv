GeoCoordinates = new Mongo.Collection('geo_coordinates');

if (Meteor.isServer) {
    // Meteor.publish('geo_ccordinates', function () {
    //     return GeoCoordinates.find();
    // });
}

if (Meteor.isClient) {
    Meteor.subscribe('fetchObjects', 'GeoCoordinates', 'geo_coordinates', localStorage.getItem('token'));
    //Meteor.subscribe('geo_coordinates');
}

// if (Meteor.isServer) {
//   GeoCoordinates.allow({
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
//   GeoCoordinates.deny({
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
