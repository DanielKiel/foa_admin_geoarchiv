/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
    'writeObject': function(doc, collection) {
        col = Mongo.Collection.get(collection);
        col.upsert({_id: doc['_id']}, doc);
    },

    'fetchObjectsAndSave': function(objectType, collection, token) {
        let baseUrl = Meteor.settings.public.serviceUrl;

        let next_page_url = baseUrl + '/services/admin/v1/' + objectType;

        while (next_page_url !== null) {
            try {
                let response = HTTP.get(next_page_url, {
                    headers: {
                        "Authorization": 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    }
                });

                _.each(response.data.data, function(item) {
                    let insert = {};
                    for (let attribute in item) {
                        if (attribute == 'id') {
                            insert['_id'] = String(item[attribute]);
                        }

                        insert[attribute] = item[attribute];
                    }

                    col = Mongo.Collection.get(collection);
                    col.upsert({_id: insert['_id']}, insert);
                });

                next_page_url = response.data.next_page_url;


            }
            catch (e) {
                console.log(e);
                next_page_url = null;
            }
        }
    }
});

Meteor.publish('fetchObjects', function (objectType, collectionName, token) {
    let me = this;

    let baseUrl = Meteor.settings.public.serviceUrl;

    let next_page_url = baseUrl + '/services/admin/v1/' + objectType;

    while (next_page_url !== null) {
        try {
            let response = HTTP.get(next_page_url, {
                headers: {
                    "Authorization": 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            });

            _.each(response.data.data, function (item) {
                let doc = {};
                for (let attribute in item) { //console.log(attribute);
                    if (attribute == 'id') {
                        doc['_id'] = String(item[attribute]);
                    }

                    doc[attribute] = item[attribute];
                }


                me.added(collectionName, item.id, doc);

                //Meteor.call('writeObject', doc, collectionName);

            });

            next_page_url = response.data.next_page_url;


        }
        catch (e) {
            console.log(e);
            next_page_url = null;
        }
    }

    me.ready();
});