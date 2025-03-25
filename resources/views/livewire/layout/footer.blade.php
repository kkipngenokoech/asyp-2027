<footer class="bg-black text-white py-12">
    <div class="container mx-auto px-4">
        <!-- Main Footer Row -->
        <div class="flex flex-wrap justify-between items-start gap-8 sm:flex-row flex-col text-center sm:text-left">
            
            <!-- Logo & Store Hours -->
            <div class="flex flex-col sm:flex-row sm:items-center items-center space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
                <img src="{{ asset('images/terry-logo.webp') }}" alt="Terry's Rugs" class="h-16">
                <div>
                    <h3 class="text-lg font-bold">Store Hours</h3>
                    <div class="space-y-1 text-sm">
                        <p>Tuesday to Friday: 9 am - 5 pm</p>
                        <p>Saturday: 9 am - 3 pm</p>
                        <p>Sunday and Monday: Closed</p>
                    </div>
                </div>
            </div>

            <!-- Quick Links (Two Columns with One Title) -->
            <div class="w-full sm:w-auto">
                <h3 class="text-lg font-bold text-red-500 mb-4">Quick Links</h3>
                <div class="grid grid-cols-2 gap-x-6 gap-y-2 text-center sm:text-left">
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-red-500 transition-colors">Home</a></li>
                        <li><a href="#" class="hover:text-red-500 transition-colors">Rugs</a></li>
                        <li><a href="#" class="hover:text-red-500 transition-colors">About</a></li>
                        <li><a href="#" class="hover:text-red-500 transition-colors">Services</a></li>
                    </ul>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-red-500 transition-colors">Local Support</a></li>
                        <li><a href="#" class="hover:text-red-500 transition-colors">Account</a></li>
                        <li><a href="#" class="hover:text-red-500 transition-colors">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <!-- Visit Us -->
            <div class="w-full sm:w-auto">
                <h3 class="text-lg font-bold">Visit Us</h3>
                <div class="space-y-1">
                    <p class="text-red-500">50 Slack Road, Unit #2A</p>
                    <p class="text-red-500">Ottawa, Ontario, Canada</p>
                    <p class="text-red-500 font-bold text-xl">613-220-6593</p>
                </div>
            </div>

            <!-- Social Media -->
            <div class="w-full sm:w-auto">
                <h3 class="text-lg font-bold text-red-500 mb-4">Follow Us</h3>
                <div class="flex justify-center sm:justify-start gap-4">
                    <a href="#" class="hover:text-red-500 transition-colors"><i class="fab fa-facebook text-2xl"></i></a>
                    <a href="#" class="hover:text-red-500 transition-colors"><i class="fab fa-instagram text-2xl"></i></a>
                    <a href="#" class="hover:text-red-500 transition-colors"><i class="fab fa-tiktok text-2xl"></i></a>
                </div>
            </div>
            
        </div>

        <!-- Copyright & Policies (Centered Below) -->
        <div class="container mx-auto px-4 py-6 text-center border-t border-gray-700 mt-6">
            <p class="text-sm">&copy; 2025 Terry's Rugs | 
                <a href="#" class="text-red-500 hover:underline">Return Policy</a> | 
                <a href="#" class="text-red-500 hover:underline">Privacy Policy</a>
            </p>
        </div>
    </div>

    <!-- Back to Top Button -->
    <button id="backToTop"
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
        class="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-opacity opacity-0 invisible">
        <i class="fas fa-chevron-up text-xl"></i>
    </button>

    <script>
        // Show Back to Top button when scrolling
        document.addEventListener("scroll", function() {
            let backToTop = document.getElementById("backToTop");
            if (window.scrollY > 300) {
                backToTop.classList.remove("opacity-0", "invisible");
            } else {
                backToTop.classList.add("opacity-0", "invisible");
            }
        });
    </script>
</footer>
