import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { Client, middleware } from '@line/bot-sdk';
import axios from 'axios';

const app = express();
app.use(cors());

// LINE Bot 配置
const lineConfig = {
    channelAccessToken: 'KctiJeEruRQk7ZtR96qbVXWnnlnqNPveXTJudZyvMF3bGS+SPhc3rRO3M5NamL7S86pbbwPCKEIOlhQJHbx/V/LMN/PsNUhjiIm2Ot0JpOZfVwtlMcUmmafNISbIKX2hj94+rrhHlOTmbzJ0sA22OwdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'c58684bb1d65d2e2a8b46de10159e286'
};

const client = new Client(lineConfig);

// 設置LINE Bot的Webhook處理器
app.post('/webhook', middleware(lineConfig), async (req, res) => {
    const events = req.body.events;

    const results = await Promise.all(events.map(async (event) => {
        if (event.type === 'message' && event.message.type === 'text') {
            return handleTextMessage(event);
        } else {
            return Promise.resolve(null);
        }
    }));

    res.json(results);
});

const handleTextMessage = async (event) => {
    const { text } = event.message;
    const { replyToken } = event;

    try {
        const response = await axios.post('http://192.168.1.177:3001/api/v1/workspace/d2b9c0bc-baab-49f7-bda7-6a33b6d6b046/chat',
            {
                message: text,
                mode: 'query'
            },
            {
                headers: {
                    'Authorization': 'Bearer DQN9GYG-2MB4S6C-GQ2Z7K7-ZV21Y1R',
                    'Content-Type': 'application/json'
                }
            }
        );

        const responseData = response.data;
        const replyMessage = responseData.textResponse || '無法獲取回應，請稍後再試。';

        return client.replyMessage(replyToken, {
            type: 'text',
            text: replyMessage
        });
    } catch (error) {
        console.error('Error sending message:', error);
        return client.replyMessage(replyToken, {
            type: 'text',
            text: '抱歉，發生錯誤，請稍後再試。'
        });
    }
};

// 使用express.json()解析JSON請求體
app.use(express.json());

const prisma = new PrismaClient();

// 獲取所有帖子
app.get('/posts', async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        res.json(posts);
    } catch (error) {
        res.status(500).send("Error retrieving posts");
    }
});

// 根據ID獲取單個帖子
app.get('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (post) {
            res.json(post);
        } else {
            res.status(404).send("Post not found");
        }
    } catch (error) {
        res.status(500).send("Error retrieving post");
    }
});

// 獲取最新的四篇帖子
app.get('/newFour', async (req, res) => {
    try {
        const newFour = await prisma.post.findMany({
            orderBy: {
                date: 'desc'
            },
            take: 4
        });
        res.json(newFour);
    } catch (error) {
        res.status(500).send("Error retrieving posts");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
