import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { LogInComponent } from './modules/log-in/log-in.component';
import { NotAuthGuard } from "./shared/guards/not-auth.guard";
import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LogInComponent, canActivate: [NotAuthGuard]},
  {
    path: 'product-list',
    loadChildren: () => import('./modules/product-list/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuard],
  },
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
