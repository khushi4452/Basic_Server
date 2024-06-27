import express from 'express';

const app = express();

const PORT = 5000;

app.use(express.json());

// This is a temporary server
const plants = [
    {
        "id": 7566,
        "name": "Bamboo",
        "category": "indoor",
        "image": "https://m.media-amazon.com/images/I/41QHZP6ZCxL._SX300_SY300_QL70_FMwebp_.jpg",
        "price": "170",
        "description": "Lucky bamboo and beautiful tree"
    }]

app.post("/plant", (req, res) => {
    const { name, category, image, price, description } = req.body;

    if (!name) {
        return res.json({
            success: false,
            data: null,
            message: "name cannot be empty...."

        })
    }


    if (!category) {
        return res.json({
            success: false,
            data: null,
            message: "  category cannot be empty...."

        })
    }


    if (!image) {
        return res.json({
            success: false,
            data: null,
            message: "image cannot be empty...."

        })
    }

    if (!price) {
        return res.json({
            success: false,
            data: null,
            message: "price cannot be empty...."

        })
    }



    if (!discription) {
        return res.json({
            success: false,
            data: null,
            message: "discription cannot be empty...."

        })
    }



    const randomId = Math.floor(Math.random() * 10000);

    const newPlant = {
        id: randomId,
        name: name,
        category: category,
        image: image,
        price: price,
        description: description
    };

    plants.push(newPlant);

    res.json({
        success: true,
        data: newPlant,
        message: "New plant added successfully"
    });
});


app.get("/plants", (req, res) => {


    res.json({
        success: true,
        data: plants,
        message: "All plants fetched successfully"

    })
})




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
