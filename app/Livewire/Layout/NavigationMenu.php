<?php

namespace App\Livewire\Layout;

use Livewire\Component;

class NavigationMenu extends Component
{
    public $showMenu = false; // Controls mobile menu visibility

    public function toggleMenu()
    {
        $this->showMenu = !$this->showMenu;
    }

    public function render()
    {
        return view('livewire.layout.navigation-menu');
    }
}

