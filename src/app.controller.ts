import { Controller, Get, HttpStatus, Res,Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() response , @Headers() headers):any {    
    return response.status(HttpStatus.OK).json({
      message: 'This data you you will need',
      apiList : {
          nrc : 'http://'+headers.host+'/nrc'
      }
      });
  }
}
