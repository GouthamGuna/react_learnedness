// routes/itemRoutes.js
import { Router } from 'express';
import Item from '../models/Item.js';
const router = Router();

// Create an Item
router.post('/items', async (req, res) => {
    const item = new Item(req.body);
    try {
        const savedItem = await item.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read all Items
router.get('/items', async (req, res) => {
    try {
        const items = await find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Read a single Item by ID
router.get('/items/:id', async (req, res) => {
    try {
        const item = await findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update an Item
router.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an Item
router.delete('/items/:id', async (req, res) => {
    try {
        const deletedItem = await findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;

/*
-------------------TESTING API--------------------------

Create an item: POST to /api/items

Read all items: GET /api/items

Read a single item by ID: GET /api/items/:id

Update an item by ID: PUT to /api/items/:id

Delete an item by ID: DELETE /api/items/:id

*/