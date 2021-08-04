import { AssetActions, getAssets } from '../../../src/redux/coinAssets/actions'

describe('Redux - Coin Assets', () => {
    it('Should give get assets action', () => {
        const action = getAssets('inr', 'asc', 10, 1, false);
        expect(action).toEqual({
            payload: {
                currency: 'inr',
                order: 'asc',
                limit: 10,
                page: 1,
                sparkline: false,
            },
            type: AssetActions.GET_ASSETS,
        });
    });
});
