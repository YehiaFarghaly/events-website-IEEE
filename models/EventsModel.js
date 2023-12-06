import mongoose from "mongoose";

const EventSchema = mongoose.Schema(                                
    {
        title: {
            type: String,
            required: true
        },

        numberOfAttendees: {
            type: Number,
            required: true
        },

        date: {
            type: Date
        }
    }
);

const EventModel = mongoose.model('Event', EventSchema);

export default EventModel;