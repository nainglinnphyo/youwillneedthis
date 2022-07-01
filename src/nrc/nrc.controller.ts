import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { NrcService } from './nrc.service';

@Controller('nrc')
export class NrcController {
  constructor(private readonly nrcService: NrcService) {}

  @Get()
  async findAll(@Res() response) {
    try {
      const data = await this.nrcService.findAll();
        return response.status(HttpStatus.OK).json({
        message: 'All nrc data found successfully',data});
     } catch (err) {
        return response.status(err.status).json(err.response);
     }
    }

}
