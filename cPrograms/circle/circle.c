#include <stdio.h>
#include <math.h>

int main() {
    int radius = 10; // Radius of the circle
    char character = '*'; // Character to draw the circle

    for (int y = -radius; y <= radius; y++) {
        for (int x = -radius; x <= radius; x++) {
            // Use the equation of a circle: x^2 + y^2 = r^2
            if ((x * x + y * y) <= (radius * radius)) {
                printf("%c", character);
            } else {
                printf(" ");
            }
        }
        printf("\n");
    }

    return 0;
}