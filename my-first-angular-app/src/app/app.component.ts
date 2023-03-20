import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
    <h1> {{ title }}</h1>
    <div>
        <p>Ma composante en plusieurs lignes</p>
    </div>
    `,
    styleUrls: []
})
export class AppComponent {
    title = 'Coulisses tech';
}

