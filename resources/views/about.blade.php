@extends('layouts.app')

@section('content')

@php
$values = [
    'Esprit d\'équipe' => 'La clé de notre succès repose sur la collaboration et une synergie forte pour relever les défis.',
    'Excellence' => 'Nous nous engageons individuellement et collectivement à nous dépasser et à améliorer nos standards de qualité.',
    'Engagement' => 'Nos efforts sont concentrés sur l’atteinte et l’amélioration continue des objectifs fixés.',
    'Responsabilité' => 'Nous honorons nos engagements et assumons nos décisions et actions envers nos employés, nos clients, nos partenaires et l’environnement.'
];
$meetkip = [
    'title' => 'Rencontrer kip',
    'image' => 'kip-image.webp',
    'paragraphs' => [
        'Bonjour, je m\'appelle kip. Je travaille dans l\'industrie du tapis depuis 1982. Ma passion pour les tapis s\'est développée dès mes premiers pas dans ce métier fascinant. Au fil des années, j\'ai eu l\'opportunité de travailler avec des artisans talentueux et d\'apprendre les secrets de ce métier ancestral.',
        'Au fil des ans, j\'ai acquis une expérience précieuse auprès de marchands de tapis réputés de Montréal et d\'Ottawa et j\'ai appris à distinguer les caractéristiques de nombreux motifs de tapis, du tissage, des finis et des teintures, transmettant ces connaissances à mon personnel et à mes clients. En tant qu\'entreprise familiale, nous sommes présents à Ottawa depuis 2001. Offrant une vaste sélection de tapis, nous sommes également experts en services tels que le nettoyage (lavage à la main) et la réparation de tous les tapis anciens et modernes.',
        'Chez kip\'s ieees, nous sommes fiers d\'offrir à nos clients un excellent service, un grand choix de tapis, les meilleures ailes et l\'installation de rampes d\'escalier. Nous espérons que vous viendrez nous rendre visite bientôt et que vous profiterez pleinement de notre expertise. À bientôt !',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

    ]
];
@endphp


<div class="flex flex-col md:flex-row bg-white p-6 md:p-12 gap-8 md:gap-12">
    <div class="md:w-1/2">
        <img src="{{ asset('images/' . $meetkip['image']) }}" 
             alt="kip" 
             class="w-full h-auto min-h-[400px] max-h-[800px] object-cover object-top rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    </div>
    <div class="md:w-1/2 md:pl-10 flex flex-col justify-center space-y-4">
        <h2 class="text-3xl font-bold text-red-700 mb-2">
            {{ $meetkip['title'] }}
        </h2>
        @foreach($meetkip['paragraphs'] as $paragraph)
            <p class="text-gray-600 leading-relaxed md:text-justify">
                {{ $paragraph }}
            </p>
        @endforeach
        <div class="pt-4">
            <a href="#" 
               class="inline-block text-sm font-medium bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md">
                Visitez kip's ieees
            </a>
        </div>
    </div>
</div>

<div class="bg-white p-6 md:p-12">
    {{-- First Section --}}
    <div class="flex flex-col md:flex-row items-center gap-6">
        <div class="md:w-1/2 md:text-justify">
            <h2 class="text-3xl font-bold text-red-700 mb-2">La relève</h2>
            <p class="text-gray-700">
                {{ $meetkip['paragraphs'][0] }}
            </p><br/>
            <p class="text-gray-700">
                {{ $meetkip['paragraphs'][3] }}
            </p>
            <br/>
            <p class="text-gray-700">
                {{ $meetkip['paragraphs'][3] }}
            </p>
            <a href="#" class="inline-block mt-6 bg-red-700 text-white py-2 px-6 rounded-md hover:bg-red-800 transition">
                Visitez kip's ieees
            </a>
        </div>
        <div class="md:w-1/2">
           <img src="{{ asset('images/kid-image.avif') }}" alt="Sitting ieees" class="w-full h-96 object-contain object-top rounded-lg shadow-md">
        </div>
    </div>

    {{-- Mission & Vision combined section --}}
    <div class="mt-10 space-y-8">
        {{-- Mission section --}}
        <div class="relative h-[400px] group overflow-hidden rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_30px_rgba(0,0,0,0.2)] transition-all duration-300">
            <img src="{{ asset('images/ieee-on-wall.jpg') }}" alt="Our Mission" 
                class="w-full h-full object-cover transition-all duration-300 brightness-[0.6] group-hover:brightness-[0.3]">
            <div class="absolute inset-0 p-8 flex flex-col justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-3xl font-bold text-white mb-4">Mission</h3>
                <p class="text-white text-lg leading-relaxed">
                    {{ $meetkip['paragraphs'][1] }}
                </p>
            </div>
        </div>

        {{-- Vision section --}}
        <div class="relative h-[400px] group overflow-hidden rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_30px_rgba(0,0,0,0.2)] transition-all duration-300">
            <img src="{{ asset('images/white-ieees.jpg') }}" alt="Vision" 
                class="w-full h-full object-cover transition-all duration-300 brightness-[0.6] group-hover:brightness-[0.3]">
            <div class="absolute inset-0 p-8 flex flex-col justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-3xl font-bold text-white mb-4">Vision</h3>
                <p class="text-white text-lg leading-relaxed">
                    {{ $meetkip['paragraphs'][2] }}
                </p>
            </div>
        </div>
    </div>

    {{-- Values section --}}
    <div class="mt-12 p-8 rounded-lg bg-gradient-to-br from-gray-700 via-red-800 to-gray-700">
        <h2 class="text-2xl font-bold text-white mb-8">Valeurs</h2>
        <div class="grid md:grid-cols-2 gap-6">
            @foreach ($values as $title => $description)
                <div class="bg-gray-50 p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-gray-100">
                    <h3 class="text-lg font-semibold text-gray-800 flex items-center gap-3">
                        <svg class="w-6 h-6 text-red-700" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l2.92 6.62L22 9.24l-5 4.87L18.84 22 12 18.27 5.16 22 7 14.11l-5-4.87 7.08-1.62L12 2z"/>
                        </svg>
                        {{ $title }}
                    </h3>
                    <p class="text-gray-700 mt-3 leading-relaxed">{{ $description }}</p>
                </div>
            @endforeach
        </div>
    </div>
</div>
@livewire('home.testimony')

@endsection