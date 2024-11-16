"use client";

export default function Body() {
    return (
        <div className="container max-w-7xl mx-auto my-20 pb-20 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-orange-600 mb-4">BSC Hospital - We care for you</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-orange-500">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Services</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Emergency care</li>
                        <li>General surgery</li>
                        <li>Internal medicine</li>
                        <li>Obstetrics and gynecology</li>
                        <li>Pediatrics</li>
                        <li>Radiology</li>
                        <li>Pharmacy</li>
                        <li>Laboratory services</li>
                        <li>Physical therapy</li>
                        <li>Nutrition counseling</li>
                    </ul>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-orange-500">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Mission</h2>
                    <p className="text-gray-700">Our mission is to provide high-quality, compassionate care to all of our patients and their families. We are committed to improving the health and well-being of the communities we serve by delivering exceptional patient care, education, and research. We strive to be a leader in healthcare innovation and to provide the best possible care for our patients.</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-orange-500">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Vision</h2>
                    <p className="text-gray-700">Our vision is to be the hospital of choice for patients, physicians, and employees. We aim to be recognized for our commitment to excellence in patient care, education, and research. We will achieve this by providing high-quality, compassionate care to all of our patients and their families. We will be a leader in healthcare innovation and will continue to improve the health and well-being of the communities we serve.</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-orange-500">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Values</h2>
                    <p className="text-gray-700">Our values include integrity, compassion, excellence, and innovation. We are dedicated to providing the best possible care for our patients and their families. We believe in treating everyone with respect and dignity, and we are committed to continuous improvement and innovation in healthcare.</p>
                </div>
            </div>
        </div>
    );
}