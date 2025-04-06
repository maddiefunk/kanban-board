import express from 'express';
import type { Request, Response } from 'express';
import { Volunteer } from '../models/index.js';

const router = express.Router();

// GET /volunteers - Get all volunteers
router.get('/', async (_req: Request, res: Response) => {
  // TODO: Update code to return all Volunteers
  // DOOOONE 
  try {
    const volunteers = await Volunteer.findAll();
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

// GET /volunteers/:id - Get a volunteer by ID
router.get('/:id', async (req: Request, res: Response) => {
  // TODO: Update code to return one Volunteer based on ID
  // DOOOOONE 
  try {
    const volunteers = await Volunteer.findByPk(req.params.id);
    if (volunteers) {
      res.status(200).json(volunteers);
    } else {
      res.status(404).json({ error: 'Error' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

// POST /volunteers - Create a new volunteer
router.post('/', async (req: Request, res: Response) => {
  // TODO: Update code to create a Volunteer
  // DOOOONNNEEEE
  try {
    console.log(req.body)
    const newVolunteer = await Volunteer.create(req.body);
    res.status(201).json(newVolunteer);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

// PUT /volunteers/:id - Update a volunteer by ID
router.put('/:id', async (req: Request, res: Response) => {
  // TODO: Update code to retrieve one Volunteer based on id and username and return an updated Volunteer object
  try {
    const volunteer = await Volunteer.findByPk(req.params.id);
    if (volunteer) {
      await volunteer.update(req.body);
      res.status(200).json(volunteer);
    } else {
      res.status(404).json({ error: 'Error' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

// DELETE /volunteers/:id - Delete a volunteer by ID
router.delete('/:id', async (req: Request, res: Response) => {
  // TODO: Update code to delete Volunteer based on ID
});

export { router as volunteerRouter };
