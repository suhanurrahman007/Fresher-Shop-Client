import React from 'react';
import { CategoriesCard } from './CategoriesCard';
import SectionTitle from '@/components/share/SectionTitle';

const Categories = () => {
    return (
        <div className='space-y-5'>
            <SectionTitle header={'Categories'} miniHeader={'This is our all Categoriess'}/>
            <CategoriesCard />
        </div>
    );
};

export default Categories;