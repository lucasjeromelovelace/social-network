const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],

    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref:"thought"
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref:"user"
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
userSchema.virtual("friendCount").get(function(){
  return this.friends.length
})
const User = model('user', userSchema);

module.exports = User;
