import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    private _oscillatorFrequency;
    private _filterFrequency;
    private _filterGain;
    private _oscillatorType;
    private _filterType;

    public products;
    public context: AudioContext;
    public oscillator: OscillatorNode;
    public gain: GainNode;
    public filter: BiquadFilterNode;
    public started: false;

    @Input()
    set oscillatorFrequency(value) {
        if (value !== undefined) {
            this._oscillatorFrequency = value;
            this.oscillator.frequency.value = value;
        }
    }
    get oscillatorFrequency() {
        return this._oscillatorFrequency;
    }

    @Input()
    set oscillatorType(value) {
        if (value !== undefined) {
            this._oscillatorType = value;
            this.oscillator.type = value;
        }
    }
    get oscillatorType() {
        return this._oscillatorType;
    }

    @Input()
    set filterType(value) {
        if (value !== undefined) {
            this._filterType = value;
            this.filter.type = value;
        }
    }
    get filterType() {
        return this._filterType;
    }

    @Input()
    set filterFrequency(value) {
        if (value !== undefined) {
            this._filterFrequency = value;
            this.filter.frequency.value = value;
        }
    }
    get filterFrequency() {
        return this._filterFrequency;
    }

    @Input()
    set filterGain(value) {
        if (value !== undefined) {
            this._filterGain = value;
            this.gain.gain.setValueAtTime(value, this.context.currentTime);
        }
    }
    get filterGain() {
        return this._filterGain;
    }


    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('http://localhost:8080/projects/RESTAPI/product').subscribe((res) => {
            this.products = res;
            console.log(res);
        });

        this.context = new AudioContext();
        this.filter = this.context.createBiquadFilter();
        this.oscillator = this.context.createOscillator();
        this.gain = this.context.createGain();
        this.filterFrequency = 200;
        this.filterGain = 150;
        this.oscillatorFrequency = 800;
        this.oscillatorType = 'sine';
        this.filterType = 'lowpass';
        this.filterGain = 0;
    }

    createNewOscillator() {
        this.oscillator = this.context.createOscillator();
        this.oscillator.type = this.oscillatorType;
        this.oscillator.frequency.value = this.oscillatorFrequency;
        this.filter.gain.value = this.filterGain;

        this.oscillator.connect(this.filter);
        this.filter.connect(this.gain);
        this.gain.connect(this.context.destination);

        this.oscillator.start();
    }

    startSound() {
        if (!this.started) {
            this.createNewOscillator();
        }
    }

    stopSound() {
        this.oscillator.stop();
    }
}
