import { Component } from "@angular/core";
import { StoreComponent } from "./store/store.component";
@Component({
    selector: "app",
    template: "<store></store>",
    standalone: true,
    imports: [StoreComponent]
})
export class AppComponent { }
