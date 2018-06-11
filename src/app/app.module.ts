import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServicesRoutingModule } from './services-routing/services-routing.module';
import { BalustradesBalconyPostsComponent } from './services-products/balustrades-balcony-posts/balustrades-balcony-posts.component';
import { CabrosblocksComponent } from './services-products/cabrosblocks/cabrosblocks.component';
import { CeramicfloorComponent } from './services-products/ceramicfloor/ceramicfloor.component';
import { ColumncoupingsComponent } from './services-products/columncoupings/columncoupings.component';
import { CulvertsComponent } from './services-products/culverts/culverts.component';
import { FlowerventsComponent } from './services-products/flowervents/flowervents.component';
import { HatariComponent } from './services-products/hatari/hatari.component';
import { HollowblockComponent } from './services-products/hollowblock/hollowblock.component';
import { IbddrainagesComponent } from './services-products/ibddrainages/ibddrainages.component';
import { KerraboundaryComponent } from './services-products/kerraboundary/kerraboundary.component';
import { LouverventsComponent } from './services-products/louvervents/louvervents.component';
import { PavingblocksComponent } from './services-products/pavingblocks/pavingblocks.component';
import { PavingslabsComponent } from './services-products/pavingslabs/pavingslabs.component';
import { RoadchannelsComponent } from './services-products/roadchannels/roadchannels.component';
import { RoadcurbsComponent } from './services-products/roadcurbs/roadcurbs.component';
import { RoofingridgesComponent } from './services-products/roofingridges/roofingridges.component';
import { ShallowdrainComponent } from './services-products/shallowdrain/shallowdrain.component';
import { SideslabComponent } from './services-products/sideslab/sideslab.component';
import { SolidblockComponent } from './services-products/solidblock/solidblock.component';
import { StarconcreteComponent } from './services-products/starconcrete/starconcrete.component';
import { TerrazobenchComponent } from './services-products/terrazobench/terrazobench.component';
import { VentilationsComponent } from './services-products/ventilations/ventilations.component';
import { WindowcillComponent } from './services-products/windowcill/windowcill.component';
import { ConcretefloortilesComponent } from './services-products/concretefloortiles/concretefloortiles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BalustradesBalconyPostsComponent,
    CabrosblocksComponent,
    CeramicfloorComponent,
    ColumncoupingsComponent,
    CulvertsComponent,
    FlowerventsComponent,
    HatariComponent,
    HollowblockComponent,
    IbddrainagesComponent,
    KerraboundaryComponent,
    LouverventsComponent,
    PavingblocksComponent,
    PavingslabsComponent,
    RoadchannelsComponent,
    RoadcurbsComponent,
    RoofingridgesComponent,
    ShallowdrainComponent,
    SideslabComponent,
    SolidblockComponent,
    StarconcreteComponent,
    TerrazobenchComponent,
    VentilationsComponent,
    WindowcillComponent,
    ConcretefloortilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
