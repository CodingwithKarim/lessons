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
    // Plug in different types
    Block array[10];

    // Check how much memory is being allocated per array slot
    printf("Each element with type %s in `numbers` array occupies %zu bytes\n", typeid(array[0]).name(), sizeof(array[0]));

    // Check how much total memory array has allocated for itself
    printf("Array allocated %zu total bytes\n\n", sizeof(array));

    for (int i = 0; i < 10; i++)
    {
        printf("array[%d] is located at address %p\n", i, (void*)(array + i));
    }

    return 0;
}
