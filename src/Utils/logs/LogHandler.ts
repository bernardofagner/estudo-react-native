import { AppConfig } from "../../Config/AppConfigs";

export enum LogEnvironment {
    Development = 'Development',
    Production = 'Production'
}

interface DataLog {
    sourceFile: string,
    info: string,
    data?: object
}

class LogHandler {

    private logEnvironment: LogEnvironment;
    
    constructor(logEnvironment: LogEnvironment) {
        this.logEnvironment = logEnvironment
    }

    public trackEvent({sourceFile ,info, data = {}}: DataLog): void {

        if (this.logEnvironment === LogEnvironment.Development) {
            const logDate = new Date();
            console.log(`${logDate} \n${sourceFile} - ${info}\n${JSON.stringify(data)}`);
        }
    }
}

const instance = new LogHandler(AppConfig.LogConfig.environment);
export {instance as LogHandler };