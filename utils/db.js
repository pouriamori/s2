import mongoose from 'mongoose'


//تعریف تابع اتصال کننده به مونگو دی بی 
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection Failed")
  }
}


export default connect;

