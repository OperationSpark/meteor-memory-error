import SimpleSchema from 'meteor/aldeed:simple-schema';
SimpleSchema.extendOptions(['autoform']);

export const userInfoSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  message: {
    type: String,
    label: "Message",
    max: 1000
  }
});
