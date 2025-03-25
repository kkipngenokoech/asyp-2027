@php
    $deals = [
        [
            'image' => 'deal-1.webp',
            'title' => 'Handmade Wool Rugs',
            'description' => 'Lowest Prices Ever',
            'sizes' => [],
            'id' => 1,
        ],
        [
            'image' => 'deal-2.webp',
            'title' => 'Living Room Rugs',
            'description' => '50 To 70% Off',
            'sizes' => ['Under $300', '5x8', '7x10', '8x11'],
            'id' => 2,
        ],
        [
            'image' => 'deal-3.webp',
            'title' => 'Dining Room Rugs',
            'description' => '50 To 70% Off',
            'sizes' => ['5x8', '7x10', '8x11'],
            'id' => 3,
        ],
        [
            'image' => 'deal-4.webp',
            'title' => 'Discontinued',
            'description' => 'High Quality Machine-Made Rugs',
            'sizes' => ['3x5', '4x6', '5x8', '7x10', '8x11'],
            'id' => 4,
        ],
        [
            'image' => 'deal-5.webp',
            'title' => 'Best Sellers',
            'description' => 'High Quality Machine-Made Rugs',
            'sizes' => ['3x5', '4x6', '5x8', '7x10', '8x11'],
            'id' => 5,
        ],
        [
            'image' => 'deal-6.webp',
            'title' => 'Clearance',
            'description' => 'High Quality Machine-Made Rugs',
            'sizes' => ['3x5', '4x6', '5x8', '7x10', '8x11'],
            'id' => 6,
        ],
        [
            'image' => 'deal-7.webp',
            'title' => 'High Quality Hallway Runners',
            'description' => '',
            'sizes' => ['Machine-Made', 'Hand-Made'],
            'id' => 7,
        ],
    ];
@endphp
<div class="overflow-hidden bg-gradient-to-b from-white to-gray-50 py-8">
    <div class="container mx-auto mb-8 text-center">
        <span class="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
            Featured Collection
        </span>
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Explore Our Collection</h2>
        <p class="text-gray-600 max-w-xl mx-auto">
            Discover our handpicked selection of premium rugs, each telling its own unique story
        </p>
    </div>

    <div class="relative">
        <!-- Speed Control -->
        {{-- <div class="absolute top-0 right-4 z-10 flex items-center gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-lg">
            <button @click="decreaseSpeed" class="text-red-700 hover:text-red-900">
                <i class="fas fa-minus-circle"></i>
            </button>
            <span class="text-sm font-medium text-gray-700">Scroll Speed</span>
            <button @click="increaseSpeed" class="text-red-700 hover:text-red-900">
                <i class="fas fa-plus-circle"></i>
            </button>
        </div> --}}

        <!-- Infinite Scroll Container -->
        <div class="scroll-container" x-data="infiniteScroll()" x-init="init()">
            <div class="scroll-content" :style="'--scroll-speed: ' + speed + 's'">
                @foreach ($deals as $deal)
                    <div class="product-card">
                        <div class="relative group bg-white rounded-lg shadow-lg overflow-hidden">
                            <!-- Badge -->
                            @if ($deal['image'])
                                <div class="absolute top-2 right-2 z-10">
                                    <span class="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                                        25% Off
                                    </span>
                                </div>
                            @endif

                            <!-- Image -->
                            <div class="relative h-48 overflow-hidden">
                                <img src="{{ asset('images/' . $deal['image']) }}" alt="{{ $deal['title'] }}"
                                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300">
                            </div>

                            <!-- Content -->
                            <div class="p-4">
                                <div class="flex justify-between gap-3">

                                    <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ $deal['title'] }}</h3>
                                    {{-- Price --}}
                                    <span class="text-red-700 font-semibold text-lg">
                                        ${{ rand(100, 500) }}
                                    </span>
                                </div>
                                <div class="flex gap-2 flex-wrap mb-3">
                                    @foreach ($deal['sizes'] as $size)
                                        <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                            {{ $size }}
                                        </span>
                                    @endforeach
                                </div>
                                <button
                                    class="w-full bg-gradient-to-r from-gray-600 to-red-700 hover:from-gray-700 hover:to-red-800 text-white py-2 rounded-md hover:bg-red-800 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <style>
        .scroll-container {
            position: relative;
            width: 100%;
            overflow: hidden;
            mask-image: linear-gradient(to right,
                    transparent,
                    black 5%,
                    black 95%,
                    transparent);
            -webkit-mask-image: linear-gradient(to right,
                    transparent,
                    black 5%,
                    black 95%,
                    transparent);
        }

        .scroll-content {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            animation: scroll var(--scroll-speed) linear infinite;
            width: max-content;
        }

        .product-card {
            flex: 0 0 300px;
            transition: transform 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
        }

        @keyframes scroll {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(calc(-50% - 0.5rem));
            }
        }
    </style>
    <script>
        function infiniteScroll() {
            return {
                speed: 60,
                init() {
                    this.cloneItems();
                },
                cloneItems() {
                    const container = document.querySelector('.scroll-content');
                    const items = container.children;
                    const itemsToClone = Array.from(items);

                    itemsToClone.forEach(item => {
                        const clone = item.cloneNode(true);
                        container.appendChild(clone);
                    });
                },
                decreaseSpeed() {
                    this.speed = Math.min(60, this.speed + 5);
                    this.updateSpeed();
                },
                increaseSpeed() {
                    this.speed = Math.max(10, this.speed - 5);
                    this.updateSpeed();
                },
                updateSpeed() {
                    document.querySelector('.scroll-content').style.setProperty('--scroll-speed', `${this.speed}s`);
                }
            }
        }
    </script>

</div>
