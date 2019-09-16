import { Injectable } from '@angular/core';
import { DialogService } from 'angularx-bootstrap-modal';
import { ModalAlertaComponent } from '../components/modal/modal-alerta/modal-alerta.component';

@Injectable()
export class ModalService {
	constructor(private dialogService: DialogService) { }

	alerta(mensagem: string, titulo?: string, caminhoURL? : string) {
		return this.dialogService.addDialog(ModalAlertaComponent, {
			title: titulo,
			message: mensagem,
			caminhoURL: caminhoURL
		});
	}
}