/**
 * @export
 * @class GoogleAutoComplete
 * @author Mohamed Atef <me@mo-webdev.com>
 */
export default class GoogleAutoComplete {

  async getGoogleSuggestions (text, options) {
    return(
      new Promise((resolve, reject) => {
          if (!text) {
              return reject("Need valid text input")
          }
          
          if (typeof window === "undefined") {
              return reject("Need valid window object")
          }
          
      try {
          new window.google.maps.places.AutocompleteService().getQueryPredictions(
              { input: text, componentRestrictions: options.componentRestrictions? options.componentRestrictions: null, fields: options.fields? options.fields: null },
              // { input: text },
              resolve
              )
          } catch (e) {
              reject(e)
          }
      })
    );

  }
  // Get place details
  async GetDetailsByPlaceID (placeId) {
    return (
      new Promise((resolve, reject) => {
        if (!placeId) reject("placeId not provided")
        
        try {
          new window.google.maps.places.PlacesService(
            document.createElement("div")
          ).getDetails(
            {
              placeId,
              fields: ["address_components"],
            },
            details => {
              return resolve(details)
            }
          )
        }catch(e){
          reject(e)
        }
      })  
    );
  }

  extractAddressDetails (details){
    let street_number = null;
    for(let i = 0; i < details.address_components.length; i++){
      if(details.address_components[i].types[0] === 'street_number'){
        street_number = details.address_components[i].long_name;
      }
    }

    let route = null;
    for(let i = 0; i < details.address_components.length; i++){
      if(details.address_components[i].types[0] === 'route'){
        route = details.address_components[i].long_name;
      }
    }

    let neighborhood = null;
    for(let i = 0; i < details.address_components.length; i++){
      if(details.address_components[i].types[0] === 'neighborhood'){
        neighborhood = details.address_components[i].long_name;
      }
    }

    // Get city
    let locality = null;
    for(let i = 0; i < details.address_components.length; i++){
      if(details.address_components[i].types[0] === 'locality'){
        locality = details.address_components[i].long_name;
      }
    }
    
    let postcode = null;
    for(let i = 0; i < details.address_components.length; i++){
      if(details.address_components[i].types[0] === 'postal_code'){
          postcode = details.address_components[i].long_name;
      }
    }

    let postal_code_suffix = null;
    for(let i = 0; i < details.address_components.length; i++){
      if(details.address_components[i].types[0] === 'postal_code_suffix'){
          postal_code_suffix = details.address_components[i].long_name;
      }
    }

    let administrative_area_level_1 = null;
    for(let i = 0; i < details.address_components.length; i++){
      if(details.address_components[i].types[0] === 'administrative_area_level_1'){
        administrative_area_level_1 = details.address_components[i].long_name;
      }
    }

    let administrative_area_level_2 = null;
    for(let i = 0; i < details.address_components.length; i++){
      if(details.address_components[i].types[0] === 'administrative_area_level_2'){
        administrative_area_level_2 = details.address_components[i].long_name;
      }
    }
    return {
      street_number: street_number,
      route: route,
      neighborhood: neighborhood,
      locality: locality,
      postcode: postcode,
      postal_code_suffix: postal_code_suffix,
      administrative_area_level_1: administrative_area_level_1,
      administrative_area_level_2: administrative_area_level_2,
    };
  }
}
