import { Injectable } from '@angular/core';
// other parts of the application can request an instance of this service. Cause this service is a class
import { HousingLocation } from './housing-location';
@Injectable({
  providedIn: 'root' // it can injected here
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() { }
  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  // if the 'id' that we are passing as an argument doesn't match any id the housingLocationList, we return undefined
  // find(needs a function callback)
  // ex: const numbers = [10, 20, 30, 40]
  // const result = numbers.find(num => num > 25), returns the first match, which is 30 here
  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
