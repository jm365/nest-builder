import mongoose from 'mongoose';
const UserSchema = mongoose.Schema({
  id: Number,
  name: String,
});

const User = mongoose.model('User', UserSchema);

User.find({}, (err, doc) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(doc);
});
