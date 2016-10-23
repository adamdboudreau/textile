/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextileListComponent } from './textile-list.component';

describe('TextileListComponent', () => {
  let component: TextileListComponent;
  let fixture: ComponentFixture<TextileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
