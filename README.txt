Advacned Google autocomplete addresses fiels
>
This package made to help you while using JS to create autocomplete fields easily with a full support of documentary 
>
You can find the final example here > 

and the last result can be like this (return from method called extractAddressDetails() )
{
    street_number: "1060", 
    route: "West Addison Street", 
    neighborhood: "Lake View East", 
    locality: "Chicago", 
    postcode: "60613"
    postal_code_suffix: null,
    administrative_area_level_1: "Illinois"
    administrative_area_level_2: "Cook County"
}

or you can get the origina view by this method GetDetailsByPlaceID()
and gonna look like this
address_components: [
    0: {long_name: "1060", short_name: "1060"}
    1: {long_name: "West Addison Street", short_name: "W Addison St"}
    2: {long_name: "Lake View East", short_name: "Lake View East"}
    3: {long_name: "Chicago", short_name: "Chicago"}
    4: {long_name: "Cook County", short_name: "Cook County"}
    5: {long_name: "Illinois", short_name: "IL"}
    6: {long_name: "United States", short_name: "US"}
    7: {long_name: "60613", short_name: "60613"}
]