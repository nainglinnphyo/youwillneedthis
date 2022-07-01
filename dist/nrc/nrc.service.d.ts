import { Model } from "mongoose";
export declare class NrcService {
    private nrcModel;
    constructor(nrcModel: Model<any>);
    findAll(): Promise<any[]>;
}
