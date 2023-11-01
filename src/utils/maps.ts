export const get_elevation = async (lat: number, lng: number, mapsObject: any) => {
    try {
        const location = new mapsObject.LatLng(lat, lng);
        const elevator = new mapsObject.ElevationService(lat, lng);
        const res = await elevator.getElevationForLocations({ locations: [location] })
        console.log(res);
        if (res.results && res.results.length > 0) {
            return res.results[0].elevation;
        } else {
            throw new Error('No results found')
        }
    } catch (error) {
        throw new Error('Error in getting elevation =>' + error)
        // console.log('Error in getting all Categories (service) =>', error)
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