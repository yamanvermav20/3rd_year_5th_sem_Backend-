const express = require("express");
const app = express();
let { Queue }  = require('bullmq');
app.use(express.json());
app.use(express.urlencoded({extended : true}));

let prediction_queue = new Queue("predict", {
    connection : {
        host: 'localhost',
        port: 6379,
    }
})

//producer
async function addJobs(){
    let job = await prediction_queue.add('myJobname', { foo : 'bar'});
    // await prediction_queue.add('myJobName', { qux: 'baz'});
    return job;
}


addJobs()
.then((job) => {
    console.log(job.id);
})

app.listen(4334, ()=>{
    console.log("server is started right now");
});
