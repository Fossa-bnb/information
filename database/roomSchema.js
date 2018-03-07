const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnbInfo');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

const roomSchema = mongoose.Schema({
  id: Number,
  title: String,
  city: String,
  hostLocation: String,
  hostName: String,
  hostDateJoined: String,
  hostWarning: String,
  hostImageUrl: String,
  mapUrl: String,
  roomType: String,
  hostLanguage: String,
  hostResponceTime: String,
  bedType: String,
  bedArea: String,
  essDescrip: String,
  heatDescrip: String,
  airDescrip: String,
  petDescrip: String,
  breakfastDescrip: String,
  roomDescription: String,
  spaceDescription: String,
  guestAccessDescription: String,
  interactionDescription: String,
  otherDescription: String,
  houseRulesDescription: String,
  cancelPolicyDescription: String,
  neighborhoodDescription: String,
  hostDescription: String,
  room: Number,
  bed: Number,
  bath: Number,
  guest: Number,
  hostReviews: Number,
  hostResponceRate: Number,
  essentials: Boolean,
  wifi: Boolean,
  shampoo: Boolean,
  closetDrawers: Boolean,
  tv: Boolean,
  heating: Boolean,
  airConditioning: Boolean,
  breakfast: Boolean,
  deskWorkspace: Boolean,
  petFriendly: Boolean,
  carbonDetector: Boolean,
  firstAid: Boolean,
  fireExtinguisher: Boolean,
  smokeDetector: Boolean,
  hostVarified: Boolean,
});

const Room = mongoose.model('Room', roomSchema);


module.exports = Room;
