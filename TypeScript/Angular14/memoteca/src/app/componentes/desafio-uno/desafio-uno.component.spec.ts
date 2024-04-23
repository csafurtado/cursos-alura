import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioUnoComponent } from './desafio-uno.component';

describe('DesafioUnoComponent', () => {
  let component: DesafioUnoComponent;
  let fixture: ComponentFixture<DesafioUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesafioUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesafioUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
