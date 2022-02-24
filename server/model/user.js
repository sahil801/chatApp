import  Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    googleId : {
        type: String,
        required : true
    },
    imageUrl  : {
        type: String,
        required : true
    },
    email  : {
        type: String,
        required : true
    },
    name  : {
        type: String,
        required : true
    },
    givenName  : {
        type: String,
        required : true
    },
    familyName : {
        type: String,
        required : true
    }
});

const usersCollection =  Mongoose.model('user',userSchema);

export default usersCollection