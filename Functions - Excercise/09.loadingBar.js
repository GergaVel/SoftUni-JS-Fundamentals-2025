function loadingBar(progress){

    let bar = createBar(progress);

        if (progress < 100){
        console.log(`${progress}% ${bar}`);
        console.log('Still loading...');       
    } else {        
        console.log('100% Complete!');  
        console.log(`${bar}`);
    }

    function createBar(p){
        let filled = p / 10; // 30 / 10 = %%% 
        return "[" + "%".repeat(filled) + ".".repeat(10-filled) + "]"; // the bar has 10 spots to be filled in 10-filled shows how many . we need
    }

}

loadingBar(30);