<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                'rating' => 4.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'Oppenheimer',
                'slug' => 'oppenheimer',
                'category' => 'Biography, Drama',
                'video_url' => 'https://youtu.be/bK6ldnjE3Y0?si=1sItVkDAUP9pzByP',
                'thumbnail' => 'https://image.tmdb.org/t/p/w500//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
                'rating' => 4.5,
                'is_featured' => 1,
            ],
            [
                'name' => 'Dune: Part Two',
                'slug' => 'dune-part-two',
                'category' => 'Adventure, Drama, Sci-Fi',
                'video_url' => 'https://youtu.be/Way9Dexny3w?si=_G0X0RAetvoDUuRz',
                'thumbnail' => 'https://image.tmdb.org/t/p/w500//1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
                'rating' => 4.7,
                'is_featured' => 1,
            ],
            [
                'name' => 'Avatar: The Way of Water',
                'slug' => 'avatar-the-way-of-water',
                'category' => 'Science Fiction',
                'video_url' => 'https://www.youtube.com/watch?v=d9MyW72ELq0',
                'thumbnail' => 'https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-large.jpg',
                'rating' => 4.5,
                'is_featured' => 1,
            ],
            [
                'name' => 'Jurassic World: Dominion',
                'slug' => 'jurassic-world-dominion',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=fb5ELWi-ekk',
                'thumbnail' => 'https://pics.filmaffinity.com/jurassic_world_dominion-228831206-large.jpg',
                'rating' => 3.9,
                'is_featured' => 0,
            ],
            [
                'name' => 'Doctor Strange in the Multiverse of Madness',
                'slug' => 'doctor-strange-in-the-multiverse-of-madness',
                'category' => 'Fantasy',
                'video_url' => 'https://www.youtube.com/watch?v=aWzlQ2N6qqg',
                'thumbnail' => 'https://pics.filmaffinity.com/doctor_strange_in_the_multiverse_of_madness-610981386-large.jpg',
                'rating' => 4.2,
                'is_featured' => 1,
            ],
            [
                'name' => 'Black Panther: Wakanda Forever',
                'slug' => 'black-panther-wakanda-forever',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=_Z3QKkl1WyM',
                'thumbnail' => 'https://pics.filmaffinity.com/black_panther_wakanda_forever-869269163-large.jpg',
                'rating' => 4.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'Mission: Impossible - Dead Reckoning - Part One',
                'slug' => 'mission-impossible-dead-reckoning-part-one',
                'category' => 'Action',
                'video_url' => 'https://youtu.be/avz06PDqDbM?si=vR2087kF3mXlm53B',
                'thumbnail' => 'https://pics.filmaffinity.com/mission_impossible_dead_reckoning_part_one-902615661-large.jpg',
                'rating' => 4.1,
                'is_featured' => 1,
            ],
            [
                'name' => 'Fantastic Beasts: The Secrets of Dumbledore',
                'slug' => 'fantastic-beasts-the-secrets-of-dumbledore',
                'category' => 'Fantasy',
                'video_url' => 'https://www.youtube.com/watch?v=Y9dr2zw-TXQ',
                'thumbnail' => 'https://pics.filmaffinity.com/fantastic_beasts_the_secrets_of_dumbledore-224990969-large.jpg',
                'rating' => 3.8,
                'is_featured' => 0,
            ]
        ];
        Movie::insert($movies);
    }
}
