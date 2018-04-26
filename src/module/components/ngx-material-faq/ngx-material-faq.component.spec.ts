import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {NgxMaterialFaqComponent} from './ngx-material-faq.component';
import {MatExpansionModule, MatToolbarModule} from '@angular/material';

describe('NgxMaterialFaqComponent', function () {
  let de: DebugElement;
  let comp: NgxMaterialFaqComponent;
  let fixture: ComponentFixture<NgxMaterialFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatExpansionModule
      ],
      declarations: [NgxMaterialFaqComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialFaqComponent);
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
