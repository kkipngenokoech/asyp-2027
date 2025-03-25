<div class="w-full bg-gradient-to-br from-gray-700 via-red-800 to-gray-700 text-white py-8 px-4">
    <div class="max-w-full mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold">Subscribe to receive the latest news about our services</h2>
        <p class="text-sm text-gray-200 mt-1">Don't miss our latest news and special offers</p>

        @if (session()->has('message'))
            <div class="mt-4 bg-green-500 text-white text-sm p-2 rounded-md">
                {{ session('message') }}
            </div>
        @endif

        <form wire:submit.prevent="subscribe" class="mt-4 flex justify-center">
            @csrf
            <input type="email" wire:model="email" placeholder="Enter the email address"
                class="w-64 md:w-96 px-4 py-2 text-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <button type="submit"
                class="bg-black text-white px-6 py-2 rounded-r-md hover:bg-gray-800 transition">
                Subscribe
            </button>
        </form>

        @error('email') 
            <p class="text-yellow-300 text-xs mt-2">{{ $message }}</p> 
        @enderror
    </div>
</div>
