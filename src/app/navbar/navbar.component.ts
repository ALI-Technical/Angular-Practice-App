import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    template: `
    <h1>Navbar Component</h1>
    <p>Paragraph</p> 
    `,
    styles: [`h1{
                color: red;
                font-size: 50px
            }
            p{
                color: red;
                font-size: 50px
            }`]
})

export class NavbarComponent {

}