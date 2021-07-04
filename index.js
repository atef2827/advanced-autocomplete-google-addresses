const GetDetailsByPostalCode = async placeId =>
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
    } catch (e) {
      reject(e)
    }
  })
export default GetDetailsByPostalCode;


const GoogleAutoCompelete = async (text, options) =>
new Promise((resolve, reject) => {
    if (!text) {
        return reject("Need valid text input")
    }
    
    // for use in things like GatsbyJS where the html is generated first
    if (typeof window === "undefined") {
        return reject("Need valid window object")
    }
    
try {
    let arr = options['input'] = text;
    new window.google.maps.places.AutocompleteService().getQueryPredictions(
        arr,
        resolve
        )
    } catch (e) {
        reject(e)
    }
})
export default GoogleAutoCompelete;
