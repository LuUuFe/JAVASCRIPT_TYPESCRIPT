function fatorial(n) {
    let fatorial = 1
    while (n > 1) {
        fatorial *= n
        n--
    }
    return fatorial
}