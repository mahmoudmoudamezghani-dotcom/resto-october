import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-blog-expensive',
  imports: [NgFor],
  templateUrl: './blog-expensive.component.html',
  styleUrl: './blog-expensive.component.css'
})
export class BlogExpensiveComponent {

  items : any []=[
{id:'Indian Burger',def:'Was brean shed moveth day yielding tree yielding day were female and ',img:'img/icon/left_2.svg'},
{id:'Cremy Noodles',def:'Was brean shed moveth day yielding tree yielding day were female and ',img:'img/icon/left_2.svg'},
{id:'Honey Meat',def:'Was brean shed moveth day yielding tree yielding day were female and ',img:'img/icon/left_2.svg'},
]


}
