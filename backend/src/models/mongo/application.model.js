import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    resumePath: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ['submitted', 'reviewing', 'shortlisted', 'rejected', 'hired'],
      default: 'submitted',
    },

    aiMatchScore: {
      type: Number,
      default: null,
    },

    aiFeedback: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model('Application', applicationSchema);

export default Application;