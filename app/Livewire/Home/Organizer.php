<?php

namespace App\Livewire\Home;

use Livewire\Component;

class Organizer extends Component
{
    public $organizers = [
        [
            'name' => 'Dr. Sarah Chen',
            'role' => 'Conference Chair',
            'description' => 'Professor of Computer Science at Stanford. Specializes in AI ethics.',
            'image' => '#',
            'social' => [
                'twitter' => '#',
                'linkedin' => '#',
            ],
        ],
        [
            'name' => 'Prof. Javier Rodriguez',
            'role' => 'Program Director',
            'description' => 'Lead researcher at MIT Media Lab focusing on computational linguistics.',
            'image' => '#',
            'social' => [
                'linkedin' => '#',
            ],
        ],
        [
            'name' => 'Phanuel Ndikumana',
            'role' => 'Web Master',
            'description' => 'A polyglot, seasoned Web and Software Engineer with over 5 years of experience building web, desktop, and mobile applications',
            'image' => 'images/Phanuel-Ndikumana-web-master.png',
            'social' => [
                'linkedin' => 'https://www.linkedin.com/in/phanuel-ndikumana-a550a6219/',
            ],
        ],
        [
            'name' => 'Prof. Michael Wong',
            'role' => 'Technical Chair',
            'description' => 'Pioneer in quantum computing applications at ETH Zurich.',
            'image' => '#',
            'social' => [
                'github' => '#',
            ],
        ],
        [
            'name' => 'Dr. Elena Petrova',
            'role' => 'Sponsorship Chair',
            'description' => 'Expert in industry-academia partnerships at University of Tokyo.',
            'image' => '#',
            'social' => [
                'linkedin' => '#',
            ],
        ],
        [
            'name' => 'Dr. Kwame Okafor',
            'role' => 'Community Outreach',
            'description' => 'Advocate for open science and global research collaboration.',
            'image' => '#',
            'social' => [
                'twitter' => '#',
            ],
        ],
    ];

    public function render()
    {
        return view('livewire.home.organizers');
    }
}
