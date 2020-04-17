import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSignatureComponent } from './choose-signature.component';

describe('ChooseSignatureComponent', () => {
  let component: ChooseSignatureComponent;
  let fixture: ComponentFixture<ChooseSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
