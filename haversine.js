function deg2rad(deg) {
    return deg * (Math.PI / 180)

}
var haversine = {
    getDistance: (initialPosition, finalPosition) => {
        let dLat = deg2rad(finalPosition[0] - initialPosition[0]),
            dLon = deg2rad(finalPosition[1] - initialPosition[1]),
            a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(initialPosition[0])) * Math.cos(deg2rad(initialPosition[1])) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2),
            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return 6371 * c; // Earth Radius * Result
    }
};

export default haversine;
