#include <iostream>
#include <typeinfo>

struct Block
{
    int a = 10;
    int c = 20;
    int d = 30;
};

int main()
{
    int numbers[10];

    printf("Each element in `numbers` array occupies %zu bytes\n", sizeof(numbers[0]));
    printf("Number array allocates %zu total bytes\n\n", sizeof(numbers));

    for (int i = 0; i < 10; i++)
    {
        printf("numbers[%d] is located at address %p\n", i, (void*)(numbers + i));
    }

    return 0;
}
