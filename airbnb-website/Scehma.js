const joi =require("joi")  //joi validate the schema in server side

module.exports.ListingSchema=joi.object({
    listing:joi.object({
       title:joi.string().required(),
       description:joi.string().required(),
       location:joi.string().required(),
       country:joi.string().required(),
       price:joi.number().required().min(0),
       image:joi.string().allow("",null)

    })
})