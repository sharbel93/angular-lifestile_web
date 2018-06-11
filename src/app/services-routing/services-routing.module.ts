import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { BalustradesBalconyPostsComponent } from '../services-products/balustrades-balcony-posts/balustrades-balcony-posts.component';
import { CabrosblocksComponent } from '../services-products/cabrosblocks/cabrosblocks.component';
import { CeramicfloorComponent } from '../services-products/ceramicfloor/ceramicfloor.component';
import { ColumncoupingsComponent } from '../services-products/columncoupings/columncoupings.component';
import { CulvertsComponent } from '../services-products/culverts/culverts.component';
import { FlowerventsComponent } from '../services-products/flowervents/flowervents.component';
import { HatariComponent } from '../services-products/hatari/hatari.component';
import { HollowblockComponent } from '../services-products/hollowblock/hollowblock.component';
import { IbddrainagesComponent } from '../services-products/ibddrainages/ibddrainages.component';
import { KerraboundaryComponent } from '../services-products/kerraboundary/kerraboundary.component';
import { LouverventsComponent } from '../services-products/louvervents/louvervents.component';
import { PavingblocksComponent } from '../services-products/pavingblocks/pavingblocks.component';
import { PavingslabsComponent } from '../services-products/pavingslabs/pavingslabs.component';
import { RoadchannelsComponent } from '../services-products/roadchannels/roadchannels.component';
import { RoadcurbsComponent } from '../services-products/roadcurbs/roadcurbs.component';
import { RoofingridgesComponent } from '../services-products/roofingridges/roofingridges.component';
import { ShallowdrainComponent } from '../services-products/shallowdrain/shallowdrain.component';
import { SideslabComponent } from '../services-products/sideslab/sideslab.component';
import { SolidblockComponent } from '../services-products/solidblock/solidblock.component';
import { StarconcreteComponent } from '../services-products/starconcrete/starconcrete.component';
import { TerrazobenchComponent } from '../services-products/terrazobench/terrazobench.component';
import { VentilationsComponent } from '../services-products/ventilations/ventilations.component';
import { WindowcillComponent } from '../services-products/windowcill/windowcill.component';
import { ConcretefloortilesComponent } from '../services-products/concretefloortiles/concretefloortiles.component';
const routes: Routes = [
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      { path: 'shallow_drain', component: ShallowdrainComponent },
      { path: 'culverts', component: CulvertsComponent },
      { path: 'louver_vents', component: LouverventsComponent },
      { path: 'concrete_floor_tiles', component: ConcretefloortilesComponent },
      { path: 'star_concrete_tiles', component: StarconcreteComponent },
      { path: 'hatari_slabs', component: HatariComponent },
      { path: 'window_cills', component: WindowcillComponent },
      { path: 'paving_slabs', component: PavingslabsComponent },
      { path: 'side_slabs', component: SideslabComponent },
      { path: 'ibd_drainages', component: IbddrainagesComponent },
      { path: 'ventilations', component: VentilationsComponent },
      { path: 'hollow_blocks', component: HollowblockComponent },
      { path: 'solid_blocks', component: SolidblockComponent },
      { path: 'road_curbs', component: RoadcurbsComponent },
      { path: 'roofing_ridges', component: RoofingridgesComponent },
      { path: 'flower_vents', component: FlowerventsComponent },
      { path: 'column_coupings', component: ColumncoupingsComponent },
      { path: 'kerra_boundary_posts', component: KerraboundaryComponent },
      { path: 'ceramic_floor_tiles', component: CeramicfloorComponent },
      { path: 'terrazo_bench', component: TerrazobenchComponent },
      { path: 'cabro_blocks', component: CabrosblocksComponent },
      { path: 'paving_blocks', component: PavingblocksComponent },
      { path: 'road_channels', component: RoadchannelsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {}
