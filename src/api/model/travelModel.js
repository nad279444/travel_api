import mongoose from 'mongoose';

const {model,Schema}  = mongoose ;

const travelSchema = Schema({
    title : {
        type: String,
        required: true
    },
    image : String,
    description : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    latitude: {
        type: Number,
        required:true,
        min: -90,
        max: 90
    },
    longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180
    },
},
{timestamps: true}

)
 

const travelModel = model('Travel',travelSchema);


export default travelModel;