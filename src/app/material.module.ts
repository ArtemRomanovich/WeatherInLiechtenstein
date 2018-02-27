import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [MatListModule,MatButtonModule,MatIconModule,MatToolbarModule],
  exports: [MatListModule,MatButtonModule,MatIconModule,MatToolbarModule]
})
export class MaterialModule {}
