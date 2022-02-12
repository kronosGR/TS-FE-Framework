import { User } from "./models/User";


const user = new User({name: 'kronos', age:20});

console.log(user.get('age'))