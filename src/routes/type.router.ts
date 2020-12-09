import { TypeController } from '../controllers/type.controller';
import { ItemType, RestAPI } from '@order-manager/shared';
import { DefaultRouter } from './default.router';

export class TypeRouter extends DefaultRouter<ItemType> {
  rootPath = RestAPI.TYPE;
  controller = new TypeController();
}
