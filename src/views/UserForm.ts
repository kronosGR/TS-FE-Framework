import { User } from '../models/User';
import { View } from './View';
export class UserForm extends View {
  

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      // 'drag:div': this.onDragDiv
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    
    if (input) {
      const name = input.value;
      this.model.set({ name: name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User name: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change me</button>
        <button class="set-age">Set Random age</button>
      </div>
    `;
  }

  
}
