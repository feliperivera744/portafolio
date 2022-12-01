import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  fondo: boolean = false;
  clase_color:string;
  

  ngOnInit(): void {
  }

  color(){
    if (this.fondo) {
      this.clase_color = "blanco"
      this.fondo = !this.fondo
    } else {
      this.fondo = !this.fondo
      this.clase_color = "oscuro"
      
    }
  }
}

