#include <iostream>

int main(){
    int numbers[5] = {1,2,3,4,5};

    printf("Array starts at address %p\n", (void*)numbers); // First element lives here

    printf("Second element lives at address %p\n", (void*)(numbers + 1));

    printf("Third element lives at address %p\n", (void*)(numbers + 2));

    return 0;
}