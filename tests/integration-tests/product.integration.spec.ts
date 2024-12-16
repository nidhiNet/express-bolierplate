import 'jest';
import * as express from 'express';
import * as request from 'supertest';
import {
    StatusCodes,
} from 'http-status-codes';
import IntegrationHelpers from '../helpers/Integration-helpers';

describe('priduct integration tests', () => {
    let app: express.Application;

    beforeAll(async() => {
        app = await IntegrationHelpers.getApp();
    });

    it('can get product list', async () => {
        await request(app)
            .get('/api/product/list')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect((res: request.Response) => {
                // eslint-disable-next-line no-console
                console.log(res.text);
            })
            .expect(StatusCodes.OK);
    });
        
});
