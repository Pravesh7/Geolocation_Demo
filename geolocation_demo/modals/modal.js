const mongoose= require('mongoose');

// Creating a Schema(This is a schema and not a model)

var location_model=mongoose.Schema({

    location: {
        type: {type: String, default: 'Point'},
        coordinates: [Number]    // we will sending the co-ordinates from postman, but they can be passed here as static values
    },
});
location_model.index({location:'2dsphere'})

// Creating a Model, Schema is passed inside a model as a parameter

exports.location_Model = mongoose.model('locations', location_model);

//locations is the name of the collection that will be created in the database...........mongoose.model('collection',schema);