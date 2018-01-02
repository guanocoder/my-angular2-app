import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeraddComponent } from './serveradd.component';

describe('ServeraddComponent', () => {
  let component: ServeraddComponent;
  let fixture: ComponentFixture<ServeraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
