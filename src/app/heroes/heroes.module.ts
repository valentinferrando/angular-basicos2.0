import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ 
        HeroeComponent,
        ListadoComponent
    ], 
    exports: [
        ListadoComponent
    ], 
    imports: [ // usualmente solo modulos son objetos que se colocan en los imports 
        CommonModule, 

    ]

})

export class HeroesModule {
    
}