import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Nicolas';
  age = 18;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://source.unsplash.com/random'
  }
  names: string[] = ['Rudy', 'Valeria', 'Alex'] ;
  newName = '';
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement // div es elemento de html por tanto se usa target as htlmElement
      console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement // imput
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  eliminateName(index: number){
    this.names.splice(index, 1);
  }
}
