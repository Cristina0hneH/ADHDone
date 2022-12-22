const { default: mongoose } = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
      },
    
    frequency:{
        type: Date,
        required: true,
                /*I set the default date for now so we can calculate the frequency based on the time difference between the current date and the scheduled date (const currentDate = new Date();
                const frequencyInDays = (task.frequency - currentDate) / (1000 * 60 * 60 * 24);*/
            default: Date.now()
    }
  
})
const Task = model("Task", taskSchema)

module.exports = {
    Task,
}
