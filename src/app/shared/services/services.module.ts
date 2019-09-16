import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ORDEM ALFABÉTICA
import { ApplicationService } from './application.service';
import { ConverterService } from './converter.service';
import { GeneratorService } from './generator.service';
import { MessagesService } from './messages.service';
import { ModalService } from './modal.service';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [],
	providers: [
		ApplicationService,
		ConverterService,
		GeneratorService,
		MessagesService,
		ModalService
		]
})

export class ServicesModule { }
