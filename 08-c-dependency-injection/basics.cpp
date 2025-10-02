#include <iostream>

class Logger {
    public:
        void log(const std::string& message){
            std::cout << "[Log] " << message << std::endl;
        }
};

class Service{
    private:
        Logger& logger;

    public:
        Service(Logger& lgr): logger(lgr) {}

        void sayHello(){
            logger.log("hello");
        }
};

int main(){
    Logger logger{};

    Service svc(logger);

    svc.sayHello();

    return 0;
}