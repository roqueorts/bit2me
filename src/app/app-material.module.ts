import { NgModule } from '@angular/core';


// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatRadioModule, MatDialogModule,
    MatSelectModule],
  exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatRadioModule, MatDialogModule,
    MatSelectModule]
})
export class AppMaterialModule { }
