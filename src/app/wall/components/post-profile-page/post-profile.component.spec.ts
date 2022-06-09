import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProfilePageComponent } from './post-profile.component';

describe('PostProfileComponent', () => {
  let component: PostProfilePageComponent;
  let fixture: ComponentFixture<PostProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
