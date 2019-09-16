import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Importação de componentes customizados devem ser organizados por ordem alfabética
import { ModalAlertaComponent } from './modal/modal-alerta/modal-alerta.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		ModalAlertaComponent	
	],
	exports: [
		ModalAlertaComponent
	],
	// Don't forget to add the component to entryComponents section
	entryComponents: [
		ModalAlertaComponent
	]
})
export class ComponentsModule { }
