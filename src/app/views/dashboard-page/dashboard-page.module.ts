import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashboardPageComponent } from "./dashboard-page.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DashboardPageComponent],
  exports: [DashboardPageComponent]
})
export class DashboardPageModule {}
