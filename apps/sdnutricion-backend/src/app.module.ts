import { Module } from "@nestjs/common";
import { DominioModule } from "@app/dominio";
import { ControllersModule } from "./controllers/controllers.module";
import { AuthModule } from "./auth/auth.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "uploads")
    }),
    DominioModule, ControllersModule, AuthModule,ScheduleModule.forRoot()],
})
export class AppModule {
}
