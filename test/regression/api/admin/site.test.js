const {expect} = require('chai');
const {any, stringMatching} = require('expect');

const framework = require('../../../utils/e2e-framework');

describe('Config API', function () {
    let agent;

    before(async function () {
        agent = await framework.getAgent('/ghost/api/canary/admin/');
    });

    it('can retrieve config and all expected properties', async function () {
        const res = await agent
            .get('site/');

        expect(res.body.site).to.matchSnapshot({
            version: stringMatching(/\d+\.\d+/)
        });
        expect(res.headers).to.matchSnapshot({
            date: any(String),
            etag: any(String)
        });
    });
});
