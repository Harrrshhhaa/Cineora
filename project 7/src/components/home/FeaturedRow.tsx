import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MovieCard } from '@/components/movies/MovieCard';
import type { Movie } from '@/types';
import 'swiper/css';

interface FeaturedRowProps {
  title: string;
  movies: Movie[];
}

export function FeaturedRow({ title, movies }: FeaturedRowProps) {
  const swiperRef = useRef<any>(null);

  return (
    <div className="px-4">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      
      <div className="group relative">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}