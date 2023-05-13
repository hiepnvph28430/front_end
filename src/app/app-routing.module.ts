import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: "", component: ProductsComponent },
  { path: "category", component: CategoryComponent },
  { path: "**", component: NotFoundPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
