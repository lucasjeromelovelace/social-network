const { Schema, Types } = require('mongoose');
const {date_format} = require('../utils/helpers.js')

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: Timestamp=>date_format(Timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
    _id: false,
  }
);

module.exports = reactionSchema;
