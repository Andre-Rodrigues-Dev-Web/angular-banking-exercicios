import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

const sharedComponents = [
  CardComponent,
  HeaderComponent
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }
