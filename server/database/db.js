import mongoose from "mongoose";

export const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.8piatc2.mongodb.net/?retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
       console.log('database connected successfully');
    }
    catch(error) {
        console.log('connection error', error.message);
    }
}

export default Connection;