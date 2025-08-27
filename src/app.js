import React, { useState } from 'react';

// Main App Component
const App = () => {
    return (
        <div className="bg-gray-100 text-gray-800 antialiased">
            <MessageBox />
            <Navbar />
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <GallerySection />
            <HafjellResortSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

// Custom Message Box Component
const MessageBox = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('');

    // Function to show the message box
    window.showMessageBox = (msg) => {
        setMessage(msg);
        setIsVisible(true);
    };

    // Function to hide the message box
    window.hideMessageBox = () => {
        setIsVisible(false);
        setMessage('');
    };

    if (!isVisible) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] rounded-lg" onClick={window.hideMessageBox}></div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl z-[1000] max-w-sm text-center">
                <p className="text-lg font-semibold mb-4 text-gray-900 rounded-lg">{message}</p>
                <button
                    onClick={window.hideMessageBox}
                    className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition duration-300 shadow-md transform hover:scale-105"
                >
                    Close
                </button>
            </div>
        </>
    );
};


// Navigation Bar Component
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-3xl font-extrabold text-gray-900 rounded-lg">Mostugu</a>
                <div className="hidden md:flex space-x-8">
                    <NavLink href="#about" onClick={closeMenu}>About Mostugu</NavLink>
                    <NavLink href="#features" onClick={closeMenu}>Features</NavLink>
                    <NavLink href="#gallery" onClick={closeMenu}>Gallery</NavLink>
                    <NavLink href="#hafjell" onClick={closeMenu}>Hafjell Resort</NavLink>
                    <NavLink href="#contact" onClick={closeMenu}>Enquire</NavLink>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none focus:text-blue-700 rounded-lg">
                        {isOpen ? <span className="text-2xl">✖️</span> : <span className="text-2xl">☰</span>}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white py-2 shadow-md">
                    <MobileNavLink href="#about" onClick={closeMenu}>About Mostugu</MobileNavLink>
                    <MobileNavLink href="#features" onClick={closeMenu}>Features</MobileNavLink>
                    <MobileNavLink href="#gallery" onClick={closeMenu}>Gallery</MobileNavLink>
                    <MobileNavLink href="#hafjell" onClick={closeMenu}>Hafjell Resort</MobileNavLink>
                    <MobileNavLink href="#contact" onClick={closeMenu}>Enquire</MobileNavLink>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ href, children }) => (
    <a href={href} className="text-lg text-gray-700 hover:text-blue-700 transition duration-300 font-medium px-3 py-2 rounded-lg">
        {children}
    </a>
);

const MobileNavLink = ({ href, children, onClick }) => (
    <a href={href} onClick={onClick} className="block px-6 py-3 text-lg text-gray-700 hover:bg-blue-100 transition duration-300 rounded-lg">
        {children}
    </a>
);

// Hero Section Component
const HeroSection = () => {
    return (
        <header
            className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/images/image_01.jpg')" }} /* Updated image path */
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg"></div>
            <div className="relative z-10 text-center p-6 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg rounded-lg">Welcome to Mostugu</h1>
                <p className="text-xl md:text-2xl mb-10 drop-shadow-md rounded-lg">Your luxurious ski-in/ski-out cabin in the heart of Hafjell</p>
                <a
                    href="#contact"
                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 transform hover:scale-105 active:scale-95"
                >
                    Enquire Availability
                </a>
            </div>
        </header>
    );
};

// About Mostugu Section Component
const AboutSection = () => {
    const features = [
        { icon: '🛏️', title: '5 Spacious Bedrooms', description: 'Ample space for everyone, comfortably sleeping 12-14 guests.' },
        { icon: '🛀', title: '2 Modern Bathrooms', description: 'Ensuring comfort and convenience for all guests.' },
        { icon: '🔥', title: 'Cozy Fireplace', description: 'Relax and unwind by the warmth of a crackling fire.' },
        { icon: '🔌🚗', title: 'Electric Car Charger', description: 'Convenient charging available for your electric vehicle.' },
        { icon: '📶', title: 'High-Speed Wi-Fi', description: 'Stay connected throughout your stay.' },
        { icon: '🧖‍♀️', title: 'Relaxing Sauna', description: 'Unwind after a day on the slopes or trails.' },
    ];

    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 rounded-lg">About Mostugu</h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16 text-gray-700 rounded-lg">
                    Mostugu is a stunning cabin located at <span className="font-semibold text-blue-700">Storslåvegen 42, 2636 Øyer</span> in Norway, offering unparalleled access to Hafjell ski resort.
                    Perfect for large families or groups, our cabin provides comfortable accommodation for 12-14 people with modern amenities and a cozy atmosphere.
                    Experience the convenience of <span className="font-semibold text-blue-700">ski-in/ski-out</span> access for both alpine and cross-country skiing right from your doorstep.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center">
                            <span className="text-5xl mb-4" role="img" aria-label={feature.title}>{feature.icon}</span>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 rounded-lg">{feature.title}</h3>
                            <p className="text-gray-700 text-center rounded-lg">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Features Section Component
const FeaturesSection = () => {
    const activities = [
        { icon: '⛷️', title: 'Downhill Skiing', description: 'Direct access to Hafjell\'s fantastic alpine slopes.' },
        { icon: '🎿', title: 'Cross-Country Skiing', description: 'Explore miles of groomed trails right from the cabin.' },
        { icon: '🚶‍♀️', title: 'Summer Hiking', description: 'Discover scenic trails and breathtaking views.' },
        { icon: '🚴', title: 'Downhill Cycling', description: 'Thrill-seeking adventures at Hafjell Bike Park.' },
    ];

    return (
        <section id="features" className="py-16 bg-blue-700 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-md rounded-lg">Cabin Highlights & Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
                    <div className="text-center bg-blue-600 p-8 rounded-xl shadow-lg">
                        <span className="text-6xl mb-4 block" role="img" aria-label="mountain">⛰️</span>
                        <h3 className="text-2xl font-semibold mb-4 rounded-lg">Unbeatable Location</h3>
                        <p className="text-lg leading-relaxed text-blue-100 rounded-lg">
                            Mostugu boasts a true ski-in/ski-out location, making it effortless to hit the slopes or cross-country trails.
                            Just step out your door and begin your adventure!
                        </p>
                    </div>
                    <div className="text-center bg-blue-600 p-8 rounded-xl shadow-lg">
                        <span className="text-6xl mb-4 block" role="img" aria-label="utensils">🍽️</span>
                        <h3 className="text-2xl font-semibold mb-4 rounded-lg">Spacious Open Kitchen</h3>
                        <p className="text-lg leading-relaxed text-blue-100 rounded-lg">
                            Our large, open-plan kitchen area is perfect for communal cooking and dining,
                            creating memorable moments with family and friends.
                        </p>
                    </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-10 drop-shadow-md rounded-lg">Year-Round Activities from Mostugu</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {activities.map((activity, index) => (
                        <div key={index} className="bg-white text-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <span className="text-4xl mb-4 text-blue-700" role="img" aria-label={activity.title}>{activity.icon}</span>
                            <h4 className="text-xl font-semibold mb-2 rounded-lg">{activity.title}</h4>
                            <p className="text-center text-gray-700 rounded-lg">{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Image Gallery Section Component
const GallerySection = () => {
    // State to manage which gallery is active: 'interior', 'exterior', or null (none)
    const [activeGallery, setActiveGallery] = useState(null);

    // Update image paths to reference local public/images folder
    const interiorImages = Array.from({ length: 9 }, (_, i) => `/images/image_${String(i + 2).padStart(2, '0')}.jpg`);
    const exteriorImages = Array.from({ length: 5 }, (_, i) => `/images/image_${String(i + 11).padStart(2, '0')}.jpg`);

    return (
        <section id="gallery" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 rounded-lg">Mostugu Image Gallery</h2>

                <div className="flex justify-center space-x-4 mb-12">
                    <button
                        onClick={() => setActiveGallery('interior')}
                        className={`py-3 px-8 rounded-full font-bold shadow-md transition duration-300 transform hover:scale-105 ${
                            activeGallery === 'interior'
                                ? 'bg-blue-700 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                        }`}
                    >
                        Interior Images
                    </button>
                    <button
                        onClick={() => setActiveGallery('exterior')}
                        className={`py-3 px-8 rounded-full font-bold shadow-md transition duration-300 transform hover:scale-105 ${
                            activeGallery === 'exterior'
                                ? 'bg-blue-700 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                        }`}
                    >
                        Exterior Images
                    </button>
                </div>

                {activeGallery === 'interior' && (
                    <div className="mb-12">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-8 rounded-lg">Interior Views</h3>
                        <div className="gallery-grid">
                            {interiorImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Cabin Interior ${index + 1}`}
                                    className="w-full h-auto rounded-xl shadow-md object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {activeGallery === 'exterior' && (
                    <div>
                        <h3 className="text-3xl font-semibold text-gray-800 mb-8 rounded-lg">Exterior Views</h3>
                        <div className="gallery-grid">
                            {exteriorImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Cabin Exterior ${index + 1}`}
                                    className="w-full h-auto rounded-xl shadow-md object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {!activeGallery && (
                    <p className="text-xl text-gray-600 mt-8 rounded-lg">Select a category above to view images.</p>
                )}
            </div>
        </section>
    );
};

// Hafjell Resort Information Section Component
const HafjellResortSection = () => {
    return (
        <section id="hafjell" className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-md rounded-lg">Discover Hafjell Ski Resort</h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16 text-blue-100 rounded-lg">
                    Hafjell is one of Norway's most popular ski destinations, offering a vibrant atmosphere and activities for all seasons and ages.
                    From thrilling winter sports to exciting summer adventures, there's always something to do.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left max-w-6xl mx-auto">
                    {/* Getting There */}
                    <div className="bg-white bg-opacity-15 p-8 rounded-xl shadow-xl">
                        <h3 className="text-3xl font-semibold mb-6 drop-shadow-sm flex items-center rounded-lg">
                            <span role="img" aria-label="route" className="text-3xl mr-3">🗺️</span> How to Get Here from Oslo
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-bold mb-2 rounded-lg">By Car:</h4>
                                <p className="text-lg text-blue-100 rounded-lg">
                                    The drive from Oslo to Storslåvegen 42, Øyer (Hafjell) is approximately 200-202 km and takes about <span className="font-semibold">2 hours 20 minutes to 3 hours 15 minutes</span>.
                                    The most common route is via the <span className="font-semibold">E6 North</span>. Be aware that there are toll roads, especially to Mosetertoppen and Hafjelltoppen.
                                    Electric car charging stations are available at Hafjell parking areas.
                                </p>
                                <p className="text-sm mt-3 opacity-70 italic rounded-lg">
                                    *Detailed driving directions from Oslo: Take E6 North towards Lillehammer. Take exit 76 for Fv213 towards Moelv/Stavsjø. Continue on Fv213, then merge onto E6 again towards Trondheim. Take an exit towards Fv312, turn right onto Sørbygdsvegen, then left to stay on Sørbygdsvegen. Turn left onto Mosætervegen and follow signs to Storslåvegen 42. Some roads leading directly to the cabin area might be restricted or involve tolls.*
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 rounded-lg">By Train:</h4>
                                <p className="text-lg text-blue-100 rounded-lg">
                                    Frequent train services run from Oslo S and Oslo Airport (Gardermoen) to Lillehammer Skysstasjon.
                                    The journey from Oslo S takes about <span className="font-semibold">2 hours 7 minutes</span>, and from Oslo Airport, it's approximately 1 hour 45 minutes.
                                    From Lillehammer, you can take a local bus or a taxi to Hafjell/Øyer.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 rounded-lg">By Bus:</h4>
                                <p className="text-lg text-blue-100 rounded-lg">
                                    Buses operate from Oslo bussterminal to Lillehammer Skysstasjon, with a journey time of about <span className="font-semibold">2 hours 35 minutes</span>.
                                    From Lillehammer, local buses are available to Hafjell/Øyer. The Hafjell bus also provides services within the resort area.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Activities */}
                    <div className="bg-white bg-opacity-15 p-8 rounded-xl shadow-xl">
                        <h3 className="text-3xl font-semibold mb-6 drop-shadow-sm flex items-center rounded-lg">
                            <span role="img" aria-label="ski boot" className="text-3xl mr-3">❄️</span> Activities in Hafjell All Year
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-bold mb-2 rounded-lg">Winter Wonderland:</h4>
                                <ul className="list-disc list-inside text-lg space-y-1 ml-4 text-blue-100 rounded-lg">
                                    <li><span className="font-semibold">Downhill Skiing & Snowboarding:</span> Hafjell boasts slopes for all skill levels, from gentle children's areas to challenging black runs and terrain parks.</li>
                                    <li><span className="font-semibold">Cross-Country Skiing:</span> Over 600 km of groomed trails in Øyerfjellet, including lighted trails at Mosetertoppen for evening adventures.</li>
                                    <li><span className="font-semibold">Night Skiing:</span> Available Tuesday to Thursday during peak season.</li>
                                    <li><span className="font-semibold">Dog Sledding:</span> Experience the magical winter landscape.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 rounded-lg">Summer Adventures:</h4>
                                <ul className="list-disc list-inside text-lg space-y-1 ml-4 text-blue-100 rounded-lg">
                                    <li><span className="font-semibold">Hiking:</span> Explore countless scenic trails in the beautiful Gudbrandsdalen Valley.</li>
                                    <li><span className="font-semibold">Downhill Cycling (Hafjell Bike Park):</span> Enjoy the pumptrack, skill centers, bike rentals, and various courses for all levels.</li>
                                    <li><span className="font-semibold">Dog Sledding:</span> A unique summer experience with trolleys.</li>
                                    <li><span className="font-semibold">River Rafting:</span> Head to Sjoa (about 1 hour drive) for thrilling rafting, canyoning, and river boarding.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 rounded-lg">Year-Round & Nearby Attractions:</h4>
                                <ul className="list-disc list-inside text-lg space-y-1 ml-4 text-blue-100 rounded-lg">
                                    <li><span className="font-semibold">Lilleputthammer Family Park:</span> A miniature town with rides and playgrounds, great for families.</li>
                                    <li><span className="font-semibold">Norwegian Public Road Museum:</span> Explore history and vehicles.</li>
                                    <li><span className="font-semibold">Wheel Bobsleigh:</span> Try an Olympic activity at Lillehammer Olympic Bob and Toboggan Track.</li>
                                    <li><span className="font-semibold">Maihaugen Open-air Museum:</span> One of Norway's largest open-air museums.</li>
                                    <li><span className="font-semibold">Jorekstad Aquatic Center:</span> Large indoor bathing facility in Lillehammer.</li>
                                    <li><span className="font-semibold">The Gondola:</span> Enjoy panoramic views as you ascend the mountain.</li>
                                    <li><span className="font-semibold">Lillehammer Town:</span> Famous for its pedestrian street, shops, and museums.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact & Inquiry Section Component
const ContactSection = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const dates = event.target.dates.value;
        const guests = event.target.guests.value;
        const message = event.target.message.value;

        // Simulate email send
        const emailSubject = `Availability Inquiry for Mostugu from ${name}`;
        const emailBody = `
            Name: ${name}
            Email: ${email}
            Preferred Dates: ${dates || 'Not specified'}
            Number of Guests: ${guests}
            Message:
            ${message}
        `;

        console.log("Simulating email send:");
        console.log("To: norma.lovhaugen@gmail.com");
        console.log("Subject: " + emailSubject);
        console.log("Body: " + emailBody);

        // Display custom success message using the globally accessible function
        window.showMessageBox("Thank you for your enquiry! We have received your message and will get back to you at norma.lovhaugen@gmail.com shortly.");

        event.target.reset(); // Clear the form
    };

    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 rounded-lg">Enquire Availability for Mostugu</h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-16 text-gray-700 rounded-lg">
                    Interested in booking Mostugu for your next Hafjell getaway? Fill out the form below, and we'll get back to you shortly!
                </p>

                <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-50 p-8 rounded-xl shadow-xl border border-gray-100">
                    <div className="mb-6 text-left">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name:</label>
                        <input
                            type="text" id="name" name="name" required
                            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                    </div>
                    <div className="mb-6 text-left">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email:</label>
                        <input
                            type="email" id="email" name="email" required
                            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                    </div>
                    <div className="mb-6 text-left">
                        <label htmlFor="dates" className="block text-gray-700 text-sm font-bold mb-2">Preferred Dates (e.g., DD/MM/YYYY - DD/MM/YYYY):</label>
                        <input
                            type="text" id="dates" name="dates"
                            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                    </div>
                    <div className="mb-6 text-left">
                        <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">Number of Guests:</label>
                        <input
                            type="number" id="guests" name="guests" min="1" max="14" defaultValue="12"
                            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                    </div>
                    <div className="mb-6 text-left">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message:</label>
                        <textarea
                            id="message" name="message" rows="5"
                            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95"
                    >
                        Send Enquiry
                    </button>
                </form>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6 text-center md:flex md:justify-between md:items-center">
                <div className="mb-6 md:mb-0 rounded-lg">
                    <h4 className="text-2xl font-bold mb-2 rounded-lg">Mostugu</h4>
                    <p className="text-gray-400 rounded-lg">Storslåvegen 42, 2636 Øyer, Norway</p>
                    <p className="text-gray-400 rounded-lg">Email: <a href="mailto:norma.lovhaugen@gmail.com" className="hover:underline text-blue-400">norma.lovhaugen@gmail.com</a></p>
                </div>
                <div className="flex space-x-6 justify-center rounded-lg">
                    <a href="#about" className="text-gray-400 hover:text-white transition duration-300 rounded-lg">About</a>
                    <a href="#features" className="text-gray-400 hover:text-white transition duration-300 rounded-lg">Features</a>
                    <a href="#gallery" className="text-gray-400 hover:text-white transition duration-300 rounded-lg">Gallery</a>
                    <a href="#hafjell" className="text-gray-400 hover:text-white transition duration-300 rounded-lg">Hafjell</a>
                    <a href="#contact" className="text-gray-400 hover:text-white transition duration-300 rounded-lg">Enquire</a>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-500 rounded-lg">
                &copy; 2025 Mostugu. All rights reserved.
            </div>
        </footer>
    );
};

export default App;