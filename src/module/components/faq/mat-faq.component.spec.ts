import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {MatFaqComponent} from './mat-faq.component';
import {MatExpansionModule, MatToolbarModule} from '@angular/material';

describe('MatFaqComponent', function () {
  let de: DebugElement;
  let comp: MatFaqComponent;
  let fixture: ComponentFixture<MatFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatExpansionModule
      ],
      declarations: [MatFaqComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFaqComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <p> text', () => {
    fixture.detectChanges();
  });
});
