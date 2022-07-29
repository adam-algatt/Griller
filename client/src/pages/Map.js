

// import { useState } from "react";
// import { GoogleMap, 
// useLoadScript,
// Marker,
// } from "@react-google-maps/api"

// import usePlacesAutocomplete,
//  { 
// getGeocode, 
// getLatLng, 
// } from "use-places-autocomplete";
// import {
//   Combobox, 
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

// // vars are declared here instead of in the app f(x) to avoid extra 
// // re-renders from react
// const libraries = ["places"];
// // google map dimensions
// const mapContainerStyle = {
//   height: '100vh',
//   width: '100vw',
// };

// //default center value (if no place is selected googlePlacesAutocomplete)
// const portland = {
//   lat: 45.51,
//   lng: -122.67, 
// };

// export default function Places() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyCn7Q43VrRhRhefia3wZ1_6x0rojYjMzeo',
//     libraries,
//   });

//   if (!isLoaded) return <div><span>Loading...</span></div>;
//   return <Map />; 
// }

function Map() {

  return (
  <h1>Under Construction</h1>

// // default state is arr w/ empty object for addition of lat & lng coordinates later on
//   const [selected, setSelected] = useState(null);

// const restaurantStyling = [
//   {
// "featureType": "poi.establishment",
// "stylers": [
//   {"visibility": "off"}
// ]
// },
//   {
//     "featureType": "poi.food",
//     "stylers": [
//       {"visibility": "on"}
//     ]
//     },
// ];

//   return (
//     <>
// <div className="places-container">
//   <PlacesAutocomplete 
//   setSelected={setSelected}
//     />
// </div>

// <GoogleMap
// // if place isn't selected center map on center var otherwise use selection
// center={selected === null ? portland : selected}
// // center={center}
// zoom={15}
// mapContainerClassName="map-container"
// mapContainerStyle={mapContainerStyle}
// options={{ styles: restaurantStyling }}
// >
// {/* place marker on selection */}
// {selected && <Marker 
// position={selected}
//  />}
// </GoogleMap>
//     </>
//   );
// }

// const PlacesAutocomplete = ({ setSelected }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();
//     // awaits getGeocode to pull lat & lng from address. Then setsSelected 
//     //with the lat/lng pulled from getGeocode
//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     // setSelected.onChange(setSelected(current => [...current, {lat: lat, lng: lng}]))
//  setSelected({ lat, lng })
//   }
 
//   return ( 
//     <Combobox onSelect={handleSelect}>
//       <ComboboxInput 
//       value={value} 
//       onChange={(e) => setValue(e.target.value)}
//       disabled={!ready}
//       className="combobox-input"
//       placeholder="Enter a Place"
//       /> 
//     <ComboboxPopover>
//       <ComboboxList>
//       {console.log(data[0])}
//         {status === "OK" &&
//         data.map(({ place_id, description }) => (
//           <ComboboxOption key={place_id} value={description} />
//         ))}
        
//       </ComboboxList>
//     </ComboboxPopover>
//     </Combobox>
  
//   );
)};

export default  Map; 
