import { User } from './models/User';

const user = new User({ name:' Zeus', age:10 });

user.on('change', ()=> {
console.log("User changed")
})
