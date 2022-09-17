import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

interface Details {
  id: number;
  name: string;
  gender: string;
  age?: number;
  };
  
export class AppComponent {
  title = 'All Chords in a Key';
  ItemsArray = "";
  
  dacords: { key: string, cord: string }[] = [
    { "key": "C", "cord": "CDEFGAB" },
    { "key": "D", "cord": "DDEFGAB" },
  ]

  @ViewChild('teams') teams!: ElementRef;
	aselectedKey = '';
	onSelected():void {
		this.aselectedKey = this.teams.nativeElement.value;

    this.ItemsArray = this.dacords.find (key => this.aselectedKey)?.cord;
    //this.ItemsArray = ["D","E","F","F","G","A","B"];
    console.log(this.aselectedKey);
	}
}


