const myTime = 1000;

class DataTimeHelper {
    constructor() {
    }

    time() {
        this.timeout = setTimeout( this.handle, myTime);
    }
    handle(){
        console.log('ok')
    }
    end(){
        clearTimeout(this.timeout);
    }
}

module.exports={
    DataTimeHelper
}
