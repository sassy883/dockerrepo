const express = require('express');
const app = express();

app.get("/", (req, res) => {
        res.json([{
            id: 1,
            name: "madiha",
            age: 22
        },
        {
            id: 2,
            name: "shazia",
            age: 24
        },
        {
            id: 3,
            name: "abha",
            age: 23
        },
        {
            id: 4,
            name: "umme",
            age: 24
        },
    ]);

    });

app.listen(5500, () => {
    console.log("docker app");
});
