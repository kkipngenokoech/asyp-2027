@php
    $menuItems = [
        'Home' => '/',
        'Scheduler' => '/scheduler',
        'Sessions' => '/sessions',
        'Teams' => '/teams',
        'About' => '/about',
        'Donate' => '/donate',
    ];
@endphp

<div> <!-- Single root element wrapper -->
    <nav x-data="menuToggle" class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <div class="container mx-auto px-4 py-3">
            <div class="flex items-center justify-between">
                <!-- Mobile Menu Toggle - Moved to left side -->
                <div class="md:hidden">
                    <button 
                        @click="showMenu = !showMenu" 
                        class="
                            text-gray-800 
                            focus:outline-none 
                            transition-transform 
                            duration-300 
                            hover:scale-110 
                            active:scale-95
                        "
                        aria-label="Toggle menu"
                    >
                        <svg x-show="!showMenu" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg x-show="showMenu" x-cloak class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <!-- Logo with subtle hover effect - Centered on mobile -->
                <a href="/" class="flex items-center space-x-2 group mx-auto md:mx-0">
                    <svg class="w-10 h-10 text-blue-600 group-hover:rotate-6 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 12l-10-5 10 5 10-5v7l-10 5z"/>
                    </svg>
                    <span class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        IEEE CVSS 2025
                    </span>
                </a>

                <!-- Spacer to balance the layout on mobile -->
                <div class="md:hidden w-8"></div>

                <!-- Desktop Menu - Centered -->
                <div class="hidden md:flex flex-1 justify-center">
                    <ul class="flex space-x-6 text-gray-800 font-medium">
                        @foreach ($menuItems as $label => $url)
                            <li>
                                <a href="{{ $url }}" class="
                                    relative 
                                    py-2 
                                    px-1
                                    group 
                                    {{ $label == 'Donate' ? 'text-red-500 font-semibold' : 'text-gray-700' }}
                                    hover:text-blue-600 
                                    transition-colors 
                                    duration-300
                                    before:absolute 
                                    before:bottom-0 
                                    before:left-0 
                                    before:w-0 
                                    before:h-0.5 
                                    before:bg-blue-600 
                                    before:transition-all 
                                    before:duration-300 
                                    hover:before:w-full
                                ">
                                    {{ $label }}
                                    @if ($label == 'Donate')
                                        <span class="ml-1 animate-pulse text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full">
                                            Support
                                        </span>
                                    @endif
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>

        <!-- Enhanced Mobile Menu -->
        <div 
            x-show="showMenu" 
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 -translate-y-4"
            x-transition:enter-end="opacity-100 translate-y-0"
            x-transition:leave="transition ease-in duration-200"
            x-transition:leave-start="opacity-100 translate-y-0"
            x-transition:leave-end="opacity-0 -translate-y-4"
            x-cloak 
            class="fixed inset-0 bg-white z-40 md:hidden pt-20"
        >
            <div class="container mx-auto px-6 h-full overflow-y-auto">
            <ul class="space-y-4 py-8">
                @foreach ($menuItems as $label => $url)
                <li>
                    <a 
                    href="{{ $url }}" 
                    @click="showMenu = false"
                    class="
                        block 
                        text-2xl 
                        py-4 
                        px-4
                        rounded-lg
                        {{ $label == 'Donate' ? 'bg-red-50 text-red-600 font-semibold' : 'text-gray-800' }}
                        hover:bg-gray-100 
                        transition-all 
                        duration-300
                        flex
                        items-center
                        justify-center
                    "
                    >
                    <span class="relative">
                        {{ $label }}
                        @if ($label == 'Donate')
                        <span class="ml-3 text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full animate-pulse">
                            Support Us
                        </span>
                        @endif
                        <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                    </a>
                </li>
                @endforeach
            </ul>
            <!-- Close button for better UX -->
            <div class="px-4 py-8 text-center">
                <button 
                @click="showMenu = false" 
                class="
                    text-gray-500 
                    hover:text-gray-700 
                    transition-colors 
                    duration-300
                    text-lg
                    font-medium
                    px-6
                    py-2
                    rounded-full
                    border
                    border-gray-200
                    hover:border-gray-300
                "
                >
                Close Menu
                </button>
            </div>
            </div>
        </div>
                <!-- Close button for better UX -->
                {{-- <div class="px-4 py-8 text-center">
                    <button 
                        @click="showMenu = false" 
                        class="
                            text-gray-500 
                            hover:text-gray-700 
                            transition-colors 
                            duration-300
                            text-lg
                            font-medium
                            px-6
                            py-2
                            rounded-full
                            border
                            border-gray-200
                            hover:border-gray-300
                        "
                    >
                        Close Menu
                    </button>
                </div> --}}
            </div>
        </div>
    </nav>

    <script>
        document.addEventListener('alpine:init', () => {
            Alpine.data('menuToggle', () => ({
                showMenu: false,
                init() {
                    // Close mobile menu when clicking outside or on a link
                    window.addEventListener('click', (e) => {
                        if (!e.target.closest('nav') && this.showMenu) {
                            this.showMenu = false;
                        }
                    });
                    
                    // Close menu when window is resized to desktop size
                    window.addEventListener('resize', () => {
                        if (window.innerWidth >= 768) {
                            this.showMenu = false;
                        }
                    });
                }
            }));
        });
    </script>
</div>