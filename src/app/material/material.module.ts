import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { materialize } from 'rxjs/operators';

// importam si exportam de aici toate componentele din angular materialize, 
// pentru a nu incarca inutil app.modules
const MaterialComponents = [
  MatButtonModule, MatCardModule, MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
