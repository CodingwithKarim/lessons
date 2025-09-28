#include <fstream>
#include <iostream>
#include <string>

using namespace std;

class Logger {
    private:
        fstream logFile;

        Logger() {
            logFile.open("log.txt", ios::out | ios::app);

            if (!logFile.is_open()){
                cerr << "Could not open log.txt file" << endl;

                exit(1);
            }
        }
        
        void write(const string& mode, const string& message){
            logFile << "[" << mode << "] " << message << endl;
        }

    public:
        static Logger& getInstance(){
            static Logger logger;

            return logger;
        }

        void Debug(const string& message){
            write("DEBUG", message);
        }
        void Info(const string& message){
            write("INFO", message);
        }
        void Error(const string& message){
            write("ERROR", message);
        }
        void Fatal(const string& message){
            write("FATAL", message);

            exit(1);
        }
};

int main(){
    Logger::getInstance().Debug("PROGRAM STARTED");
    Logger::getInstance().Info("PROGRAM STARTED");
    Logger::getInstance().Error("PROGRAM STARTED");

    return 0;
}