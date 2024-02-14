import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }
