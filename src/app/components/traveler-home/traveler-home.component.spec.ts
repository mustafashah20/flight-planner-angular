import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';

import { TravelerHomeComponent } from './traveler-home.component';

describe('TravelerHomeComponent', () => {
  let component: TravelerHomeComponent;
  let fixture: ComponentFixture<TravelerHomeComponent>;
  let authStub: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TravelerHomeComponent],
      providers: [
        { provide: AuthService, useValue: { authStub } },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
