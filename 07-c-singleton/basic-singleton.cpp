#include <iostream>

class SingletonExample {
    private:
        SingletonExample(){}

        static SingletonExample* instance;

    public:
        static SingletonExample* getInstance(){
            return instance;
        }

        void sayHello(){
            std::cout << "Hello World!" << std::endl;
        }

        static void destroy(){
            delete instance;
            instance = nullptr;
        }
};

SingletonExample* SingletonExample::instance = new SingletonExample();

int main(){
    SingletonExample::getInstance()->sayHello();

    return 0;
}