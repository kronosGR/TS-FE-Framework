import { User } from './models/User';

const user = new User({ name: 'kronos', age: 20 });
user.set({ age: 111 });

console.log(user.get('age'));
