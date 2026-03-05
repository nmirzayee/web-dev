import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

// myArray: DataType[] = []
// export type Routes = Route[] => so, Routes = Route[], that's why we skipped it here

const routeConfig: Routes = [
  {
    path: '', // by default, this page will be display
    component: HomeComponent,
    title: 'Home Page'
  }, 
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details Page'
  }
];
export default routeConfig; // we want this routeConfig variable to be available for files that import our routes. that's why export it



// 1. navigated in our application using the Angular router and the routerlink directive
// 2. Passed information to a route using the parameterized routes
// 3. Retrieved information from a route in a component using the ActivatedRoute feature