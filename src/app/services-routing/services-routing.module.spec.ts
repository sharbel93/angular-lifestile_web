import { ServicesRoutingModule } from './services-routing.module';

describe('ServicesRoutingModule', () => {
  let servicesRoutingModule: ServicesRoutingModule;

  beforeEach(() => {
    servicesRoutingModule = new ServicesRoutingModule();
  });

  it('should create an instance', () => {
    expect(servicesRoutingModule).toBeTruthy();
  });
});
