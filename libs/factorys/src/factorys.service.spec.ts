import { Test, TestingModule } from '@nestjs/testing';
import { FactorysService } from './factorys.service';

describe('FactorysService', () => {
  let service: FactorysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorysService],
    }).compile();

    service = module.get<FactorysService>(FactorysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
