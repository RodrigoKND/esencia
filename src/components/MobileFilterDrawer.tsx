import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { FilterSidebar } from './FilterSidebar';
import { Filters } from '@/hooks/useFilters';

interface MobileFilterDrawerProps {
  filters: Filters;
  onFiltersChange: (filters: Partial<Filters>) => void;
  onClearFilters: () => void;
}

export const MobileFilterDrawer = ({ 
  filters, 
  onFiltersChange, 
  onClearFilters, 
}: MobileFilterDrawerProps) => {
  const activeFiltersCount = 
    filters.marca.length + 
    filters.categoria.length + 
    (filters.precio ? 1 : 0) + 
    (filters.busqueda ? 1 : 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
          {activeFiltersCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <FilterSidebar
            filters={filters}
            onFiltersChange={onFiltersChange}
            onClearFilters={onClearFilters}
            className="border-0 p-0"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};