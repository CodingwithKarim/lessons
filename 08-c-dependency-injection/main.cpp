#include <iostream>

class Database {
    public:
        bool findUser(const std::string& user){
            return user == "Jerry Rice";
        }
        
        Database(const Database& database) = delete;
        Database& operator = (const Database& database) = delete;
};

class Logger {
    public:
        void log(const std::string& message){
            std::cout << "[LOG] " << message << std::endl;
        }

        Logger(const Logger& logger) = delete;
        Logger& operator = (const Logger& logger) = delete;
};

class AuthenticationService {
    private:
        Logger& logger;
        Database& database;

    public:
        AuthenticationService(Database& db, Logger& lgr) : logger(lgr), database(db) {}

        bool Authenticate(const std::string& user){
            logger.log("Authentication Started");

            bool result = database.findUser(user);

            logger.log("Authentication Ended");

            return result;
        }
};

int main(){
    Database database{};

    Logger logger{};

    AuthenticationService authService(database, logger);

    bool result = authService.Authenticate("Jerry Lewis");
    
    std::cout << result;

    return 0;
}