import { AppConfig } from "../../Config/AppConfigs";
import { AppEnvironments } from "../enums/LogEnvironment";

interface DataLog {
    sourceFile: string,
    info: string,
    data?: object
}

class LogHandler {

    private logEnvironment: AppEnvironments;
    
    constructor(logEnvironment: AppEnvironments) {
        this.logEnvironment = logEnvironment
    }

    public trackEvent({sourceFile , info, data = {}}: DataLog): void {
        
        switch(this.logEnvironment) {
            case AppEnvironments.Development: {                
                this.logDevelopmentEvent({sourceFile, info, data});
                break;
            }
            case AppEnvironments.Production: {
                this.persistPrdEvent('Log PRD');
                break;
            }
            default: { }
        }
    }

    private logDevelopmentEvent = ({sourceFile ,info, data = {}}: DataLog): void => {
        const logDate = new Date();
        const lineSeparator: string = '--------------------------------------------------------------------------\n';
        const logMessage = `${logDate}]\n[${sourceFile}]-[${info}]\nPayload: ${JSON.stringify(data)}`;
        const logFullMessage: string = lineSeparator + logMessage;

        AppConfig.ShowLogDevelopment && console.log(logFullMessage);
    }

    public persistPrdEvent = (eventName: string): void => {
        console.log(`Evento <${eventName}> persistido com sucesso!`);
    }
}

const instance = new LogHandler(AppConfig.Environment);
export {instance as LogHandler };