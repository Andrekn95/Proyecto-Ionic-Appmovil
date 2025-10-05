import { Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component'; // Importa el componente
import { MirrorComponent } from './mirror/mirror.component'; // Importa el componente
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'contador',
    component: ContadorComponent,
  },
  {
    path: 'mirror',
    component: MirrorComponent,
  },
];
