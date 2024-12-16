import * as express from 'express';
import SystemStatusController from './components/system-status/system-status.controller';
import ProductController from './components/product/product.controller';

export default function registerRoutes(app: express.Application): void {
    new SystemStatusController(app);
    new ProductController(app);
}
