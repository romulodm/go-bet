import { Module } from "@nestjs/common";
import { AppConfigService } from "./app-config.service";
import { ConfigModule } from "@nestjs/config";
import * as Joi from 'joi';
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                MAIL_HOST: Joi.string().required(),
                MAIL_PORT: Joi.number().default(587),
                MAIL_USER: Joi.string().required(),
                MAIL_PASS: Joi.string().required(),
            })
        })
    ],
    providers: [AppConfigService]
})
export class AppConfigModule {}