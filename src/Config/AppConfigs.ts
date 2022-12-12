import { AppEnvironments } from "../Utils/enums/LogEnvironment";

class AppConfig {
    static Environment = AppEnvironments.Development;
    static ShowLogDevelopment = true;
}

export { AppConfig };