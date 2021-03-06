import { FavTableController } from '../controllers/fav-table.controller';
import { FavTable, RestAPI } from '@order-manager/shared';
import { DefaultRouter } from './default.router';

export class FavTabelRouter extends DefaultRouter<FavTable> {
  rootPath = RestAPI.FAV_TABLE;
  controller = new FavTableController();
}
