import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";

@Injectable()
export class NrcService {
  constructor(@InjectModel('Nrc') private nrcModel:Model<any>) { }

  async findAll() {
    const nrcData = await this.nrcModel.find();
    if (!nrcData || nrcData.length == 0) {
        throw new NotFoundException('Nrc data not found!');
    }
    return nrcData;
  }
}
