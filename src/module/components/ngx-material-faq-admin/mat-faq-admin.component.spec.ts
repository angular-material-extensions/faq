import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {MatFaqAdminComponent} from './mat-faq-admin.component';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('NgxMaterialFaqComponent', function () {
  let de: DebugElement;
  let comp: MatFaqAdminComponent;
  let fixture: ComponentFixture<MatFaqAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatExpansionModule,
      ],
      declarations: [MatFaqAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFaqAdminComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <p> text', () => {
    fixture.detectChanges();
    // const p = de.nativeElement;
    // expect(p.textContent).toEqual('Angular Library built with material design in order to provide a reusable faq (frequently asked questions) component for every project. Ask, Answer and List');
  });
});
