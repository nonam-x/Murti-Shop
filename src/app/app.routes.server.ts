import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'Productgrid/:category',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // Yahan tumhare saare categories list karo
      return [
        { category: 'all' },
        { category: 'shirts' },
        { category: 't-shirts' },
        { category: 'hoodies' },
        { category: 'jackets' },
        { category: 'jeans' }
      ];
    }
  }
];
