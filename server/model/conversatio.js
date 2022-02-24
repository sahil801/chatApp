import  Mongoose  from "mongoose";


const conversationSchema = new Mongoose.Schema({
    members:{
        type : Array
    }},
    {
        timestamps:true
    }   
)

const conversation = Mongoose.model('conversation',conversationSchema);

export default conversation;