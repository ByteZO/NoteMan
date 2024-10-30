// converting env variable to string
import "dotenv/config.js";
const envConfig = {
    DB_URI: String(process.env.MONGO_DB_URI), 
    PORT: String(process.env.PORT),
    JWT_SECRET: String(process.env.JWT_SECRET),
};



export default envConfig;
 