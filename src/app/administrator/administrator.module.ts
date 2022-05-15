import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataCardIDComponent } from './data-card-id/data-card-id.component';
import { DataTamuComponent } from './data-tamu/data-tamu.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'dataTamu',
        component: DataTamuComponent,
      },
      {
        path: 'dataCardID',
        component: DataCardIDComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [MainComponent, HomeComponent, DataCardIDComponent, DataTamuComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild(routes),
  ]
})
export class AdministratorModule {
  static AdministratorModule: any;
}
