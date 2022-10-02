import { Component,ElementRef, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class User {

  constructor (
  public id: number,
  public firstname: String,
  public lastname: String)
  {};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

  
export class AppComponent {
  title = 'All Chords in a Key';
  ItemsArray = "";
  users! : User[];
  public baseUrl = "http://3.141.170.45:8080/customer";

// public baseUrl = "http://localhost:8080/customer";

  dacords: { key: string, cord: string }[] = [
    { "key": "C", "cord": "C	Dm	Em	F	G	Am	Bm♭5"},
    { "key": "D", "cord": "D	Em	F#m	G	A	Bm	C#m♭5" },
    { "key": "E", "cord": "E	F#m	G#m	A	B	C#m	D#m♭5" },
    { "key": "F", "cord": "F	Gm	Am	B♭	C	Dm	Em♭5" },
    { "key": "G", "cord": "G	Am	Bm	C	D	Em	F#m♭5" },
    { "key": "A", "cord": "A	Bm	C#m	D	E	F#m	G#m♭5" },
    { "key": "B", "cord": "B	C#	D#	E	F#	G#m	A#m♭5" }
  ];

  @ViewChild('teams') teams!: ElementRef;

  constructor(private httpClient:HttpClient) {
    
    this.ItemsArray = "C	Dm	Em	F	G	Am	Bm♭5";
  }

  ngOnInit(){

    console.log("onnginit");

    return this.httpClient.get<any>(this.baseUrl).subscribe(response=>{
      console.log(response);
      console.log("hello");
      this.users=response;

    });
  }

	onSelected():void {
    var str = this.teams.nativeElement.value;
    var foundstr="";
    /*
    this.ItemsArray = this.dacords.find (key => str)?.cord.toString()??'N/A';
    console.log(str+"*"+this.ItemsArray);
   */
    for (let i=0; i < this.dacords.length; i ++) {
      
      if (str==this.dacords[i].key) 
        foundstr= this.dacords[i].cord;
    }
    this.ItemsArray=foundstr;
   
    console.log(foundstr+"*"+str+"*"+this.ItemsArray);
	}

  
}
