import mongoose from "mongoose";

const TicketsSchema = mongoose.Schema(                                
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

        eventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
            required: true
        },

        price: {
            type: Number,
            required: true
        }
    }
);

const TicketsModel = mongoose.model('Ticket', TicketsSchema);

export default TicketsModel;