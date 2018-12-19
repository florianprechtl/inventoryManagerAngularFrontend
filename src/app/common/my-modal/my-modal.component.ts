import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {

    private _modalId: string;

    @Input()
    get modalId(): string {
        return this._modalId;
    }
    set modalId(value: string) {
        this._modalId = value;
        // document.querySelector('.modal').setAttribute('id', value);
    }

  constructor() { }

  ngOnInit() {
  }

}
