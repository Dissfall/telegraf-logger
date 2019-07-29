import { ContextMessageUpdate, Middleware } from 'telegraf';
declare class TelegrafLogger {
    private options;
    constructor(options?: LoggerOptions);
    middleware(): Middleware<ContextMessageUpdate>;
}
interface LoggerOptions {
    log?: Function;
    format?: string;
    contentLength?: number;
}
export default TelegrafLogger;
