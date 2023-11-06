const { Schema, model } = require('mongoose');
const {date_format} = require('../utils/helpers.js')
const reactionSchema = require('./Reaction.js')
// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,

    },
    createdat: {
      type: Date,
      default: Date.now,
      get: Timestamp=>date_format(Timestamp),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function(){
  return this.reactions.length
})
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
