import { User } from './models/User';

const user = new User({ name: 'kronos', age: 20 });
user.set({ age: 111 });

user.on('change', () => {
  console.log('change #1')
});

user.trigger('change')
