import { useMemo } from "react"
import {GoogleMap,Marker} from "@react-google-maps/api"

function Map(){
    const center=useMemo(()=>({lat:44.535496,lng:19.223631}),[]);
    return <GoogleMap zoom={10} center={center} mapContainerClassName="map">
        <Marker position={center}></Marker>
    </GoogleMap>
}

export default Map