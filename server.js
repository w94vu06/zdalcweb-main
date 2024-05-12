import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON in the request body

const prisma = new PrismaClient();

app.get('/posts', async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        res.json(posts);
    } catch (error) {
        res.status(500).send("Error retrieving posts");
    }
});

app.get('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(post);
});

app.get('/newFour', async (req, res) => {
    const newFour = await prisma.post.findMany({
        orderBy: {
            date: 'desc'
        },
        take: 4
    });
    res.json(newFour);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});