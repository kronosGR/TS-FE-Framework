import { User } from './models/User';

const user = new User({ name: ' Zeus', age: 10 });

console.log(user.get('name'));
