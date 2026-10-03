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
  for (const [url, count] of [['/demon-slayer', 5]] as const) {
    it(`changes both image variants through the selector on ${url}`, async () => {
      const harness = await RouterTestingHarness.create(url);
      await harness.fixture.whenStable();
      const page = harness.routeNativeElement!;
      const selector = page.querySelector('select')!;
      expect(page.querySelectorAll('img.image-filled').length).toBe(count);
      const originalTitles = Array.from(page.querySelectorAll('h3'), el => el.textContent);
      for (const variant of ['image-rounded', 'image-filled']) {
        selector.value = variant;
        selector.dispatchEvent(new Event('change'));
        await harness.fixture.whenStable();
        harness.detectChanges();
        expect(page.querySelectorAll(`img.${variant}`).length).toBe(count);
        expect(Array.from(page.querySelectorAll('h3'), el => el.textContent)).toEqual(originalTitles);
      }
    });
  }
  it('projects V2 into the primary card and v1 into each DBZ character card', async () => {
    const harness = await RouterTestingHarness.create('/dbz');
    const page = harness.routeNativeElement!;
    const primary = page.querySelector('app-primary-character-card')!;
    expect(primary.querySelector('.dynamic-content')?.textContent).toContain('Progra WEB V2');
    expect(primary.querySelector('img')?.getAttribute('src')).toContain('goku_normal.webp');
    const cards = Array.from(page.querySelectorAll('app-character-card'));
    expect(cards.length).toBe(2);
    expect(cards[0].querySelector('h3')?.textContent).toContain('Goku');
    expect(cards[1].querySelector('h3')?.textContent).toContain('Vegeta');
    for (const card of cards) {
      expect(card.querySelector('.dynamic-content')?.textContent).toContain('Progra WEB v1');
      expect(card.querySelector('img.image-filled')).not.toBeNull();
    }
  });
});
