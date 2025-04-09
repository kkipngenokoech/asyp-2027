<div>
    <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4 max-w-6xl">
            <!-- Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Meet the Organizers</h2>
                <div class="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    The team behind the event, dedicated to fostering knowledge and innovation.
                </p>
            </div>

            <!-- Organizers Grid -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                @foreach ($organizers as $organizer)
                    <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition duration-200">
                        <!-- Image -->
                        <div class="h-64 bg-white overflow-hidden object-fit">
                            <img 
                            src="{{ asset($organizer['image']) }}" 
                            alt="{{ $organizer['name'] }}" 
                            class="w-full h-full object-cover"
                            loading="lazy"
                            onerror="this.src='{{ asset('images/organizers/default.jpg') }}'"
                        >
                        
                        </div>
                        
                        <!-- Details -->
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900">{{ $organizer['name'] }}</h3>
                            <p class="text-blue-600 font-medium mb-2">
                                {{ $organizer['role'] ?? 'Role not provided' }}
                            </p>
                            <p class="text-gray-600 mb-4">
                                {{ $organizer['description'] ?? 'Description not provided' }}
                            </p>
                            
                            <!-- Social Links -->
                            <div class="flex flex-wrap gap-2">
                                @isset($organizer['social']['twitter'])
                                    <a href="{{ $organizer['social']['twitter'] }}" class="inline-flex items-center px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm transition">
                                        <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                        Twitter
                                    </a>
                                @endisset
                                
                                @isset($organizer['social']['linkedin'])
                                    <a href="{{ $organizer['social']['linkedin'] }}" class="inline-flex items-center px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm transition">
                                        <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm12.5 12.268h-3v-5.5c0-.862-.312-1.448-1.084-1.448-.59 0-.938.395-1.095.776-.056.134-.072.318-.072.504v5.368h-3v-11h3v1.449c.595-.871 1.516-1.449 2.68-1.449 1.785 0 3 1.149 3 3.62v7.48z"/>
                                        </svg>
                                        LinkedIn
                                    </a>
                                @endisset
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
</div>
