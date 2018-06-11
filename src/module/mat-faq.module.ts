import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {MatFaqAdminComponent} from './components/ngx-material-faq-admin/mat-faq-admin.component';
import {MatFaqComponent} from './components/faq/mat-faq.component';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

// Export module's public API
export {MatFaqAdminComponent} from './components/ngx-material-faq-admin/mat-faq-admin.component';
export {MatFaqComponent} from './components/faq/mat-faq.component';
export {FaqItem} from './faq.item';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports:
    [

      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      MatCardModule,
      MatToolbarModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      MatExpansionModule,
      MatFaqAdminComponent,
      MatFaqComponent
    ],
  declarations: [MatFaqAdminComponent, MatFaqComponent]
})
export class MatFaqModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatFaqModule,
      providers: []
    };
  }
}
