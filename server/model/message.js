import  Mongoose  from "mongoose";

const messageSchema = new  Mongoose.Schema({
    conversationId :{
        type: String,
        required:true
    },
    sender :{
        type: String,
        required:true
    },
    text :{
        type: String,
        required:true
    }},
    {
        timestamps:true
    }
)

const Message = Mongoose.model('message',messageSchema);
export default  Message;