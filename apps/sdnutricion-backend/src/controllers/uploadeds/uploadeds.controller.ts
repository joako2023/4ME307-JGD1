import { Controller, Get, Param, Res } from '@nestjs/common';
import * as fs from "fs";

@Controller('uploads')
export class UploadedsController {
    @Get(':file')
    getFile(@Param('file') file: string, @Res() res) {
      fs.createReadStream('./uploads/'+file).pipe(res);
    }
}
