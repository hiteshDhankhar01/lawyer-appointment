import mongoose from 'mongoose';

export const ConnectToDB = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/todoApp');
        console.log(`mongoose is connected with ${mongoose.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};


// import mongoose from 'mongoose';

// let isConnected: boolean = false;

// export const connectToDB = async (): Promise<void> => {
//     mongoose.set('strictQuery', true);

//     if (isConnected) {
//         console.log('MongoDB is already connected');
//         return;
//     }

//     try {
//         await mongoose.connect(process.env.MONGODB_URL || '', {
//             dbName: 'LawyerApp',
//         });

//         isConnected = true;
//         console.log('MongoDB is connected');
//     } catch (err) {
//         console.log(err);
//     }
// };


// import mongoose from "mongoose";

// let isConnected: boolean = false;

// export const connectToDB = async (): Promise<void> => {
//   mongoose.set("strictQuery", true)

//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URL || "", {
//       dbName: "Borcelle_Admin"
//     })

//     isConnected = true;
//     console.log("MongoDB is connected");
//   } catch (err) {
//     console.log(err)
//   }
// }