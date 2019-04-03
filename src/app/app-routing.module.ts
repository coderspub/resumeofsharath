import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { path : '',component:HomeComponent },
  { path: 'myskills',component:MyskillsComponent },
  { path: 'achievements',component:AchievementsComponent },
  { path: 'contactme',component:ContactComponent },
  { path: 'educationalqualification',component:EducationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
