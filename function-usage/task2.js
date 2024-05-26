function x(num) {
    console.log(num);
    if (num >= 0) {
        x(num-1);
    }
}

x(5);
