import { Component } from "@angular/core";
import {setCategories, enable, categories, write, addCategories} from "trace"

@Component({
    selector: 'trace-messages-example-component',
    templateUrl: 'trace/trace-messages-example/trace-messages-example.component.html'
})

export class TraceMessagesExampleComponent {
    constructor() {
        // >> trace-write-method
        enable();

        addCategories(categories.Binding);
        setCategories(categories.concat(categories.Navigation, categories.Debug));

        write("I (heart) NativeScript!", categories.Navigation);
        // << trace-write-method
    }

}