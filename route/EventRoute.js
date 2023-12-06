import { Router } from "express";
import { getEvents, addEvent, getOneEvent, deleteEvent, updateEvent } from "../controller/EventController.js";

const router = Router();

router.get('/', getEvents);

router.post('/', addEvent);

router.get('/:id', getOneEvent);

router.delete('/:id', deleteEvent);

router.patch('/:id', updateEvent);

export default router;