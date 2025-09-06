import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const ProductCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Skeleton className="w-full h-64" />
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
          
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
          
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          
          <div className="flex items-center justify-between pt-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex space-x-2 w-full">
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="h-8 flex-1" />
        </div>
      </CardFooter>
    </Card>
  );
};