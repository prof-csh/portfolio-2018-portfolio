import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SidenavComponent } from './sidenav/sidenav.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
   { path: '', redirectTo: 'about', pathMatch: 'full' },
   { path: 'about', component: AboutComponent,  data: { depth: 1 } },
   { path: 'work', component: WorkComponent,  data: { depth: 2 } },
   { path: 'contact', component: ContactComponent,  data: { depth: 3 } }

];

// Still needs web-animations polyfill

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
