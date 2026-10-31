import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-menu',
  imports: [NgFor,NgIf],
  templateUrl: './popular-menu.component.html',
  styleUrl: './popular-menu.component.css'
})
export class PopularMenuComponent {
  // Tab el active par défaut
  activeTab: string = 'Special';
  tabs = [
    { id: 'Special', label: 'Special' },
    { id: 'Breakfast', label: 'Breakfast' },
    { id: 'Launch', label: 'Launch' },
    { id: 'Dinner', label: 'Dinner' },
    { id: 'Sneaks', label: 'Sneaks' }
  ];

  specialtab:any[]=[
    {id:'Special',img:'img/food_menu/single_food_1.png',name:'Pork Sandwich',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Special',img:'img/food_menu/single_food_2.png',name:'Roasted Marrow',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Special',img:'img/food_menu/single_food_3.png',name:'Summer Cooking',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Special',img:'img/food_menu/single_food_4.png',name:'Easter Delight',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Special',img:'img/food_menu/single_food_5.png',name:'Tiener Schnitze',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Special',img:'img/food_menu/single_food_6.png',name:'Chicken Roast',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
  ];
  Breakfast:any[]=[
    {id:'Breakfast',img:'img/food_menu/single_food_1.png',name:'Pork Sandwich',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Breakfast',img:'img/food_menu/single_food_2.png',name:'Roasted Marrow',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Breakfast',img:'img/food_menu/single_food_3.png',name:'Summer Cooking',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Breakfast',img:'img/food_menu/single_food_4.png',name:'Easter Delight',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Breakfast',img:'img/food_menu/single_food_5.png',name:'Tiener Schnitze',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Breakfast',img:'img/food_menu/single_food_6.png',name:'Chicken Roast',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
  ];
  Launchtab:any[]=[
    {id:'Launch',img:'img/food_menu/single_food_1.png',name:'Pork Sandwich',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Launch',img:'img/food_menu/single_food_2.png',name:'Roasted Marrow',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Launch',img:'img/food_menu/single_food_3.png',name:'Summer Cooking',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Launch',img:'img/food_menu/single_food_4.png',name:'Easter Delight',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Launch',img:'img/food_menu/single_food_5.png',name:'Tiener Schnitze',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Launch',img:'img/food_menu/single_food_6.png',name:'Chicken Roast',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
  ];
  Dinnertab:any[]=[
    {id:'Dinner',img:'img/food_menu/single_food_1.png',name:'Pork Sandwich',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Dinner',img:'img/food_menu/single_food_2.png',name:'Roasted Marrow',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Dinner',img:'img/food_menu/single_food_3.png',name:'Summer Cooking',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Dinner',img:'img/food_menu/single_food_4.png',name:'Easter Delight',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Dinner',img:'img/food_menu/single_food_5.png',name:'Tiener Schnitze',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
    {id:'Dinner',img:'img/food_menu/single_food_6.png',name:'Chicken Roast',def:'Theyre wherein heaven seed hath nothing',pricing:'$40.00'},
  ];
  Sneakstab: any[] = [
    {id:'Sneaks', img:'img/food_menu/single_food_1.png', name:'Pork Sandwich', def:"They're wherein heaven seed hath nothing", pricing:'$40.00'},
    {id:'Sneaks', img:'img/food_menu/single_food_2.png', name:'Roasted Marrow', def:"They're wherein heaven seed hath nothing", pricing:'$40.00'},
    {id:'Sneaks', img:'img/food_menu/single_food_3.png', name:'Summer Cooking', def:"They're wherein heaven seed hath nothing", pricing:'$40.00'},
    {id:'Sneaks', img:'img/food_menu/single_food_4.png', name:'Easter Delight', def:"They're wherein heaven seed hath nothing", pricing:'$40.00'},
    {id:'Sneaks', img:'img/food_menu/single_food_5.png', name:'Tiener Schnitze', def:"They're wherein heaven seed hath nothing", pricing:'$40.00'},
    {id:'Sneaks', img:'img/food_menu/single_food_6.png', name:'Chicken Roast', def:"They're wherein heaven seed hath nothing", pricing:'$40.00'}
  ];
  // Function 
  selectTab(tabId: string) {
    this.activeTab = tabId;
  }

}
