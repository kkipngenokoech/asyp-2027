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



@endsection