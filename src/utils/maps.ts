export const get_elevation = async (lat: number, lng: number) => {
    try {
        const location = new google.maps.LatLng(lat, lng);
        const elevator = new google.maps.ElevationService();
        const res = await elevator.getElevationForLocations({ locations: [location] })
        if (res.results && res.results.length > 0) {
            return res.results[0].elevation;
        } else {
            throw new Error('No results found')
        }
    } catch (error) {
        throw new Error('Error in getting elevation =>' + error)
    }
}

  // let locFromLatLngUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}`
        // let locInfo = await fetch(locFromLatLngUrl, { method: "GET" })
        // let parsedLocInfo = await locInfo.json()
        // if(parsedLocInfo.status==='OK' && parsedLocInfo.results)
        // {
        //   let resLength = parsedLocInfo.results.length()
        //   let country = parsedLocInfo.results[resLength].address_components[0].long_name
        //   let state = parsedLocInfo.results[resLength-1].address_components[0].long_name
        // }