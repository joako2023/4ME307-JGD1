import { Test, TestingModule } from '@nestjs/testing';
import { ControllerBase } from './controller-base';



describe('ControllerService', () => {
  let service: ControllerBase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControllerBase],
    }).compile();

    service = module.get<ControllerBase>(ControllerBase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
