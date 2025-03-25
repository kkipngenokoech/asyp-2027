@php
$tabSections = [
    'about' => [
        'title' => 'About the Summer School',
        'description' => 'The IEEE Computer Vision Summer School 2025 provides an immersive learning experience focused on deep learning for computer vision, edge AI, remote sensing applications, and ethical AI considerations. Participants will engage with leading experts, hands-on labs, and networking sessions to explore transformative industry applications.',
        'features' => [
            [
                'icon' => '<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
                'title' => 'Learn from Experts',
                'description' => 'Top researchers from academia and industry'
            ],
            [
                'icon' => '<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
                'title' => 'Hands-on Training',
                'description' => 'Practical experience with CV/AI tools'
            ],
            [
                'icon' => '<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
                'title' => 'Networking',
                'description' => 'Connect with peers and professionals'
            ],
            [
                'icon' => '<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>',
                'title' => 'Collaboration',
                'description' => 'Opportunities for joint projects'
            ]
        ]
    ],
    'topics' => [
        'title' => 'Topics Covered',
        'description' => 'Participants will attend lectures and hands-on sessions on:',
        'topics' => [
            'Fundamentals of Computer Vision',
            'Deep Learning for Image Processing',
            'Edge AI and Embedded Vision Systems',
            'Ethical AI & Bias in Computer Vision',
            'Remote Sensing and Geospatial AI',
            'Generative AI for Vision Applications',
            'Medical Imaging and Healthcare AI',
            'Autonomous Systems & Robotics Vision'
        ]
    ],
    'apply' => [
        'title' => 'Application Process',
        'eligibility' => [
            'Graduate students in CS/EE/AI-related fields',
            'Researchers and faculty members',
            'Industry professionals with relevant background'
        ],
        'steps' => [
            'Complete the online application form',
            'Submit your CV and statement of interest',
            'Provide one recommendation letter',
            'IEEE members receive priority consideration'
        ]
    ]
    
];
@endphp

<section class="py-16 bg-gray-50" x-data="{ activeTab: 'about' }">
    <div class="container mx-auto px-4 max-w-6xl">

        <!-- Header -->
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                IEEE Computer Vision Summer School 2025
            </h2>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <!-- Tab Navigation -->
        <div class="flex justify-center mb-8">
            <div class="inline-flex rounded-lg bg-gray-200 p-1">
                @foreach(['about' => 'About', 'topics' => 'Topics', 'apply' => 'Apply'] as $tab => $label)
                    <button
                        @click="activeTab = '{{ $tab }}'"
                        :class="activeTab === '{{ $tab }}' ? 'bg-white shadow-md text-blue-600' : 'text-gray-600 hover:text-gray-800'"
                        class="px-4 py-3 text-sm font-medium rounded-md transition duration-300">
                        {{ $label }}
                    </button>
                @endforeach
            </div>
        </div>

        <!-- Tab Content -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">

            <!-- About Tab -->
            <div x-show="activeTab === 'about'" x-transition.opacity class="p-8 space-y-6">
                <h3 class="text-2xl font-bold text-gray-800">{{ $tabSections['about']['title'] }}</h3>
                <p class="text-gray-600 leading-relaxed">
                    {{ $tabSections['about']['description'] }}
                </p>
                <div class="grid md:grid-cols-2 gap-6">
                    @foreach ($tabSections['about']['features'] as $feature)
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                {!! $feature['icon'] !!}
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">{{ $feature['title'] }}</h4>
                                <p class="text-gray-600">{{ $feature['description'] }}</p>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>

            <!-- Topics Tab -->
            <div x-show="activeTab === 'topics'" x-transition.opacity class="p-8 space-y-6">
                <h3 class="text-2xl font-bold text-gray-800">{{ $tabSections['topics']['title'] }}</h3>
                <p class="text-gray-600">{{ $tabSections['topics']['description'] }}</p>
                <ul class="grid grid-cols-2 gap-4 list-disc list-inside text-gray-700">
                    @foreach ($tabSections['topics']['topics'] as $topic)
                        <li>{{ $topic }}</li>
                    @endforeach
                </ul>
            </div>

            <!-- Apply Tab -->
            <div x-show="activeTab === 'apply'" x-transition.opacity class="p-8 space-y-6">
                <h3 class="text-2xl font-bold text-gray-800">{{ $tabSections['apply']['title'] }}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 class="font-semibold text-gray-800">Eligibility:</h4>
                        <ul class="list-disc list-inside text-gray-700 space-y-2">
                            @foreach ($tabSections['apply']['eligibility'] as $eligibility)
                                <li>{{ $eligibility }}</li>
                            @endforeach
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-800">Steps:</h4>
                        <ul class="list-disc list-inside text-gray-700 space-y-2">
                            @foreach ($tabSections['apply']['steps'] as $step)
                                <li>{{ $step }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </div>
</section>
