import usersCollection from "../model/user.js"

export const addUser = async (req,res)=>{
    try {
        let alredyExist = await usersCollection.findOne({googleId: req.body.googleId})
        if(alredyExist){
            return res.status(200).json('User Already exist')
        }
            const newUser = new usersCollection(req.body)
            await newUser.save();
            res.status(200).json('addUser successfull') 
        
        
    } catch (error) {
        res.status(500).json(error);
        console.log('addUser error**********',error)
    }
}

export const getUsers = async(req,res)=>{
    try {
       const users = await usersCollection.find({});
       res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}