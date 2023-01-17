import { Test, TestingModule } from '@nestjs/testing';
import { AphController } from './aph.controller';
import { AphService } from './aph.service';

describe('AphController', () => {
  let aphController: AphController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AphController],
      providers: [AphService],
    }).compile();

    aphController = app.get<AphController>(AphController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(aphController.getHello()).toBe('Hello World!');
    });
  });
});
