import { NgModule } from '@angular/core';


// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [MatCardModule, MatButtonModule, MatToolbarModule, MatInputModule, MatIconModule, MatRadioModule, MatDialogModule],
  exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatRadioModule, MatDialogModule]
})
export class AppMaterialModule { }
