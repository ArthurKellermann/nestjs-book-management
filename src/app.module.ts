import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { HttpModule } from './modules/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
