import React from 'react';
import { ServiceToolsCard } from './ServiceToolsCard';
import SectionTitle from '@/components/share/SectionTitle';

const ServiceTools = () => {
    return (
      <div className="space-y-5">
        <SectionTitle
          header={"Service Tools"}
          miniHeader={"This is our all services"}
        />
        <ServiceToolsCard />
      </div>
    );
};

export default ServiceTools;