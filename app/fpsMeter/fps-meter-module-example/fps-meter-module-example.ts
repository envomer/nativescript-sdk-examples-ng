import { Component, NgZone } from "@angular/core";
// >> fps-meter-module-import
import {start, removeCallback, addCallback, stop} from "fps-meter"
// << fps-meter-module-import

@Component({
    selector: 'fps-meter-module-component',
    styleUrls:['fpsMeter/fps-meter-module-example/fps-meter-module-example.css'],
    templateUrl: 'fpsMeter/fps-meter-module-example/fps-meter-module-example.html'
})

export class FPSMeterModuleExampleComponent {
    public status = false;
    public callbackId;
    public fps:string="0";
    public minfps:string="0";

    constructor(private zone:NgZone){

    }

    public fpsmeter(){
        if(this.status){
            // >> stop-fps-meter
            removeCallback(this.callbackId);
            stop();
            // << stop-fps-meter
            this.status=false;
        }
        else{
            // >> start-fps-meter
                this.callbackId = addCallback((fps: number, minFps: number) => {
                    this.zone.run(()=>{
                        this.fps=fps.toFixed(2);
                        this.minfps=minFps.toFixed(2);
                    })
                });
            
            start();
            // << start-fps-meter
            this.status=true;
        }
    }
}