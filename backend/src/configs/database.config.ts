import { connect, ConnectOptions } from 'mongoose';

export const dbConnect = () => {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
        console.log("Error: MONGO_URI not defined");
        return;
    }

    connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("Connected successfully"),
        (error) => console.log(error)
    );
}