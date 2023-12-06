import EventModel from "../models/EventsModel.js";

export const getEvents = async (req, res) => {
    let events = await EventModel.find();
    events = getNewEvents(events);
    res.status(200).json({ events });
}

const getNewEvents = (events) => {
    const today = new Date();
    events = events.filter(event => event.date > today);
}

export const addEvent = async (req, res) => {
    try {
        const { event } = req.body;
        const addedEvent = new EventModel(event);
        await addedEvent.save();
        res.status(200).json(addedEvent);
    } catch (err) {
        res.status(500).json({ message: 'server error' });
    }
}

export const getOneEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await EventModel.findById(id);
        console.log('event = ', event);

        if (!event) {
            res.status(404).json({ message: 'no event found with this id' })
        }
        else res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEvent = await EventModel.findByIdAndDelete(id);
        if (deletedEvent) {
            res.status(200).json({ message: 'Deleted Successfully' });
        } else {
            res.status(404).json({ message: 'no event with this id' });
        }
    } catch (err) {
        res.status(500).json({ message: 'server error' });
    }
}

export const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { numberOfAttendees } = req.body;
        const event = await EventModel.findById(id);
        if (event) {
            event.numberOfAttendees = numberOfAttendees;
            event.save();
            res.status(200).json({ event });
        } else {
            res.status(404).json({ message: 'no event with this id' });
        }
    } catch (err) {
        res.status(500).json({ message: 'server error' });
    }
}