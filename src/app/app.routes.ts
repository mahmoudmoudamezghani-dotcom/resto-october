import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    // http://localhost:4200/ path est vide home 
    {path:"",component:HomeComponent},
    // http://localhost:4200/ path about est about component 
    {path:"about",component:AboutComponent},
    // http://localhost:4200/ path menu est menu component display 
    {path:"menu",component:MenuComponent},
    // http://localhost:4200/ path chefs de chefs compnent display   
    {path:"chefs",component:ChefsComponent},
    // http://localhost:4200/ path blog de blog component display
    {path:"blog",component:BlogComponent},
    // http://localhost:4200/ path contact de component display 
    {path:"contact",component:ContactComponent},
];
