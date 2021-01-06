import React, {useState, useEffect, useRef} from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker'
import places from "../../../assets/data/feed"

const SearchResultMap = (props) => {
  // const map = useRef();
  const [selectedPlaceId , setSelectedPlaceId] = useState(null)

  return(
     <View style={{width: '100%', height: '100%'}}>
      <MapView
        // ref={map}
        style={{width: '100%', height: '100%'}}
       provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
    >
          {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />)
        )}

        </MapView>
      
     </View>
  );
}



export default SearchResultMap;