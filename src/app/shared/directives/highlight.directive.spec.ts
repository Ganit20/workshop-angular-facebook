import { Component, DebugElement, Directive } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-fake',
  template:`
  <div appHighlight></div>
  `,})
class FakeComponent {}

describe('HighlightDirective', () => {
  let fakeComponent: ComponentFixture<FakeComponent>;
  let directive:DebugElement;
  const hasClass= () => directive.nativeElement.classList.contains('border');
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        HighlightDirective,
        FakeComponent,
        
      ]
    }).compileComponents();
    fakeComponent= TestBed.createComponent(FakeComponent);
    directive=fakeComponent.debugElement.query(By.directive(HighlightDirective));
    }
  );
  it('should create an instance', () => {
  
    expect(directive).toBeTruthy();
  });

  it('should add a class', () => {
    expect(hasClass()).toEqual(false);
    directive.triggerEventHandler('mouseover');
    expect(hasClass()).toEqual(true);
  });

});
