#include <iostream>
#include <thread>
#include <mutex>

// Declare variable in global program space
int counter = 0;

// Declare mutuex in global program space
std::mutex mux{};

void incrementCounter(){
    // Iterate 10000 times
    for (int i = 0; i < 10000; i++){
        mux.lock(); // only one thread can do so at a time
        counter++;
        mux.unlock(); // unlock mutex so other threads can access lock and hit line 15
    }
}

int main(){
    // Init two threads that both execute incrementCounter
    std::thread thread1(incrementCounter);
    std::thread thread2(incrementCounter);

    // Force main thread to wait for threads to finish before executing on its own
    thread1.join();
    thread2.join();

    std::cout << counter << std::endl;

    return 0;
}