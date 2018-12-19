import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashbordComponent } from './dashbord/dashbord.component'
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
 {path: 'heroes',component: HeroesComponent },
 {path: 'dashbord',component: DashbordComponent },
 {path: 'details/:id',component: HeroDetailsComponent},
 {path: '', redirectTo: '/dashbord', pathMatch: 'full'}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
