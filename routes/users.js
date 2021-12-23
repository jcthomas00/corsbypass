import express from 'express';
import { createRequire } from 'module';
import fetch from "node-fetch";

const require = createRequire(import.meta.url);

const router = express.Router();
let suffixRecord = '';

router.get('/', (req, res) => {
    res.send("Only POST requests can be made.");
})

router.post('/', (req, res) => {
    //get input and return empty string if nothing was sent
    const userEntry = req.body.link ? req.body.link.toLowerCase() : '';
    if (userEntry === '') {
        res.send(req.body);
    }
    else {
        try{
            fetch(userEntry)
            .then(response => {
                return response.json();
            })
            .then(data => {
                res.send(data)
            });
        }catch(e){console.log(e)}
    }
})

export default router;