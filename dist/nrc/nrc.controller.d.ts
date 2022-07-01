import { NrcService } from './nrc.service';
export declare class NrcController {
    private readonly nrcService;
    constructor(nrcService: NrcService);
    findAll(response: any): Promise<any>;
}
