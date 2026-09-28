import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [App],
    providers: [provideRouter(routes)],
  }));

  it('creates the application', () => {
    expect(TestBed.createComponent(App).componentInstance).toBeTruthy();
  });

  it('opens the characters page from the root URL', async () => {
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeNativeElement?.querySelectorAll('mat-card').length).toBe(5);
    expect(harness.routeNativeElement?.textContent).toContain('Tanjiro Kamado');
    expect(harness.routeNativeElement?.textContent).toContain('Nezuko Kamado');
  });
});
