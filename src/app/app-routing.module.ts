import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

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

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  {
    path: 'services',
    component: ServicesComponent
  },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services/shallow_drain', component: ShallowdrainComponent },
  { path: 'services/contact', component: ContactComponent },
  { path: 'services/culverts', component: CulvertsComponent },
  { path: 'services/louver_vents', component: LouverventsComponent },
  {
    path: 'services/concrete_floor_tiles',
    component: ConcretefloortilesComponent
  },
  { path: 'services/star_concrete_tiles', component: StarconcreteComponent },
  { path: 'services/hatari_slabs', component: HatariComponent },
  { path: 'services/window_cills', component: WindowcillComponent },
  { path: 'services/paving_slabs', component: PavingslabsComponent },
  { path: 'services/side_slabs', component: SideslabComponent },
  { path: 'services/ibd_drainages', component: IbddrainagesComponent },
  { path: 'services/ventilations', component: VentilationsComponent },
  { path: 'services/hollow_blocks', component: HollowblockComponent },
  { path: 'services/solid_blocks', component: SolidblockComponent },
  { path: 'services/road_curbs', component: RoadcurbsComponent },
  { path: 'services/roofing_ridges', component: RoofingridgesComponent },
  { path: 'services/flower_vents', component: FlowerventsComponent },
  { path: 'services/column_coupings', component: ColumncoupingsComponent },
  { path: 'services/kerra_boundary_posts', component: KerraboundaryComponent },
  { path: 'services/ceramic_floor_tiles', component: CeramicfloorComponent },
  { path: 'services/terrazo_bench', component: TerrazobenchComponent },
  { path: 'services/cabro_blocks', component: CabrosblocksComponent },
  { path: 'services/paving_blocks', component: PavingblocksComponent },
  { path: 'services/road_channels', component: RoadchannelsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
