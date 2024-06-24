import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCartaoComponent } from './meu-cartao.component';

describe('MeuCartaoComponent', () => {
  let component: MeuCartaoComponent;
  let fixture: ComponentFixture<MeuCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuCartaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
