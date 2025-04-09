<?php

namespace App\Livewire\Home;

use Livewire\Component;

class Organizer extends Component
{
    public $organizers = [

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
       
        
    ];
    

    public function render()
    {
        return view('livewire.home.organizers');
    }
}
