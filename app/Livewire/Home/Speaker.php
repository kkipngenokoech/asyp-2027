<?php

namespace App\Livewire\Home;

use Livewire\Component;

class Speaker extends Component
{
    public $speakers = [
        [
            'name' => 'Tom Couglin',
            'description' => 'President, Coughlin Associates, Former IEEE president',
            'image' => 'images/tomcouglin.jpeg',
            'social' => [
                'twitter' => null,
                'linkedin' => null,
                'github' => null,
            ],
        ],
        [
            'name' => 'Sampathkumar Veeraraghavan',
            'description' => '2023 IEEE HKN president',
            'image' => 'images/sampath_veeraraghavan.jpeg',
            'social' => [
                'twitter' => null,
                'linkedin' => null,
                'github' => null,
            ],
        ],
        [
            'name' => 'Prof Joao Barros',
            'description' => 'Associate Director and Research Professor, CMU-Africa, Courtesy Appointment, Electrical and Computer Engineering, Carnegie Mellon University',
            'image' => 'images/jbarros.png',
            'social' => [
                'twitter' => null,
                'linkedin' => null,
                'github' => null,
            ],
        ],
        [
            'name' => 'Prof Assane Gueye',
            'description' => 'Associate Teaching Professor, CMU-Africa, Co-director, CyLab-Africa, Co-director, the Upanzi Network, Ph.D. in electrical engineering and computer sciences, UC Berkeley in March 2011',
            'image' => 'images/assaneg.png',
            'social' => [
                'twitter' => null,
                'linkedin' => null,
                'github' => null,
            ],
        ],
        [
            'name' => 'Prof Moise Busogi',
            'description' => 'Assistant Teaching Professor, CMU-Africa. Ph.D. in system design and control engineering at Ulsan Institute of Science and Technology (UNIST)',
            'image' => 'images/mbusogi.png',
            'social' => [
                'twitter' => null,
                'linkedin' => null,
                'github' => null,
            ],
        ],
    ];

    public function render()
    {
        return view('livewire.home.speakers', [
            'speakers' => $this->speakers
        ]);
    }
}
