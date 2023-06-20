'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Books = require('./models/books.js');

// let bookImg = require('./imgs/hp.png')

async function seed() {

    await Books.create({
        title: 'Harry Potter and the Sorcerer\'s Stone',
        description: 'The first novel in the Harry Potter series and Rowling\'s debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.',
        status: false,
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FHarry-Potter-Sorcerers-Stone-Book%2Fdp%2F0545582881&psig=AOvVaw2S2iY1opdp4qHLYOPWVsuy&ust=1687384301002000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIib-cDq0v8CFQAAAAAdAAAAABAM'
    });
    console.log('Harry Potter and the Sorcerer\'s Stone was created');

    await Books.create({
        title: 'The Perks of Being a Wallflower',
        description: 'The Perks of Being a Wallflower is a 1999 book by Stephen Chbosky. It follows Charlie during his freshman year of high school as he makes and loses friends, experiments with drugs and his sexuality, and comes to grips with his past.',
        status: false,
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Perks_of_Being_a_Wallflower_%2528film%2529&psig=AOvVaw2bncdIHC9_CAzeIiDh81hm&ust=1687384347015000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMC04Nbq0v8CFQAAAAAdAAAAABAE'
    });
    console.log('The Perks of Being a Wallflower was created');

    await Books.create({
        title: 'The Absolutely True Diary of a Part-Time Indian',
        description: 'The Absolutely True Diary of a Part-Time Indian is a first-person narrative novel by Sherman Alexie, from the perspective of a Native American teenager, Arnold Spirit Jr., also known as "Junior," a 14-year-old promising cartoonist.',
        status: true,
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Absolutely_True_Diary_of_a_Part-Time_Indian&psig=AOvVaw2HsCwqgaBmLp21e7IFTNzc&ust=1687384362715000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCcnN7q0v8CFQAAAAAdAAAAABAF'
    });
    console.log('The Absolutely True Diary of a Part-Time Indian was created');

    mongoose.disconnect();
}

seed(); 