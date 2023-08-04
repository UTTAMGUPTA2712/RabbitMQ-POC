const { default: mongoose } = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    outcome: {
      type: [String],
      default:[]
    },
    link: {
      type: String,
      default:""
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model(process.env.TASK_SCHEMA,TaskSchema);
