import mongoose from "mongoose";
import chalk from "chalk";

let mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.set("returnOriginal", false);

mongoose.connect('mongodb://127.0.0.1:27017/goose_tracker_db', mongooseConfig)

mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
mongoose.connection.on('error', () => console.log(chalk.red('MongoDB connection error')));
mongoose.connection.on('disconnected', () => console.log(chalk.bold('MongoDB connection disconnected')));

export default mongoose.connection;