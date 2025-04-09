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
            'image' => 'images/dr-sarah-chen.jpg',
            'social' => [
                'twitter' => '#',
                'linkedin' => '#',
            ],
        ],
        [
            'name' => 'Prof. Javier Rodriguez',
            'role' => 'Program Director',
            'description' => 'Lead researcher at MIT Media Lab focusing on computational linguistics.',
            'image' => 'images/prof-javier-rodriguez.jpg',
            'social' => [
                'linkedin' => '#',
                'twitter' => null,
                'github' => null,
            ],
        ],
        [
            'name' => 'Phanuel Ndikumana',
            'role' => 'Web Master',
            'description' => 'A polyglot, seasoned Web and Software Engineer with over 5 years of experience building web, desktop, and mobile applications.',
            'image' => 'images/Phanuel-Ndikumana-web-master.png',
            'social' => [
                'linkedin' => 'https://www.linkedin.com/in/phanuel-ndikumana-a550a6219/',
                'twitter' => null,
                'github' => null,
            ],
        ],
        [
            'name' => 'Prof. Michael Wong',
            'role' => 'Technical Chair',
            'description' => 'Pioneer in quantum computing applications at ETH Zurich.',
            'image' => 'images/prof-michael-wong.jpg',
            'social' => [
                'github' => '#',
                'twitter' => null,
                'linkedin' => null,
            ],
        ],
        [
            'name' => 'Dr. Elena Petrova',
            'role' => 'Sponsorship Chair',
            'description' => 'Expert in industry-academia partnerships at University of Tokyo.',
            'image' => 'images/dr-elena-petrova.jpg',
            'social' => [
                'linkedin' => '#',
                'twitter' => null,
                'github' => null,
            ],
        ],
        [
            'name' => 'Dr. Kwame Okafor',
            'role' => 'Community Outreach',
            'description' => 'Advocate for open science and global research collaboration.',
            'image' => 'images/dr-kwame-okafor.jpg',
            'social' => [
                'twitter' => '#',
                'linkedin' => null,
                'github' => null,
            ],
        ],
        [
            'name' => 'Tom Couglin',
            'role' => null,
            'description' => null,
            'image' => 'images/tomcouglin.jpeg',
            'social' => [
                'twitter' => null,
                'linkedin' => null,
                'github' => null,
            ],
            'bio' => 'President, Coughlin Associates, Former IEEE president (invited Guest)',
        ],
        [
            'name' => 'Sampathkumar Veeraraghavan',
            'role' => null,
            'description' => null,
            'image' => 'images/sampath_veeraraghavan.jpeg',
            'social' => [
                'twitter' => null,
                'linkedin' => null,
                'github' => null,
            ],
            'bio' => '2023 IEEE HKN president',
        ],
        [
            'name' => 'Prof Joao Barros',
            'role' => null,
            'description' => null,
            'image' => 'images/jbarros.png',
            'social' => [
                'twitter' => null,
                'linkedin' => null,
                'github' => null,
            ],
            'bio' => 'Associate Director and Research Professor, CMU-Africa, Courtesy Appointment, Electrical and Computer Engineering, Carnegie Mellon University',
        ],
        [
            'name' => 'Prof Assane Gueye',
            'role' => null,
            'description' => null,
            'image' => 'images/assaneg.png',
            'social' => [
                'twitter' => null,
                'linkedin' => null,
                'github' => null,
            ],
            'bio' => 'Associate Teaching Professor, CMU-Africa, Co-director, CyLab-Africa, Co-director, the Upanzi Network, Ph.D. in electrical engineering and computer sciences, UC Berkeley in March 2011',
        ],
        [
            'name' => 'Prof Moise Busogi',
            'role' => null,
            'description' => null,
            'image' => 'images/mbusogi.png',
            'social' => [
                'twitter' => null,
                'linkedin' => null,
                'github' => null,
            ],
            'bio' => 'Assistant Teaching Professor, CMU-Africa. Ph.D. in system design and control engineering at Ulsan Institute of Science and Technology (UNIST)',
        ],
    ];
    

    public function render()
    {
        return view('livewire.home.organizers');
    }
}
