function assert(x){
    if (!x){
        throw new Error('nie ma X');
    }
}
const {DataTimeHelper} = require('../src/data-time-helper');

describe('test', ()=>{
    it('my assetion test', ()=>{
        // assert(typeof DataTimeHelper === 'function');
        assert( (/^class/).test(DataTimeHelper.toString()));
    });
});

describe('async test', ()=>{
    it ('should be fired', (done) => {
        DataTimeHelper.prototype.handle = function () {
            const endTime = Date.now();
            const diffTime = (endTime - startTime);
            const overTime = (diffTime - 1000);

            // if (overTime >0) {
            //     assert(false, `Time exceded ${overTime}ms`)
            // }
            assert(true);
            done();
        }
        const startTime = Date.now();
        const a = new DataTimeHelper;
        a.time();
    })
})

