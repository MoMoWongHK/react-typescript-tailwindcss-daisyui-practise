import React, { useEffect, useState } from "react"
import "leaflet/dist/leaflet.css"
import "leaflet/dist/images/marker-shadow.png"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import { withRouter } from "react-router-dom"
import marker from "../../../../Asset/InteractiveMap/location-dot.png"
import { Icon, LatLng } from "leaflet"
import { useSelector } from "react-redux"
import { ApplicationState } from "../../../../Redux/reducers/rootReducer"
import Shop, { Position } from "../../../../Model/Shop"

const InteractiveMap: React.FC = (props) => {
  const recommendedShops = useSelector((state: ApplicationState) => {
    return state.recommendationReducer.shops
  })

  const selectedShop = useSelector((state: ApplicationState) => {
    return state.recommendationReducer.selectedShop
  })

  const [map, setMap] = useState(null)

  const [currentPos, setCurrentPos] = useState<Position>({
    lat: 22.3371775,
    lng: 114.1760107,
  })

  useEffect(() => {
    console.log(selectedShop)
    if (selectedShop && map) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      map.flyTo(
        new LatLng(selectedShop.position.lat, selectedShop.position.lng),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        18
      )
    }
  }, [selectedShop])

  return (
    <div className="rounded-lg overflow-hidden">
      <MapContainer
        center={[currentPos.lat, currentPos.lng]}
        zoom={20}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        whenCreated={(map) => setMap(map)}>
        <TileLayer
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          attribution="&copy; PixieAI"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {recommendedShops.map((sc: Shop) => {
          return (
            <Marker
              key={sc.shopId}
              position={[sc.position.lat, sc.position.lng]}
              icon={new Icon({ iconUrl: marker })}>
              <Popup>{sc.shopDescription}</Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default withRouter(InteractiveMap)
