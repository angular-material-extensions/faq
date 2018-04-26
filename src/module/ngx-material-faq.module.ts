import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgxMaterialFaqAdminComponent} from './components/ngx-material-faq-admin/ngx-material-faq-admin.component';
import {NgxMaterialFaqComponent} from './components/ngx-material-faq/ngx-material-faq.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule, MatExpansionModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

// Export module's public API
export {NgxMaterialFaqAdminComponent} from './components/ngx-material-faq-admin/ngx-material-faq-admin.component';
export {NgxMaterialFaqComponent} from './components/ngx-material-faq/ngx-material-faq.component';
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
      NgxMaterialFaqAdminComponent,
      NgxMaterialFaqComponent
    ],
  declarations: [NgxMaterialFaqAdminComponent, NgxMaterialFaqComponent]
})
export class NgxMaterialFaqModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxMaterialFaqModule,
      providers: []
    };
  }
}
