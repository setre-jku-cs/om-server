import { TableController } from '../controllers/table.controller';
import { RestAPI, Table } from '@order-manager/shared';
import { DefaultRouter } from './default.router';

export class TableRouter extends DefaultRouter<Table> {
  rootPath = RestAPI.TABLE;
  controller = new TableController();
}
