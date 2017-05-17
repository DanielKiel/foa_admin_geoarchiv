/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/


Meteor.methods({
    'getAuth': function () {

        if (this.isSimulation) {
            //   // do some client stuff while waiting for
            //   // result from server.
            //   return;
        }
        // server method logic

        return false;
    }
});
