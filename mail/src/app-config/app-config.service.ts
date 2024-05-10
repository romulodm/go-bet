import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService {
    constructor(private readonly config: ConfigService) {}

    get mailHost(): string {
        return this.config.get<string>('MAIL_HOST')
    }

    get mailPort(): number {
        return this.config.get<number>('MAIL_PORT')
    }

    get mailUser(): string {
        return this.config.get<string>('MAIL_USER')
    }

    get mailPassword(): string {
        return this.config.get<string>('MAIL_PASS')
    }

}