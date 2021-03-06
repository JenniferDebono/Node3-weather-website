const request = require('request')


const geocode = (address, callback) => {
    // make URL the request
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiamRlYm9ubzIwMjEiLCJhIjoiY2t1OG5xeGRvMnI5dTJvcWd4ZTI4MGtmeiJ9.jepGknle_HLkPxUHzNFOQw&limit=1'

    //     request({ url: geoUrl, json: true }, (error, response) => {
    //         if (error) {
    //             callback(`Unable to connect to location services`, undefined)
    //         } else if (response.body.features.length === 0) {
    //             callback(`Unable to find location. Search again`, undefined)
    //         } else {
    //             callback(undefined, {
    //                 lat: response.body.features[0].center[1],
    //                 long: response.body.features[0].center[0],
    //                 location: response.body.features[0].place_name
    //             })
    //         }
    //     })
    // }

    request({ url: geoUrl, json: true }, (error, { body }) => {
        if (error) {
            callback(`Unable to connect to location services`, undefined)
        } else if (body.features.length === 0) {
            callback(`Unable to find location. Search again`, undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode