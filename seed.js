'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Books = require('./models/books.js');


async function seed() {

    await Books.create({
        title: 'Harry Potter and the Sorcerer\'s Stone',
        description: 'The first novel in the Harry Potter series and Rowling\'s debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.',
        status: false,
        email: 'christiantojot@gmail.com'
    });
    console.log('Harry Potter and the Sorcerer\'s Stone was created');

    await Books.create({
        title: 'The Perks of Being a Wallflower',
        description: 'The Perks of Being a Wallflower is a 1999 book by Stephen Chbosky. It follows Charlie during his freshman year of high school as he makes and loses friends, experiments with drugs and his sexuality, and comes to grips with his past.',
        status: false,
        email: 'christiantojot@gmail.com'
    });
    console.log('The Perks of Being a Wallflower was created');

    await Books.create({
        title: 'The Absolutely True Diary of a Part-Time Indian',
        description: 'The Absolutely True Diary of a Part-Time Indian is a first-person narrative novel by Sherman Alexie, from the perspective of a Native American teenager, Arnold Spirit Jr., also known as "Junior," a 14-year-old promising cartoonist.',
        status: true,
        email: 'christianrheytojot@gmail.com'
    });
    console.log('The Absolutely True Diary of a Part-Time Indian was created');

    mongoose.disconnect();
}

seed(); 