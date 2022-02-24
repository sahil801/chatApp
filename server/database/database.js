import Mongoose  from "mongoose";

const Connection = async (userName,password)=>{
    //  const url = `mongodb+srv://${userName}:${password}@chats.bylp4.mongodb.net/MYCHATS?retryWrites=true&w=majority`;
    const url = `mongodb+srv://${userName}:${password}@chats.bylp4.mongodb.net/MYCHATS?retryWrites=true&w=majority`; 
    try {
        await Mongoose.connect(
            url,
            {
                useUnifiedTopology: true,
                useNewUrlParser : true,
                // useFindAndModify : false
                // useFindAndModify : false 
            })  
        console.log('connection successfull')    
     } catch (error) {
         console.log('Error :     ',error)
     }
     
}
export default Connection