import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface DestinationCardProps {
  name: string;
  country: string;
  image: string;
  description: string;
  tags: string[];
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ name, country, image, description, tags }) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{country}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <Button variant="outline" className="w-full">Explore</Button>
      </div>
    </Card>
  );
};