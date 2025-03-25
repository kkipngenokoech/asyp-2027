<!-- Top Bar -->
@php
    $socialMediaAndLinks = [
        ['name' => 'Facebook', 'icon' => 'fab fa-facebook', 'url' => '#'],
        ['name' => 'Instagram', 'icon' => 'fab fa-instagram', 'url' => '#'],
        ['name' => 'TikTok', 'icon' => 'fab fa-tiktok', 'url' => '#'],
        ['name' => 'Support Local', 'icon' => '', 'url' => '#'],
        ['name' => 'Contact Us', 'icon' => '', 'url' => '#'],
    ];

    $menuItems = [
        'Home' => ['url' => '/'],
        'About' => ['url' => '/about'],
        'Rugs' => ['url' => '/rugs'],
        'Underpads' => ['url' => '/underpads'],
        'Promotions' => ['url' => '/promotions'],
        'Services' => [
            'url' => '#!',
            'submenu' => [
                'Area Rug Cleaning' => '/services/area-rug-cleaning',
                'Rug Repairs' => '/services/rug-repair',
                'Stair Runners' => '/services/stair-runners',
                'Rug Care' => '/services/rug-care',
            ],
        ],
        // 'Rug Care' => ['url' => '/rug-care'],
    ];

@endphp

<div class="w-full" x-data="{ showMenu: false, bannerIndex: 0 }" x-init="setInterval(() => bannerIndex = bannerIndex === 0 ? 1 : 0, 5000)">
    <!-- Top Bar -->
    <div class="bg-black text-white text-sm py-2">
        <div class="container mx-auto px-4 flex flex-wrap justify-between items-center gap-y-2 md:flex-nowrap">
            <!-- Contact Info -->
            <div
                class="flex flex-col md:flex-row md:items-center gap-x-6 gap-y-2 font-bold text-center md:text-left w-full md:w-auto justify-center md:justify-start">
                <a href="tel:(613) 220-6593"
                    class="hover:text-red-400 flex items-center transition-colors justify-center md:justify-start">
                    <i class="fas fa-phone mr-2"></i> (613) 220-6593
                </a>
                <a href="mailto:terry@terryrugs.com"
                    class="hover:text-red-400 flex items-center transition-colors justify-center md:justify-start">
                    <i class="fas fa-envelope mr-2"></i> terry@terryrugs.com
                </a>
            </div>

            <!-- Social Media & Links -->
            <div class="hidden md:flex items-center gap-x-6">
                @foreach ($socialMediaAndLinks as $item)
                    <a href="{{ $item['url'] }}"
                        class="hover:text-red-400 font-semibold transition-colors {{ $item['icon'] ? 'text-xl' : '' }}">
                        @if ($item['icon'])
                            <i class="{{ $item['icon'] }}"></i>
                        @else
                            {{ $item['name'] }}
                        @endif
                    </a>
                @endforeach
            </div>
        </div>
    </div>

    <!-- Main Header -->
    <div class="bg-white border-b relative">
        <div class="mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <!-- Logo -->
                <a href="/" class="flex-shrink-0">
                    <img src="{{ asset('images/terry-logo.png') }}" alt="Terry's Rugs" class="h-12 md:h-16">
                </a>

                <!-- Search Bar -->
                <div class="hidden md:flex flex-1  mx-8">
                    <div class="relative w-full">
                        <input type="text" placeholder="Search for products..."
                            class="w-full pl-4 pr-12 py-2 border-2 border-red-600 rounded focus:outline-none focus:border-red-700">
                        <button class="absolute right-0 top-0 h-full px-4 text-red-600 hover:text-red-700">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>

                <!-- Language & Cart -->
                <div class="hidden md:flex items-center gap-4">
                    <div class="h-full border-l border-gray-200 px-4">
                        <a href="#" class="text-gray-700 font-medium hover:text-red-600">
                            <i class="fas fa-user mr-2"></i>Account
                        </a>
                    </div>
                    <div class="h-full border-l border-gray-200 px-4">
                        <a href="#" class="text-gray-700 font-medium hover:text-red-600">
                            <i class="fas fa-shopping-cart mr-2"></i>Cart
                        </a>
                    </div>
                    <div class="h-full border-l border-gray-200 pl-4">
                        <a href="#" class="px-4 py-2 rounded-full hover:text-white transition-colors">
                            FR
                        </a>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="showMenu = true"
                    class="md:hidden relative z-50 p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                    <div class="w-6 h-6 relative">
                        <span class="absolute w-full h-0.5 bg-current transform transition-all duration-200"
                            :class="showMenu ? 'rotate-45 top-3' : 'top-1'"></span>
                        <span class="absolute w-full h-0.5 bg-current top-3 transition-opacity duration-200"
                            :class="showMenu ? 'opacity-0' : 'opacity-100'"></span>
                        <span class="absolute w-full h-0.5 bg-current transform transition-all duration-200"
                            :class="showMenu ? '-rotate-45 top-3' : 'top-5'"></span>
                    </div>
                </button>
            </div>

            <!-- Main Menu (Desktop) -->
            <nav class="hidden md:block border-t border-gray-200">
                <div class="flex justify-center py-4 font-bold uppercase">
                    <div class="flex">
                        @foreach ($menuItems as $label => $item)
                            <div class="relative group border-r last:border-r-0 border-gray-200">
                                <a href="{{ $item['url'] }}"
                                    class="px-6 text-black hover:text-red-600 transition-colors">
                                    {{ $label }}
                                    @if (isset($item['submenu']))
                                        <i class="fas fa-chevron-down ml-1 text-xs"></i>
                                    @endif
                                </a>
                                @if (isset($item['submenu']))
                                    <div
                                        class="absolute z-[100] hidden group-hover:block bg-white shadow-lg rounded-lg mt-0 pt-4 w-48">
                                        @foreach ($item['submenu'] as $subLabel => $subUrl)
                                            <a href="{{ $subUrl }}"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                                                {{ $subLabel }}
                                            </a>
                                        @endforeach
                                    </div>
                                @endif
                            </div>
                        @endforeach
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div x-show="showMenu" x-transition:enter="transition-opacity duration-300" x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity duration-300"
        x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" @click="showMenu = false"></div>

    <!-- Mobile Menu Panel -->
    <div x-show="showMenu" x-transition:enter="transition transform duration-300"
        x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
        x-transition:leave="transition transform duration-300" x-transition:leave-start="translate-x-0"
        x-transition:leave-end="translate-x-full"
        class="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-lg z-50 md:hidden overflow-y-auto">
        <!-- Mobile Search -->
        <div class="p-4 border-b border-gray-200">
            <div class="relative">
                <input type="text" placeholder="Search products..."
                    class="w-full pl-4 pr-12 py-2 border-2 border-red-600 rounded-full focus:outline-none focus:border-red-700">
                <button class="absolute right-0 top-0 h-full px-4 text-red-600 hover:text-red-700">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <nav class="p-4">
            @foreach ($menuItems as $label => $item)
                <div class="py-2 border-b border-gray-100">
                    <a href="{{ $item['url'] }}" class="block text-lg font-semibold text-gray-800 hover:text-red-600">
                        {{ $label }}
                        @if (isset($item['submenu']))
                            <i class="fas fa-chevron-right float-right mt-1"></i>
                        @endif
                    </a>
                </div>
            @endforeach
        </nav>

        <!-- Mobile Account & Cart -->
        <div class="p-4 bg-gray-50">
            <a href="#" class="block py-2 text-gray-700 hover:text-red-600">
                <i class="fas fa-user mr-2"></i>Account
            </a>
            <a href="#" class="block py-2 text-gray-700 hover:text-red-600">
                <i class="fas fa-shopping-cart mr-2"></i>Cart
            </a>
            <a href="#" class="block py-2">
                FR
                {{-- <img src="{{ asset('images/flag-for-flag-france-svgrepo-com.svg') }}" alt="FR"
                    class="h-6 inline"> --}}
            </a>
        </div>
    </div>

    {{-- <div class="relative w-full bg-red-600 text-white overflow-hidden">
        <div class="container mx-auto relative">
            <!-- Banner Image -->
            <img src="{{ asset('images/ads-banner.png') }}" 
                alt="Special Offer" 
                class="w-full h-[400px] md:h-[500px] object-cover">
    
            <!-- Promotional Messages -->
            <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <div class="relative w-full max-w-2xl">
                    <!-- First Banner Message -->
                    <div class="absolute w-full transition-all duration-500 transform text-lg md:text-2xl font-semibold"
                        :class="bannerIndex === 0 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'">
                        🎉 Special Offer: Get <span class="text-yellow-300">20% off</span> all rugs this weekend!
                    </div>
                    <!-- Second Banner Message -->
                    <div class="absolute w-full transition-all duration-500 transform text-lg md:text-2xl font-semibold"
                        :class="bannerIndex === 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'">
                        🚚 Free shipping on orders over <span class="text-yellow-300">$500!</span>
                    </div>
                </div>
    
                <!-- Shop Now Button -->
                <a href="#" class="mt-8 px-6 py-3 bg-yellow-400 text-red-700 font-bold rounded-lg shadow-lg text-lg transition-transform duration-300 hover:scale-105">
                    🛍️ Shop Now
                </a>
            </div>
        </div>
    </div> --}}    
    
</div>
