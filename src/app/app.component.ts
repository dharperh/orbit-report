import { Satellite } from './satellite';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList:  Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          // TODO: create a Satellite object using new tellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
          //for(let i=0; i < fetchedSatellites.length; i++)
          for (let object of fetchedSatellites) {
            let satellite = new Satellite (
              object.name, 
              object.type, 
              object.launchDate, 
              object.orbitType, 
              object.operational,);
            this.sourceList.push(satellite);
            }

            }.bind(this));
          }.bind(this));
        
        
          }
 }

