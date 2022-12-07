import { AppConfig } from "../../Config/AppConfigs";
import { LogEnvironment } from "../enums/LogEnvironment";

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

        switch(this.logEnvironment) {
            case LogEnvironment.Development: {
                const logDate = new Date();
                console.log(`${logDate}] \n[${sourceFile}]-[${info}]\n${JSON.stringify(data)}`);
            }
            case LogEnvironment.Production: { }
            default: { }
        }
    }
}

const instance = new LogHandler(AppConfig.LogConfig.environment);
export {instance as LogHandler };