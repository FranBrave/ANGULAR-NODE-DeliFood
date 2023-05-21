import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    connect('mongodb+srv://FranBrave:V4hXpp6BxuOofNG6@franbrave.qzw1i.mongodb.net/DeliFood?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}