import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }