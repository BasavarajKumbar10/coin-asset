export interface IGetAssetsAction {
    type: string,
    payload: {
        currency: string;
        order: string;
        limit: number;
        page: number;
        sparkline: boolean;
    }
}
