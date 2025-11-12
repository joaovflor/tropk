import { useState } from 'react';
import InstagramModal from './InstagramModal';

export default function Highlights() {
  const [selectedHighlight, setSelectedHighlight] = useState<string | null>(null);
  
  const highlights = [
    {
      id: 1,
      title: "Novas Peças",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba810db?w=150&h=150&fit=crop&crop=center",
      active: true
    },
    {
      id: 2,
      title: "Tops",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=150&h=150&fit=crop&crop=center",
      active: false
    },
    {
      id: 3,
      title: "Bolsas",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop&crop=center",
      active: false
    },
    {
      id: 4,
      title: "Acessórios",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=150&h=150&fit=crop&crop=center",
      active: false
    },
    {
      id: 5,
      title: "Depoimentos",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=150&h=150&fit=crop&crop=center",
      active: false
    },
    {
      id: 6,
      title: "Processo",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=150&h=150&fit=crop&crop=center",
      active: false
    }
  ];

  
}
