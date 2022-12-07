const options = {
    key: 'D87NOt9WLQmjHu8IwRQSmWhas7hu3Kn8', // REPLACE WITH YOUR KEY !!!
    lat: 9.000525,
    lon: 38.74,
    zoom: 7,
};

windyInit(options, windyAPI => {
    const { picker, utils, broadcast, store } = windyAPI;

    picker.on('pickerOpened', ({ lat, lon, values, overlay }) => {
        // ->  [ U,V, ], 'wind'
        console.log('opened', lat, lon, values, overlay);

        const windObject = utils.wind2obj(values);
        console.log(windObject);
    });

    picker.on('pickerMoved', ({ lat, lon, values, overlay }) => {
        // picker was dragged by user to latLon coords
        console.log('moved', lat, lon, values, overlay);
    });

    picker.on('pickerClosed', () => {
        // picker was closed
    });

    store.on('pickerLocation', ({ lat, lon }) => {
        console.log(lat, lon);

        const { values, overlay } = picker.getParams();
        console.log('location changed', lat, lon, values, overlay);
    });

    // Wait since wather is rendered
    broadcast.once('redrawFinished', () => {
        // Opening of a picker (async)
        picker.open({ lat: 9, lon: 38 });
    });
});
