@php
$speakers = [
    [
        'name' => 'John Smith',
        'image' => 'marcus8.avif',
        'bio' => 'John is a professor at University X with extensive research in AI and Robotics.'
    ],
    [
        'name' => 'Emily Johnson',
        'image' => 'marcus8.avif',
        'bio' => 'Emily is a leading researcher in computer vision at Company Y.'
    ],
    [
        'name' => 'Daniel Williams',
        'image' => 'marcus8.avif',
        'bio' => 'Daniel is a renowned AI expert with work in deep learning at University Z.'
    ],
    [
        'name' => 'Sophia Brown',
        'image' => 'marcus8.avif',
        'bio' => 'Sophia is a computer vision researcher and developer at Tech Corp.'
    ],
    [
        'name' => 'Oliver Jones',
        'image' => 'marcus8.avif',
        'bio' => 'Oliver specializes in AI algorithms and is a senior researcher at Tech Solutions.'
    ],
    [
        'name' => 'Ava Wilson',
        'image' => 'marcus8.avif',
        'bio' => 'Ava works on AI ethics and bias in computer vision at University A.'
    ],
    [
        'name' => 'Mason Taylor',
        'image' => 'marcus8.avif',
        'bio' => 'Mason is a developer and researcher in machine learning and vision systems.'
    ],
    [
        'name' => 'Isla Davies',
        'image' => 'marcus8.avif',
        'bio' => 'Isla is a renowned speaker on the future of AI and computer vision.'
    ]
];
@endphp

<section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 max-w-6xl">
        <!-- Header -->
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Speakers & Instructors
            </h2>
            <p class="text-lg text-gray-600">
                Our expert speakers come from leading universities, research labs, and industry partners.
            </p>
            <div class="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <!-- Speakers Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            @foreach ($speakers as $speaker)
                <div class="bg-white rounded-lg shadow-md p-4 text-center">
                    <img src="{{ asset('images/' . $speaker['image']) }}" alt="{{ $speaker['name'] }}" class="w-full h-40 object-contain rounded-lg mb-4">
                    <h4 class="text-xl font-semibold text-gray-800 mb-2">{{ $speaker['name'] }}</h4>
                    <p class="text-gray-600 text-sm">{{ $speaker['bio'] }}</p>
                </div>
            @endforeach
        </div>

        <!-- Update message -->
        <div class="text-center mt-8 text-gray-500 text-sm">
            <p>🔹 List of speakers will be updated soon!</p>
        </div>
    </div>
</section>
