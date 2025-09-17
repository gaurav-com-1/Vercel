'use client'; // NEXT.JS CHANGE: This page is interactive (state for filter, lightbox) and must be a client component.

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CgClose } from 'react-icons/cg';
import { FaSearchPlus } from 'react-icons/fa';
import Image from 'next/image';

const imageData = [
    { id: 1, category: 'weightlifting', src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    { id: 2, category: 'facility', src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    { id: 3, category: 'classes', src: 'https://images.unsplash.com/photo-1578874691223-64558a3ca096?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, category: 'cardio', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    { id: 5, category: 'weightlifting', src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    { id: 6, category: 'classes', src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    { id: 7, category: 'facility', src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80' },
    { id: 8, category: 'weightlifting', src: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
];

const filters = [ { name: 'All', key: 'all' }, { name: 'Weightlifting', key: 'weightlifting' }, { name: 'Cardio', key: 'cardio' }, { name: 'Classes', key: 'classes' }, { name: 'Facility', key: 'facility' }];

const GalleryPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredImages = useMemo(() => activeFilter === 'all' ? imageData : imageData.filter(image => image.category === activeFilter), [activeFilter]);

    return (
        <div className="bg-primary">
            <section className="relative h-[50vh] flex items-center justify-center text-center">
                <Image src="https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gym equipment" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 px-6">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white">Our Gallery</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl text-accent mt-4 font-light tracking-wide">Witness the Strength, Feel the Energy</motion.p>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center flex-wrap gap-4 mb-12">
                        {filters.map(filter => <button key={filter.key} onClick={() => setActiveFilter(filter.key)} className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 ${activeFilter === filter.key ? 'bg-accent text-primary' : 'bg-secondary text-text-primary hover:bg-accent/80 hover:text-primary'}`}>{filter.name}</button>)}
                    </div>
                    <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <AnimatePresence>
                            {filteredImages.map((image) => (
                                <motion.div key={image.id} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3 }} className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square" onClick={() => setSelectedImage(image.src)}>
                                    <Image src={image.src} alt={image.category} fill className="object-cover transition-transform duration-300 group-hover:scale-110" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center"><FaSearchPlus className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" /></div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }} className="relative">
                            <Image src={selectedImage} alt="Enlarged view" width={1200} height={800} className="max-w-full max-h-[90vh] object-contain rounded-lg" />
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="absolute -top-4 -right-4 bg-accent text-primary rounded-full p-2" onClick={() => setSelectedImage(null)}><CgClose size={24} /></motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryPage;