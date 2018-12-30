import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CroppieDirective} from 'angular-croppie-module';
import * as Croppie from 'croppie';

@Component({
  selector: 'app-modal-add-new-entry',
  templateUrl: './modal-add-new-entry.component.html',
  styleUrls: ['./modal-add-new-entry.component.css']
})
export class ModalAddNewEntryComponent implements OnInit, AfterViewInit {

  public croppieOptions: Croppie.CroppieOptions = {
    boundary: { width: 512, height: 521 },
    viewport: { width: 128, height: 128 },
    showZoomer: true,
    enableOrientation: true,
    enforceBoundary: false
  };

  @ViewChild('directive')
  public croppieDirective: CroppieDirective;

  public ngAfterViewInit() {
    this.croppieDirective.croppie = new Croppie(document.getElementById('croppieDitective'), this.croppieOptions);
    this.croppieDirective.croppie.bind({ url: 'assets/imgs/fridge.png'});
  }

  public handleUpdate(data) {
    console.dir(data);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
