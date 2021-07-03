let GetPostalCode = require('../Google/GetPostalCode');
let GoogleAutoComplete = require('../Google/GoogleAutoComplete');

const getPlaceID = async () => {
    try{
        let res = await GoogleAutoComplete.GoogleAutoComplete('1060 Sheppard');
        return 'ChIJbZoKahsyK4gRyNbxUPBv_OI';
        // return res[0].place_id;
    }catch(err){
        console.error(err);
    }
}

const getPostal = async () => {
    try{
        let res = await GetPostalCode.GetPostalCode(getPlaceID());
        console.log(res);
        console.log(getPlaceID());
    }catch(err){
        console.error(err);
    }
}
getPostal();