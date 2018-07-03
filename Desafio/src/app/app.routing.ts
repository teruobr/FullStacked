import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./components/Cadastro/register.component";


const appRoutes: Routes = [
    { path: "", component: AppComponent },
    { path: "register", component: RegisterComponent },
    //     otherwise redirect to home
    { path: "**", redirectTo: "" }
  ];
  

  export const routing = RouterModule.forRoot(appRoutes);
