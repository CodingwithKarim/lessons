#include <iostream>
#include <fstream>
#include <thread>
#include <mutex>

class Logger {
    private:
        std::mutex fileMutex{};
        std::fstream logFile{};
    
    Logger(){
        logFile.open("log.txt", std::ios::app | std::ios::out);
    }

    public:
        static Logger& getInstance(){
            static Logger logger;

            return logger;
        }

        void logMessage(const std::string& logMessage){
            fileMutex.lock();
            logFile << logMessage << std::endl;
            fileMutex.unlock();
        }
};

class Worker {
    public:
        std::thread startTask(const std::string& logMessage) {
            return std::thread([logMessage] {
                Logger::getInstance().logMessage(logMessage);
            });
        }
};

int main(){
    Worker worker{};

    std::thread thread1 = worker.startTask("Task 1 started...");
    std::thread thread2 = worker.startTask("Task 2 started...");

    thread1.join();
    thread2.join();

    return 0;
}