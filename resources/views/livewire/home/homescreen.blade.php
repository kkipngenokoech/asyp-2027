<div x-data="{ currentSlide: 0 }" class="relative w-full h-[90vh] max-h-screen overflow-hidden">
    @php
    $slides = [
        [
            'image' => 'images/cmu-image1.jpg',
            'title' => 'CMU Africa Computer Vision Summer School',
            'subtitle' => 'Advancing AI Research in Africa',
            'cta' => 'Apply Now',
            'link' => '/apply'
        ],
        [
            'image' => 'images/cmu-image2.jpg', 
            'title' => 'Hands-on Learning Experience',
            'subtitle' => 'Master cutting-edge computer vision',
            'cta' => 'View Program',
            'link' => '/program'
        ]
    ];
    @endphp

    <!-- Slides -->
    @foreach($slides as $i => $slide)
    <div x-show="currentSlide === {{ $i }}"
         x-transition.opacity.duration.500ms
         class="absolute inset-0 w-full h-full">
         
        <!-- Background with overlay -->
        <div class="absolute inset-0 bg-black/40"></div>
        <img src="{{ asset($slide['image']) }}" 
             alt="{{ $slide['title'] }}"
             class="w-full h-full object-cover object-center"
             loading="lazy">
        
        <!-- Content -->
        <div class="absolute inset-0 flex items-center justify-center text-center px-6">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                    {{ $slide['title'] }}
                </h2>
                <p class="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                    {{ $slide['subtitle'] }}
                </p>
                <a href="{{ $slide['link'] }}" 
                   class="inline-block bg-white text-blue-800 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition duration-200 shadow-lg">
                   {{ $slide['cta'] }}
                   <svg class="w-4 h-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                   </svg>
                </a>
            </div>
        </div>
    </div>
    @endforeach

    <!-- Navigation -->
    <div class="absolute inset-0 flex items-center justify-between px-6">
        <button @click="currentSlide = (currentSlide - 1 + {{ count($slides) }}) % {{ count($slides) }}"
                class="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
        </button>
        <button @click="currentSlide = (currentSlide + 1) % {{ count($slides) }}"
                class="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
        </button>
    </div>

    <!-- Indicators -->
    <div class="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        @foreach($slides as $i => $slide)
        <button @click="currentSlide = {{ $i }}"
                class="w-3 h-3 rounded-full transition-all duration-300"
                :class="currentSlide === {{ $i }} ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'">
        </button>
        @endforeach
    </div>
</div>