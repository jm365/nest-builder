import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';
import { ComponentModule } from './module/component/component.module';
import { PageModule } from './module/page/page.module';

@Module({
  imports: [UserModule, ComponentModule, PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
