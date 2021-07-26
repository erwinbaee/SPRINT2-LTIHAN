for(var y = 1; y < 10; y++) {
    for(var x = 1; x < 10; x++) {
        if(y >= x && y <= 9 - (x-1)) {
            document.write(` * `)
        } else if(y <= x && y >= 9 -(x-1)){
            document.write(` * `)
        }
        else{
            document.write(`=`)
        }
    }
    document.write(`<br>`)

}
