import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

/**ADD COMPONENTS IN routingComponents */
export const routingComponents = [
    LoginComponent, HomeComponent
]
