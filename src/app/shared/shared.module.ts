import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarSidenavComponent } from './toolbar-sidenav/toolbar-sidenav.component';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  exports: [
    ToolbarSidenavComponent
  ],
  declarations: [
    ToolbarSidenavComponent
  ],
  imports: [
    CommonModule,

    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
})
export class SharedModule { }
